import {Directive, ElementRef} from '@angular/core';
import {Window} from "selenium-webdriver";

@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {

  constructor(element: ElementRef) {

    window.addEventListener('scroll', (e) => {
      if(window.pageYOffset > 219) {
        element.nativeElement.classList.add('stick');
      } else {
        element.nativeElement.classList.remove('stick');
      }
    })
  }

}
