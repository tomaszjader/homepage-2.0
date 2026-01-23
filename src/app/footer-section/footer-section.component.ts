import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-footer-section',
    templateUrl: './footer-section.component.html',
    styleUrls: ['./footer-section.component.scss'],
    standalone: true,
    imports: [CommonModule, TranslateModule, ReactiveFormsModule]
})
export class FooterSectionComponent {
    contactForm: FormGroup;
    isSubmitting = false;
    submitSuccess = false;
    submitError = false;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {
        this.contactForm = this.fb.group({
            imie: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            tresc: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;
            this.submitSuccess = false;
            this.submitError = false;

            this.contactService.sendContactForm(this.contactForm.value).subscribe({
                next: () => {
                    this.isSubmitting = false;
                    this.submitSuccess = true;
                    this.contactForm.reset();
                },
                error: (err) => {
                    console.error('Error sending message:', err);
                    this.isSubmitting = false;
                    this.submitError = true;
                }
            });
        } else {
            this.contactForm.markAllAsTouched();
        }
    }
}
