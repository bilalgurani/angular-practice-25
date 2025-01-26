import {Component, inject, OnInit} from '@angular/core';
import {HttpRequestResponseComponent} from './http-request-response/http-request-response.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {User} from './models/user';
import {HttpServices} from './http-request-response/http-services';

@Component({
  selector: 'app-root',
  imports: [
    HttpRequestResponseComponent,
    NgForOf,
    NgIf,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'input-output-decorators';
  isFormOpen: boolean = false;
  updateUnable: boolean = false;
  allUsers: any = []
  deleteUser: string = '';
  selectedUser: User | undefined
  loader: boolean = false;
  deletingUserId: string | undefined

  httpService: HttpServices = inject(HttpServices);

  ngOnInit() {
    this.fetchData();
  }

  openForm() {
    this.updateUnable = false;
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
  }

  delete(id: string) {
    this.loader = true;
    this.deletingUserId = id;
    this.httpService.delete(id).subscribe(() => {
      this.fetchData();
      this.loader = false;
    });
  }

  fetchData() {
    this.httpService.fetchData().subscribe(res => {
      this.allUsers = res;
    });
  }

  update(id: string) {
    this.updateUnable = true;
    this.isFormOpen = true;
    this.selectedUser = this.allUsers.find((user: any) => user.id === id);
    if (this.selectedUser) {
      this.selectedUser = Array.isArray(this.selectedUser) ? this.selectedUser[0] : this.selectedUser;
    }
  }
}
