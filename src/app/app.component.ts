import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'input-output-decorators';
  openWindow: boolean = false;


  openForm() {
    this.openWindow = true;
  }

  closeWindow($event: boolean) {
    console.log($event);
    this.openWindow = $event
  }

}
