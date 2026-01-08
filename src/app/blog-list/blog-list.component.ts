import { Component, OnInit } from '@angular/core';
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

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // Ensure we start at the top
    this.posts = this.blogService.getPosts();
    this.filteredPosts = this.posts;
  }

  filterPosts(): void {
    if (!this.searchText) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
}
