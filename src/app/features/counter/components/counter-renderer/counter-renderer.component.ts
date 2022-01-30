import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-counter-renderer',
  template: `<p>
    {{ isDisplayingTime ? timeString : count }}
  </p>`,
  styleUrls: ['./counter-renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterRendererComponent implements OnInit {
  private _count?: number;
  timeString?: string;

  @Input()
  isDisplayingTime = false;

  @Input()
  set count(c: number) {
    this._count = c;
    this.timeString = this.displayTime(c);
  }

  get count(): number {
    return this._count ?? 0;
  }

  constructor() {}

  ngOnInit(): void {}

  displayTime(count: number): string {
    const days = Math.floor(count / 86400);
    const time = new Date((count % 86400) * 1000)
      .toISOString()
      .split('T')[1]
      .split('.')[0];
    return `${days > 0 ? $localize`${days.toString()} jours\n` : ''}${time}`;
  }
}
