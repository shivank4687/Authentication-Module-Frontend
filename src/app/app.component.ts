import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppState } from './core/store/app.state';
import { Store } from '@ngrx/store';
import { login, UserState } from './core/store';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Authentication-Module';
  // count=signal(3);
  constructor()
  {
    
  }
  
}
