import { Component } from '@angular/core';
import { DesignSectionComponent } from '../design-section/design-section.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-about',
  imports: [DesignSectionComponent, TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
