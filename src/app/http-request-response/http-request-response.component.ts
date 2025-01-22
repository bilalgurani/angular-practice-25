import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-http-request-response',
  imports: [
  ],
  templateUrl: './http-request-response.component.html',
  styleUrl: './http-request-response.component.scss'
})
export class HttpRequestResponseComponent {
  @Input() isWindowOpen: boolean | undefined;
  @Output() isWindowClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeForm() {
    console.log("close form");
    this.isWindowClosed.emit(false);
  }
}
