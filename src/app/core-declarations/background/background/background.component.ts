import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-background',
  template: `<div [class]="['transition', colorClass]">
    <ng-content> </ng-content>
  </div>`,
  styleUrls: ['./background.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent implements OnInit {
  colorClass?: string;
  readonly nbSets = 6;

  @Input()
  set count(c: number) {
    this.colorClass =
      c < 10 ? 'countdown' : `set-${Math.floor((c ?? 0) / 4) % this.nbSets}`;
  }
  constructor() {}

  ngOnInit(): void {}
}
