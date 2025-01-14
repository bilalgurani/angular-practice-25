import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  message: string = "This is lifecycle hook example"
  @Input() title: string = "LifeCycle Hooks"

  constructor() {
    console.log("LifeCycle Hooks Component loaded");
    console.log(this.message);
    console.log(this.title);
  /*
  constructors when gets called, no @Input and @Output get created that's the reason we were unable to see the latest message
  Angular LifeCycle Hooks
  When we remove something from DOM we destroy the life cycle of that particular element
  We can respond to changes in the Input properties


  */
  }
}
