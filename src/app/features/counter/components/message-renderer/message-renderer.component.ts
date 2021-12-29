import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-message-renderer',
  template: `<div>{{ message }}</div>`,
  styleUrls: ['./message-renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageRendererComponent implements OnInit {
  @Input() message?: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.message);
    if (!this.message || this.message === '') {
      this.message = 'Bonne Année !!!';
    }
  }
}
