import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatResponse } from '../services/chat.service';
import { firstValueFrom } from 'rxjs';

interface Message {
    role: 'user' | 'agent';
    content: string;
}

@Component({
    selector: 'app-chat-widget',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './chat-widget.component.html',
    styleUrl: './chat-widget.component.scss'
})
export class ChatWidgetComponent implements AfterViewChecked {
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    isOpen = false;
    userInput = '';
    messages: Message[] = [
        { role: 'agent', content: 'Cześć! Jestem Twoim wirtualnym asystentem. W czym mogę Ci pomóc?' }
    ];
    isLoading = false;

    constructor(private chatService: ChatService) { }

    toggleChat() {
        this.isOpen = !this.isOpen;
    }

    async sendMessage() {
        if (!this.userInput.trim() || this.isLoading) return;

        const userMsg = this.userInput.trim();
        this.messages.push({ role: 'user', content: userMsg });
        this.userInput = '';
        this.isLoading = true;

        try {
            // Use firstValueFrom to handle the observable as a promise
            const response = await firstValueFrom(this.chatService.sendMessage(userMsg));
            this.messages.push({ role: 'agent', content: response.answer });
        } catch (error) {
            console.error('Error sending message:', error);
            this.messages.push({ role: 'agent', content: 'Przepraszam, wystąpił błąd podczas przetwarzania Twojego zapytania. Spróbuj ponownie później.' });
        } finally {
            this.isLoading = false;
        }
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
