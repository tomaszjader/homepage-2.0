import { Injectable } from '@angular/core';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'jak-przestalem-oszukiwac-samego-siebie-w-nauce-angielskiego',
      title: 'Jak przestałem oszukiwać samego siebie w nauce angielskiego? (Automatyzacja nawyków)',
      date: 'January 7, 2026',
      excerpt: 'Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił? Postanowiłem to zmienić, wykorzystując n8n.',
      tags: ['Automatyzacja', 'n8n', 'Productivity', 'English Learning'],
      content: `
        <p>Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił?</p>
        <p>Moje trzy filary – słuchanie, mówienie i powtórki w Anki – często lądowały na samym końcu listy "to-do". Robiłem je tuż przed snem, byle tylko odhaczyć punkt w kalendarzu. Efekt? Mała skuteczność i poczucie winy.</p>
        <p>Postanowiłem to zmienić, wykorzystując n8n.</p>
        
        <img src="assets/img/n8n-meme.jpg" alt="Meme: Ja myślący że mam ochotę na angielski vs mój workflow w n8n" class="img-fluid my-4 rounded">

        <p>Zamiast polegać na silnej woli, stworzyłem automatycznego asystenta na Telegramie, który dostarcza mi konkretne zadania w idealnych momentach dnia:</p>
        
        <h4>🚀 Mój codzienny workflow:</h4>
        <ul>
          <li><strong>07:30 (Pasywne słuchanie):</strong> Dostaję bezpośredni link do najnowszego podcastu BBC Learning English. Idealne do kawy.</li>
          <li><strong>08:30 (Aktywne powtarzanie):</strong> Przypomnienie o sesji w AnkiDroid. Zanim wejdę w wir pracy.</li>
          <li><strong>20:00 (Konwersacje):</strong> Zaproszenie do rozmowy z Google Gemini. Przełamuję barierę językową w bezpiecznym środowisku AI.</li>
        </ul>
        
        <h4>Dlaczego to działa?</h4>
        <p>Zasada jest prosta: im mniejszy opór przed wykonaniem zadania, tym łatwiej przy nim wytrwać. Dzięki automatyzacji nie szukam materiałów – one same znajdują mnie.</p>
        
        <h4>Technicznie:</h4>
        <p>Wykorzystałem Schedule Triggers, n8n DataTables do zarządzania bazą i Telegram Node do wysyłki sformatowanych powiadomień HTML. Proste, a skuteczne.</p>
        
        <p>A Ty jak radzisz sobie z regularnością? Ufasz swojej pamięci czy wspierasz się technologią?</p>
        
        <p>#Automatyzacja #n8n #Productivity #NaukaAngielskiego #EnglishLearning #LowCode #HabitBuilding #PersonalDevelopment</p>
      `
    },
    {
      slug: 'angular-19-whats-new',
      title: 'Angular 19: What’s New?',
      date: 'January 15, 2025',
      excerpt: 'Discover the latest features in Angular 19, including improved signals, standalone components by default, and hydration enhancements.',
      tags: ['Angular', 'Frontend', 'Web Development'],
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
      tags: ['TypeScript', 'Programming', 'Web Development'],
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
      tags: ['Performance', 'SEO', 'Web Development'],
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
