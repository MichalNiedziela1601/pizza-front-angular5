import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import User from "../user/user.model";
import {FormGroup, FormBuilder, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;
  id: number;
  sub: any;
  user: User;
  firstName: AbstractControl;
  lastName: AbstractControl;
  email: AbstractControl;

  constructor(private route: ActivatedRoute, private userService: UserService, private fb: FormBuilder) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.userForm = fb.group({
      'firstName' : [''],
      'lastName' : [''],
      'email' : ['']
    });

    this.firstName = this.userForm.controls['firstName'];
    this.lastName = this.userForm.controls['lastName'];
    this.email = this.userForm.controls['email'];
  }

  ngOnInit() {
    this.userService.findUser(this.id).subscribe((user: User) => {
      this.user = user;
      this.firstName.setValue(this.user.firstName);
      this.lastName.setValue(this.user.lastName);
      this.email.setValue(this.user.email);
    });
  }

}
