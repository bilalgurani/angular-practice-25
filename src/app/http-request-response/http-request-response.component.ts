import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-request-response',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './http-request-response.component.html',
  styleUrl: './http-request-response.component.scss'
})
export class HttpRequestResponseComponent {
  @Input() isWindowOpen: boolean | undefined;
  @Output() isWindowClosed: EventEmitter<boolean> = new EventEmitter<boolean>();
  http: HttpClient = inject(HttpClient);

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    terms: new FormControl(false, [Validators.required]),
  })

  closeForm() {
    console.log("close form");
    this.isWindowClosed.emit(false);
    this.registrationForm.reset();
  }

  saveUser() {
    if (this.registrationForm.valid) {
      const user: User = this.registrationForm.value as User;
      this.http.post("https://angular-project-25-default-rtdb.firebaseio.com/users.json", user)
      .subscribe(() => {
        this.closeForm();
      })
    }

  }
}
