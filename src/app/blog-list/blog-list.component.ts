import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../interfaces/blog-post.interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarSectionComponent } from '../navbar-section/navbar-section.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, FormsModule, NavbarSectionComponent, FooterSectionComponent]
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  searchText: string = '';
  activeTag: string | null = null;
  isSemanticSearchEnabled: boolean = false;
  isSearching: boolean = false;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.titleService.setTitle('Blog | Tomasz Jąder - Programowanie, Angular, AI');
    this.metaService.updateTag({
      name: 'description',
      content: 'Blog o programowaniu, Angular, JavaScript, Node.js i AI. Sprawdź moje projekty, tutoriale i przemyślenia programistyczne.'
    });

    this.posts = this.blogService.getPosts();

    this.route.queryParams.subscribe(params => {
      this.activeTag = params['tag'] || null;
      this.filterPosts();
    });
  }

  toggleSemanticSearch(): void {
    this.isSemanticSearchEnabled = !this.isSemanticSearchEnabled;
    this.filteredPosts = [];
    if (!this.isSemanticSearchEnabled) {
      this.filterPosts();
    }
  }

  onSearchInput(): void {
    if (!this.isSemanticSearchEnabled) {
      this.filterPosts();
    }
  }

  onSearchEnter(): void {
    if (this.isSemanticSearchEnabled) {
      this.performSemanticSearch();
    }
  }

  filterPosts(): void {
    if (this.isSemanticSearchEnabled) {
      return;
    } else {
      this.performLocalSearch();
    }
  }

  performLocalSearch(): void {
    let tempPosts = this.posts;
    if (this.activeTag) {
      tempPosts = tempPosts.filter(post =>
        post.tags && post.tags.includes(this.activeTag!)
      );
    }
    if (this.searchText) {
      tempPosts = tempPosts.filter(post =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.filteredPosts = tempPosts;
  }

  performSemanticSearch(): void {
    this.isSearching = true;
    this.blogService.searchPosts(this.searchText).subscribe({
      next: (response) => {
        if (response && response.results) {
          this.filteredPosts = response.results.map((result: any) => {
            const slug = result.url.split('/').pop() || '';
            const localPost = this.blogService.getPostBySlug(slug);

            if (localPost) {
              return {
                ...localPost,
              };
            } else {
              return {
                slug: slug,
                title: result.title,
                date: '',
                excerpt: result.excerpt,
                content: '',
                tags: []
              } as BlogPost;
            }
          });
        }
        this.isSearching = false;
      },
      error: (error) => {
        console.error('Semantic search failed', error);
        this.isSearching = false;
        this.filteredPosts = [];
      }
    });
  }
}
