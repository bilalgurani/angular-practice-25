import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServices {
  http: HttpClient = inject(HttpClient);
  url: string = "https://angular-25-http-default-rtdb.firebaseio.com";

  saveUser(user: User) {
    return this.http.post(this.url + "/users.json", user);
  }

  delete(id: string) {
    return this.http.delete(this.url + '/users/' + id + ".json");
  }

  fetchData() {
    return this.http.get<{[key: string]: User}>(this.url + "/users.json")
    .pipe(map(res => {
      let users = [];
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          users.push({...res[key], id: key});
        }
      }
      return users;
    }))
  }

  updateData(id: string | undefined, user: User) {
    console.log(user);
    return this.http.put(this.url + "/users/" + id + ".json", user);
  }
}
