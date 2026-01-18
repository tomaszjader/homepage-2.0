import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsItemComponent {
  @Input() skillsArray: string[] = [];
  @Input() skillsHeader: string = '';
  @Input() skillsImage: string = '';
}

