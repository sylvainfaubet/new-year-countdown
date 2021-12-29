import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-firework',
  template: `<div class="pyro">
    <div class="before"></div>
    <div class="after"></div>
  </div>`,
  styleUrls: ['./firework.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FireworkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
