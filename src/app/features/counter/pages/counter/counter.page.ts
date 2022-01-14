import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from '@core/services';

@Component({
  template: `<app-background *ngIf="count !== undefined" [count]="count">
    <app-counter-renderer
      *ngIf="count > 0"
      [count]="count"
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
  constructor(
    private counterService: CounterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['dev']) {
        let devCount = 20;
        if (
          typeof params['dev'] === 'string' &&
          Number.parseInt(params['dev'])
        ) {
          devCount = Number.parseInt(params['dev']);
        }
        const newDate = new Date();
        newDate.setSeconds(new Date().getSeconds() + devCount);
        this.counterService.setEndDate(newDate);
      }
      if (typeof params['date'] === 'string') {
        const date = new Date(params['date']);
        this.counterService.setEndDate(date);
      }
      if (typeof params['message'] === 'string') {
        this.message = params['message'];
      }
    });
    this.counterService.countDownSubject.subscribe((count: number) => {
      this.count = count;
    });
  }
}
