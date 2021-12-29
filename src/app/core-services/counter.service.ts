import { Injectable } from '@angular/core';
import {
  interval,
  map,
  ReplaySubject,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public timeSubject = new ReplaySubject<Date>(1);
  public countDownSubject = new ReplaySubject<number>(1);
  private _endDate: Date;

  private readonly interval = 1000;

  setEndDate(date: Date): void {
    this._endDate = date;
  }

  constructor() {
    const now = new Date();
    this._endDate = new Date(now.getFullYear() + 1, 0);

    now.setSeconds(now.getSeconds() + 2);
    now.setMilliseconds(10);

    timer(now)
      .pipe(
        switchMap(() => interval(this.interval)),
        map(() =>
          Math.floor((this._endDate.getTime() - new Date().getTime()) / 1000)
        ),
        takeWhile((count) => count >= 0)
      )
      .subscribe(this.countDownSubject);
  }
}
