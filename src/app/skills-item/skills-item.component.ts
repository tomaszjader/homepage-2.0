import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.scss']
})
export class SkillsItemComponent {
  @Input() skillsArray: string[] = ['— Semantic HTML5', '— Semantic HTML5',
    '— Semantic HTML5', '— Semantic HTML5', '— Semantic HTML5', '— Semantic HTML5',
    '— Semantic HTML5'];
  @Input() skillsHeader: string = 'Working knowledge';
  @Input() skillsImage: string = 'assets/img/trangle.svg';
}

