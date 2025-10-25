import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-contact',
  imports: [TitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
