import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BlogService, BlogPost } from '../services/blog.service';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
    encapsulation: ViewEncapsulation.None // To style innerHTML content
    ,
    standalone: false
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.post = this.blogService.getPostBySlug(slug);
        if (!this.post) {
          this.router.navigate(['/']); // Redirect to home if post not found
        } else {
          // Scroll to top
          window.scrollTo(0, 0);

          // Set SEO Meta Tags
          this.titleService.setTitle(`${this.post.title} | Tomasz Jąder`);
          this.metaService.updateTag({ name: 'description', content: this.post.excerpt });
        }
      }
    });
  }
}
