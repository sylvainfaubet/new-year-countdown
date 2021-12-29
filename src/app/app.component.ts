import { Component } from '@angular/core';
import { CounterService } from '@core/services';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'new-year-countdown';

  constructor(public counterService: CounterService) {}
}
