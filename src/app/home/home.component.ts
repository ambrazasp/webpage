import {Component, Host, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  background = '/assets/images/bg-contact.jpg';
  parent: any;
  constructor(@Host() parent: AppComponent) {
    this.parent = parent;
    this.parent.loading = true;
  }

  ngOnInit() {
  }

  onLoad() {
    var that = this;
    setTimeout(function() {
      that.parent.loading = false;
    }, 500);
  }

}
