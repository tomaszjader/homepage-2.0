import { Component } from '@angular/core';
import { GithubapiService } from '../services/githubapi.service';
import { Project } from '../interface/project';

@Component({
    selector: 'app-projects-section',
    templateUrl: './projects-section.component.html',
    styleUrls: ['./projects-section.component.scss'],
    standalone: false
})
export class ProjectsSectionComponent {
  data :Project[] =[];
  constructor(private githubapiService:GithubapiService){
    this.githubapiService.getData().subscribe((data: Project[]) => {
      if (data) {
        this.data = data.filter(
          (repo: Project) => repo.description && repo.homepage
        );
      }
    });
  }

 
}
