import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-after-hours-section',
    templateUrl: './after-hours-section.component.html',
    styleUrls: ['./after-hours-section.component.scss'],
    standalone: true,
    imports: [CommonModule, TranslateModule]
})
export class AfterHoursSectionComponent {

}
