import {Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from "../models/user";
import {HttpServices} from "./http-services";

@Component({
  selector: 'app-http-request-response',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './http-request-response.component.html',
  standalone: true,
  styleUrl: './http-request-response.component.scss'
})
export class HttpRequestResponseComponent implements OnInit, OnChanges {
  @Input() deleteUser: string | undefined;
  @Input() updateUnable: boolean = false;
  @Input() selectedUser: User | undefined;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() sendUsersData: EventEmitter<User[]> = new EventEmitter<User[]>();

  httpService: HttpServices = inject(HttpServices);

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    terms: new FormControl(false, [Validators.required]),
  })

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser'] && this.selectedUser && this.updateUnable) {
      this.registrationForm.patchValue({
        name: this.selectedUser.name,
        lName: this.selectedUser.lName,
        email: this.selectedUser.email,
        password: this.selectedUser.password,
        terms: this.selectedUser.terms,
      });
    }
  }


  closeForm() {
    this.close.emit(true);
    this.registrationForm.reset();
  }

  saveUser() {
    let user = this.registrationForm.value as User;
    if (this.selectedUser && this.updateUnable) {
      this.httpService.updateData(this.selectedUser.id, user).subscribe(() => {
        this.updateUnable = false
        this.close.emit(true);
        this.fetchAllUsers();
      })
    } else {
      this.httpService.saveUser(user).subscribe(() => {
        this.close.emit(true);
        this.fetchAllUsers();
      });
    }
  }

  fetchAllUsers() {
    this.sendUsersData.emit();
  }
}

