import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchCountriesService {
  url: string = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) {
  }

  getCountries(): any {
    return this.http.get(this.url);
  }

}
