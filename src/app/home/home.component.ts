import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
