import {Component, Host, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  background = '/assets/images/bg2.jpg';
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
