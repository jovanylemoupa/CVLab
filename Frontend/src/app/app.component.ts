import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Template01Component } from './features/template01/template01.component';

@Component({
  selector: 'app-root',
  imports: [Template01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
