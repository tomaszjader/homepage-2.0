import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactFormData {
    email: string;
    imie: string;
    tresc: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    private apiUrl = 'https://adam114-20114.wykr.es/webhook/formularz-kontaktowy';

    constructor(private http: HttpClient) { }

    sendContactForm(data: ContactFormData): Observable<void> {
        return this.http.post<void>(this.apiUrl, data);
    }
}
