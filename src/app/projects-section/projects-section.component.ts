import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GithubapiService } from '../services/githubapi.service';
import { Project } from '../interface/project';
import { GithubCardComponent } from '../github-card/github-card.component';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, GithubCardComponent]
})
export class ProjectsSectionComponent {
  data: Project[] = [];
  constructor(private githubapiService: GithubapiService) {
    this.githubapiService.getData().subscribe((data: Project[]) => {
      if (data) {
        this.data = data.filter(
          (repo: Project) => repo.description && repo.homepage
        );
      }
    });
  }


}
