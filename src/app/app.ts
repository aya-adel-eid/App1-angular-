import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ContactComponent } from './component/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('firstApp');
}
