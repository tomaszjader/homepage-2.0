import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService, BlogPost } from '../services/blog.service';
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

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Ensure we start at the top

    // Set SEO Meta Tags
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

  filterPosts(): void {
    let tempPosts = this.posts;

    // Filter by tag if present
    if (this.activeTag) {
      tempPosts = tempPosts.filter(post =>
        post.tags && post.tags.includes(this.activeTag!)
      );
    }

    // Filter by search text
    if (this.searchText) {
      tempPosts = tempPosts.filter(post =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    this.filteredPosts = tempPosts;
  }
}
