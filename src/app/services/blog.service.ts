import { Injectable } from '@angular/core';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'angular-19-whats-new',
      title: 'Angular 19: What’s New?',
      date: 'January 15, 2025',
      excerpt: 'Discover the latest features in Angular 19, including improved signals, standalone components by default, and hydration enhancements.',
      content: `
        <p>Angular 19 introduces a wave of improvements designed to enhance developer experience and application performance. Here are the key highlights:</p>
        
        <h4>1. Signals are now Stable</h4>
        <p>Signals have graduated from developer preview! They provide a reactive primitive that allows Angular to track data usage and update the UI with fine-grained precision. This means change detection is now more efficient than ever.</p>
        
        <h4>2. Standalone Components by Default</h4>
        <p>Gone are the days of NgModules being mandatory. Angular 19 generates standalone components by default, simplifying the learning curve and reducing boilerplate code.</p>
        
        <h4>3. Hydration Enhancements</h4>
        <p>Server-side rendering (SSR) gets a boost with improved hydration. The flicker effect is minimized, and the time-to-interactive (TTI) is significantly reduced.</p>
        
        <p>Upgrade today to experience the future of web development with Angular!</p>
      `
    },
    {
      slug: 'mastering-typescript-generics',
      title: 'Mastering TypeScript Generics',
      date: 'December 28, 2024',
      excerpt: 'A deep dive into TypeScript generics. Learn how to write reusable, type-safe code with practical examples and best practices.',
      content: `
        <p>Generics are one of the most powerful features in TypeScript, allowing you to write flexible, reusable code while maintaining type safety. But they can be intimidating at first.</p>
        
        <h4>Why Generics?</h4>
        <p>Without generics, we often have to resort to using <code>any</code>, which defeats the purpose of TypeScript. Generics allow us to capture the type of the argument in a way that we can use it to denote what is being returned.</p>
        
        <h4>Basic Example</h4>
        <pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>
        
        <p>In this article, we'll explore constraints, default types, and utility types that leverage generics to build robust applications.</p>
      `
    },
    {
      slug: 'optimizing-web-performance',
      title: 'Optimizing Web Performance',
      date: 'November 10, 2024',
      excerpt: 'Learn key strategies to improve your Core Web Vitals, reduce LCP, and optimize image delivery for a faster user experience.',
      content: `
        <p>Web performance is crucial for user retention and SEO. Core Web Vitals are the metrics Google uses to measure the user experience. Let's look at how to improve them.</p>
        
        <h4>Largest Contentful Paint (LCP)</h4>
        <p>LCP measures loading performance. To improve it:</p>
        <ul>
          <li>Optimize image sizes (use WebP/AVIF).</li>
          <li>Use <code>fetchpriority="high"</code> for hero images.</li>
          <li>Implement lazy loading for below-the-fold content.</li>
        </ul>
        
        <h4>Cumulative Layout Shift (CLS)</h4>
        <p>CLS measures visual stability. Always include <code>width</code> and <code>height</code> attributes on your images and video elements to prevent layout shifts as they load.</p>
      `
    }
  ];

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }
}
