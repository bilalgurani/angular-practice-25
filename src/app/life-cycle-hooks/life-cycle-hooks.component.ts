import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  standalone: true,
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent implements OnInit {
  message: string = "This is lifecycle hook example"
  @Input() title: string = "LifeCycle Hooks"

  constructor() {
    console.log("LifeCycle Hooks Component loaded");
    console.log(this.message);
    console.log(this.title);
  /* constructors when gets called, no @Input and @Output get created that's the reason we were unable to see the latest message
  Angular LifeCycle Hooks
  When we remove something from DOM we destroy the life cycle of that particular element
  We can respond to changes in the Input properties */
  }

  route:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
  }
}
