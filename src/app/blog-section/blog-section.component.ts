import { Component, OnInit } from '@angular/core';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
