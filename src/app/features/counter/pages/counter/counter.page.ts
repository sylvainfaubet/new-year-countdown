import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CounterService } from '@core/services';

@Component({
  template: `<app-background *ngIf="count !== undefined" [count]="count">
    <app-counter-renderer
      *ngIf="count > 0"
      [count]="count"
      [isDisplayingTime]="isDisplayingTime"
    ></app-counter-renderer>
    <app-firework *ngIf="count <= 0"></app-firework>
    <app-message-renderer
      *ngIf="count <= 0"
      [message]="message"
    ></app-message-renderer>
  </app-background>`,
  styleUrls: ['./counter.page.css'],
})
export class CounterPage implements OnInit {
  count?: number;
  message?: string;
  isDisplayingTime = false;

  constructor(
    private counterService: CounterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let parameters = params;
      if (typeof params['q'] === 'string') {
        parameters = (JSON.parse(atob(params['q'])) as Params) ?? params;
      }

      if (parameters['dev']) {
        let devCount = 20;
        if (
          typeof parameters['dev'] === 'string' &&
          Number.parseInt(parameters['dev'])
        ) {
          devCount = Number.parseInt(parameters['dev']);
        }
        const newDate = new Date();
        newDate.setSeconds(new Date().getSeconds() + devCount);
        this.counterService.setEndDate(newDate);
      }

      if (typeof parameters['date'] === 'string') {
        if (typeof parameters['time'] === 'string') {
          const date = new Date(`${parameters['date']}T${parameters['time']}`);
          this.counterService.setEndDate(date);
        }
      }

      if (typeof parameters['message'] === 'string') {
        this.message = parameters['message'];
      }

      this.isDisplayingTime =
        !!parameters['isDisplayingTime'] &&
        parameters['isDisplayingTime'] !== 'false';
    });
    this.counterService.countDownSubject.subscribe((count: number) => {
      this.count = count;
    });
  }
}
