import {Component, Output} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  childData: any;
  rData: string = "";

  onButtonClick() {
    this.childData = "from ChildComponent";
  }

  receiveData(receiveData: any) {
    console.log(receiveData);
  }
}
