import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  providers: [NgbCarouselConfig]
})
export class TopComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
  }

  ngOnInit() {
  }

}
