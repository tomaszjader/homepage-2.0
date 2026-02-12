import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { BlogPost } from '../interfaces/blog-post.interface';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule]
})
export class BlogSectionComponent implements OnInit {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }
}
