import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-end';

  constructor(private router: Router) {}

  class(): string {
    return this.router.url.startsWith('/auth')
      ? 'container d-flex flex-column'
      : 'main-wrapper';
  }
}
