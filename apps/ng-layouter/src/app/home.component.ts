import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    Hi
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}
