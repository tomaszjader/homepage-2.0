import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChatResponse {
    answer: string;
    // Add other properties if the API returns them, e.g., sources
}

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    private apiUrl = 'https://search.tomaszjader.com/agent';

    constructor(private http: HttpClient) { }

    sendMessage(query: string): Observable<ChatResponse> {
        const payload = {
            query: query,
            limit: 2
        };
        return this.http.post<ChatResponse>(this.apiUrl, payload);
    }
}
