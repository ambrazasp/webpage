import {Component, Host, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  background = '/assets/images/bg3.jpg';
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
