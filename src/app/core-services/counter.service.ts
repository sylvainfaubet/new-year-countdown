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
  private readonly interval = 1000;
  public countDownSubject = new ReplaySubject<number>(1);

  private _endDate: Date;

  setEndDate(date: Date): void {
    this._endDate = date;
    this.countDownSubject.next(this.calculateTime(date));
  }

  private calculateTime(endDate: Date): number {
    const calc = Math.floor(
      (this._endDate.getTime() - new Date().getTime()) / 1000
    );
    return calc;
  }

  constructor() {
    const start = new Date();
    this._endDate = new Date(start.getFullYear() + 1, 0);

    this.countDownSubject.next(this.calculateTime(this._endDate));

    start.setSeconds(start.getSeconds() + 2);
    start.setMilliseconds(10);

    timer(start)
      .pipe(
        switchMap(() => interval(this.interval)),
        map(() => this.calculateTime(this._endDate)),
        takeWhile((count) => count >= 0)
      )
      .subscribe(this.countDownSubject);
  }
}
