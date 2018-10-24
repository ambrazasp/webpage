import {Component, Host, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  background = '/assets/images/bg1.jpg';
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
