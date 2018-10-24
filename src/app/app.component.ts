import { Component } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({opacity: 1}),
          animate('300ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class AppComponent {
  showNavbar = false;
  loading = true;

  changeRoute() {
    this.loading = true;
    this.showNavbar = false;
  }
}
