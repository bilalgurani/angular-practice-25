import { Component } from '@angular/core';
import {ParentComponent} from './Input-Output decorators/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
}
