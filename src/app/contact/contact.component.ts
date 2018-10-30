import {Component, EventEmitter, Host, HostListener, Input, OnInit, Output} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {animate, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';

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
  name = '';
  nameError = false;
  email = '';
  emailError = false;
  message = '';
  messageError = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.http.get('./assets/contacts.json').subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
    // this.http.post('./assets/contacts.json', 'labas').subscribe(
    //   data => console.log(data)
    // );
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

  public getJSON(): Observable<any> {
    return this.http.get('./assets/contacts.json');
  }

  save() {
    this.nameError = false;
    this.emailError = false;
    this.messageError = false;
    if (!this.name.length) {
      this.nameError = true;
    }
    if (!this.email.length || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
      this.emailError = true;
    }
    if (!this.message.length) {
      this.messageError = true;
    }
    console.log(this.name, this.email, this.message);

  }

}
