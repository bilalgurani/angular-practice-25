import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FetchCountriesService} from './fetch-countries.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
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
    email: new FormControl('', [Validators.required, Validators.email]),
    fName: new FormControl('', Validators.required),
    lName: new FormControl(''),
    phone: new FormControl('', Validators.required),
    date: new FormControl(''),
    gender: new FormControl('male', Validators.required),
    address: new FormGroup({
      street1: new FormControl('', Validators.required),
      street2: new FormControl(''),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      region: new FormControl(''),
      zipcode: new FormControl('', Validators.required),
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
