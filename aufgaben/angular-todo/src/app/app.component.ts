import { Component } from '@angular/core';
import { ListeComponent } from './liste/liste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
