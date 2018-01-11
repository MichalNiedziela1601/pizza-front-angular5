import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  user: any;

  constructor(private http: HttpClient) {}

  send() {
    this.http.get('/api/hello').subscribe( res => {
      this.user = res;
    })
  }
}
