import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', // Allows scrolling to fragments like #blog
    scrollPositionRestoration: 'enabled' // Restores scroll position on navigation
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
