import { Component } from '@angular/core';
import {ParentComponent} from './Input-Output decorators/parent/parent.component';
import {SetBackgroundDirective} from './Directives/Custom-directives/setBackground.directive';
import {LifeCycleHooksComponent} from './life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent, SetBackgroundDirective, LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
}
