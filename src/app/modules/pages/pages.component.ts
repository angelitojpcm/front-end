import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  template: `
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div id="app-content">
      <div class="app-content-area">
        <div class="container-fluid">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './pages.component.css',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, SidebarComponent],
})
export class PagesComponent {}
