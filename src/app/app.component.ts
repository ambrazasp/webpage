import {Component, Host, Renderer2} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

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
  ]
})
export class AppComponent {
  showNavbar = false;
  loading = true;
  visibleContactValue = false;

  constructor(private router: Router,
              private renderer: Renderer2) {
  }

  changeRoute(url) {
    if (url === '') {
      this.visibleContact = true;
    } else if (this.router.url !== url) {
      this.loading = true;
    }
    this.showNavbar = false;
  }

  set visibleContact(val) {
    if (val) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
    this.visibleContactValue = val;
  }

  get visibleContact() {
    return this.visibleContactValue;
  }
}
