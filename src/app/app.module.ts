import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsItemComponent } from './skills-item/skills-item.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { GithubCardComponent } from './github-card/github-card.component';
import { AfterHoursSectionComponent } from './after-hours-section/after-hours-section.component';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SkillsItemComponent,
    SkillsSectionComponent,
    FooterSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    GithubCardComponent,
    AfterHoursSectionComponent,
    NavbarSectionComponent,
    BlogSectionComponent,
    BlogPostComponent,
    BlogListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
