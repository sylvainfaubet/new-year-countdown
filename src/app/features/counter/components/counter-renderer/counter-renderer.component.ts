import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-counter-renderer',
  template: `<p>
    {{ count }}
  </p> `,
  styleUrls: ['./counter-renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterRendererComponent implements OnInit {
  private _count?: number;

  @Input()
  set count(c: number) {
    this._count = c;
  }

  get count(): number {
    return this._count ?? 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
