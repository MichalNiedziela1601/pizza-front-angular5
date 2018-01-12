import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export default class HomeComponent {
  boxOffers = [
    { src: 'assets/img/home/bg_pizza_oferta.png', title: 'pizza'},
    { src: 'assets/img/home/bg_daniagorace_oferta.png', title: 'hot dishes'},
    { src: 'assets/img/home/bg_salatki_oferta.png', title: 'salads'},

  ]
}
