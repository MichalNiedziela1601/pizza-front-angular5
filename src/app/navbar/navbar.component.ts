import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  unhide: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // mouseEnter() {
  //   this.unhide = true;
  // }
  //
  // mouseLeave() {
  //   this.unhide = false;
  // }
}
