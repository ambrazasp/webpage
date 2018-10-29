import {Component, EventEmitter, Host, HostListener, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':leave', [
          style({opacity: 1}),
          animate('300ms', style({opacity: 0}))
        ]),
        transition(':enter', [
          style({opacity: 0}),
          animate('300ms', style({opacity: 1}))
        ])
      ]
    )
  ]
})
export class ContactComponent implements OnInit {
  @Output() visibleChange = new EventEmitter();

  background = '/assets/images/bg1.jpg';
  visibleValue = false;
  parent: any;
  constructor(@Host() parent: AppComponent) {
    this.parent = parent;
    this.parent.loading = true;
  }

  ngOnInit() {
  }

  @Input()
  get visible() {
    return this.visibleValue;
  }

  set visible(val) {
    this.visibleValue = val;
    this.visibleChange.emit(val);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.visible = false;
  }
  //
  // onLoad() {
  //   var that = this;
  //   setTimeout(function() {
  //     that.parent.loading = false;
  //   }, 500);
  // }
}
