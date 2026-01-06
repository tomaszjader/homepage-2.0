import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); // Ensure we start at the top
    this.posts = this.blogService.getPosts();
  }
}
