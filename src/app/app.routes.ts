import { Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:slug', component: BlogPostComponent },
    { path: '**', redirectTo: '' }
];
