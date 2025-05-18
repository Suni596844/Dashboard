import { Component } from '@angular/core';

interface Message {
  text: string;
  sender: 'user' | 'assistant';
}

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  messages: Message[] = [
    { text: 'Hello, I have a question about the Stylish Shoes.', sender: 'user' },
    { text: 'Hi there! Sure, what would you like to know about the Stylish Shoes?', sender: 'assistant' },
    { text: 'Are they available in different sizes and colors?', sender: 'user' },
    { text: 'Yes, we offer sizes from 7 to 12 and they come in black, white, and blue.', sender: 'assistant' },
    { text: 'Great! And do they have a warranty?', sender: 'user' },
    { text: 'All our Stylish Shoes come with a 6-month warranty covering manufacturing defects.', sender: 'assistant' },
    { text: 'Perfect, thank you for the information!', sender: 'user' },
    { text: 'You’re welcome! Let me know if you have any further questions.', sender: 'assistant' }
  ];

  userMessage: string = '';

  sendMessage(): void {
    if (this.userMessage.trim() !== '') {
      this.messages.push({ text: this.userMessage, sender: 'user' });
      this.userMessage = '';
    }
  }
}
