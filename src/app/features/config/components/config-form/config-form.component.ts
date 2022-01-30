import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Config } from '../../models/config';

@Component({
  selector: 'app-config-form',
  template: ` <form *ngIf="form" [formGroup]="form" (ngSubmit)="submit()">
    <input
      type="text"
      placeholder="Message"
      i18n-placeholder
      message="message"
      formControlName="message"
      id="message"
    />
    <input
      type="date"
      placeholder="Date de déclenchement"
      i18n-placeholder
      name="date"
      formControlName="date"
      id="date"
    />
    <input
      type="time"
      placeholder="Heure de déclenchement"
      i18n-placeholder
      formControlName="time"
      name="time"
      id="time"
    />
    <div>
      <input
        type="checkbox"
        name="isDisplayingTime"
        formControlName="isDisplayingTime"
        id="isDisplayingTime"
      />
      <label for="isDisplayingTime" i18n>afficher l'horloge</label>
    </div>
    <input type="submit" />
  </form>`,
  styleUrls: ['./config-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigFormComponent implements OnInit {
  form?: FormGroup;

  @Output()
  formValue = new EventEmitter<Config>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const now = new Date();

    this.form = this.fb.group({
      message: [''],
      date: [now.toISOString().split('T')[0]],
      time: [now.toTimeString()],
      isDisplayingTime: [false],
    });
  }

  submit(): void {
    if (this.form) {
      const params: Config = this.form.value as Config;
      Object.keys(params).forEach((key) => {
        switch (key) {
          case 'message':
            if (!params.message || params.message === '') {
              delete params.message;
            }
            break;
          case 'date':
            if (!params.date || params.date === '') {
              delete params.date;
            }
            break;
          case 'time':
            if (!params.time || params.time === '') {
              delete params.time;
            }
            break;
          case 'isDisplayingTime':
            if (!params.isDisplayingTime) {
              delete params.isDisplayingTime;
            }
            break;
        }
      });
      this.formValue.emit(params);
    }
  }
}
