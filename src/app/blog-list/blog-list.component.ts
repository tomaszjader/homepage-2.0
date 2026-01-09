import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  searchText: string = '';
  activeTag: string | null = null;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // Ensure we start at the top
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
