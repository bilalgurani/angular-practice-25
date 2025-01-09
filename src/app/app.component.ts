import { Component } from '@angular/core';
import {ParentComponent} from './Input-Output decorators/parent/parent.component';
import {SetBackgroundDirective} from './Directives/Custom-directives/setBackground.directive';

@Component({
  selector: 'app-root',
  imports: [ParentComponent, SetBackgroundDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
}
