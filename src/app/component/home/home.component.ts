import { Component } from '@angular/core';
import { DesignSectionComponent } from '../design-section/design-section.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-home',
  imports: [DesignSectionComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
