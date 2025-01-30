import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  standalone: true,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  routes: Router = inject(Router)

  navigateToHome() {
   // this.routes.navigate(['home']);
    this.routes.navigateByUrl('/home');
  }
}
