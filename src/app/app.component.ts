import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homepage-2.0';
  skillsArray: string[] = ['— Semantic HTML5', '— Semantic HTML5',
    '— Semantic HTML5', '— Semantic HTML5', '— Semantic HTML5', '— Semantic HTML5',
    '— Semantic HTML5'];
}
