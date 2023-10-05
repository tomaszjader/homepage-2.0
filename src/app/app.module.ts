import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NavbarSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
