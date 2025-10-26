import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [TitleComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  password: string = '';
}
