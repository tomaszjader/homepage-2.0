import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer-section',
    templateUrl: './footer-section.component.html',
    styleUrls: ['./footer-section.component.scss'],
    standalone: true,
    imports: [CommonModule, TranslateModule]
})
export class FooterSectionComponent {

}
