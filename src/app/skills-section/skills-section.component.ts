import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  workingKnowledgeArray: string[] = ['— Semantic HTML5', '— Flexbox',
  '— Markdown', '— Figma', '— CSS grid', '— Forms',
  '— SASS', '— TypeScript','— JavaScript ES6 + features','— Git','— Working with API','— Angular'];
  knowSomethingAboutArray: string[] = ['— React', '— Ruby',
    '— Flask', '— Figma', '— make.com', '— LLM',
    '— OpenAI API'];
    wantToLearnArray: string[] = ['— Node JS', '— Electron',
      '— Server side rendering', '— Gatsby', '— Websockets'];
}
