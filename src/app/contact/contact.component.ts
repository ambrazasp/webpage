import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  instagramToken = '?access_token=241468803.1677ed0.0cebb2c1a24a457085313acad0bea9a1';
  instagramApi = 'https://api.instagram.com/v1/users/self/media/recent/';
  instagramFeed = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.instagramApi + this.instagramToken)
      .subscribe(data =>
        this.instagramFeed = data['data']
      );
  }

}
