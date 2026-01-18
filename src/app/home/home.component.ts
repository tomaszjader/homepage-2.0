import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NavbarSectionComponent } from '../navbar-section/navbar-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { AfterHoursSectionComponent } from '../after-hours-section/after-hours-section.component';
import { FooterSectionComponent } from '../footer-section/footer-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    NavbarSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    AfterHoursSectionComponent,
    FooterSectionComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tomasz Jąder | Fullstack Developer Portfolio | JavaScript, Angular, Node.js, Python');
    this.metaService.updateTag({
      name: 'description',
      content: 'Portfolio of Tomasz Jąder – Fullstack Developer with expertise in Angular, JavaScript, Node.js, and Python. Browse my projects and see how I can help you build scalable web applications.'
    });
  }
}
