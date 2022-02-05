import { Component } from '@angular/core';
import { CounterService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-year-countdown';

  constructor(private router: Router, public counterService: CounterService) {
    const path = localStorage.getItem('path');
    if (path) {
      console.log('path', path);
      localStorage.removeItem('path');
      this.router
        .navigateByUrl(path)
        .then(() => {
          console.log('navigation done', path);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
