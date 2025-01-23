import {Component} from '@angular/core';
import {HttpRequestResponseComponent} from './http-request-response/http-request-response.component';

@Component({
  selector: 'app-root',
  imports: [
    HttpRequestResponseComponent
  ],
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
    this.openWindow = $event
  }

}
