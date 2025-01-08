import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() data: any;

  @Output() sendData: EventEmitter<any> = new EventEmitter();

  onButtonClick() {
    this.sendData.emit("this value is from child");
  }
}
