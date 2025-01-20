import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {FetchCountriesService} from './fetch-countries.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {
  countriesService = inject(FetchCountriesService);
  countries: any = [];

  ngOnInit() {
    this.getCountries();
  }


  registrationForm = new FormGroup({
    email: new FormControl(''),
    fName: new FormControl(''),
    lName: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(''),
    gender: new FormControl('male'),
    address: new FormGroup({
      street1: new FormControl(''),
      street2: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      region: new FormControl(''),
      zipcode: new FormControl(''),
    })
});

  formSubmit() {
    console.log(this.registrationForm);
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((countries: any) => {
      countries.forEach((country: any) => {
        this.countries.push(country.name.common);
        this.countries.sort();
      })
    })
  }
}
