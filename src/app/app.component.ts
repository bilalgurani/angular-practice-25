import { Component } from '@angular/core';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
}
