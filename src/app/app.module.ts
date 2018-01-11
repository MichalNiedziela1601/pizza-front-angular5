import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import {UserService} from "./user/user.service";
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './home/top/top.component';
import { StickyDirective } from './custom/sticky.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    StickyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
