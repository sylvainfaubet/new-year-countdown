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
    <mat-form-field>
      <input
        type="text"
        matInput
        placeholder="Message"
        i18n-placeholder
        message="message"
        formControlName="message"
        id="message"
      />
    </mat-form-field>
    <fieldset>
      <mat-form-field>
        <input
          type="date"
          matInput
          placeholder="Date de déclenchement"
          i18n-placeholder
          name="date"
          formControlName="date"
          id="date"
        />
      </mat-form-field>
      <button type="button" mat-raised-button (click)="setDateNow()" i18n>
        Aujourd'hui
      </button>
    </fieldset>
    <fieldset>
      <mat-form-field>
        <input
          type="time"
          matInput
          placeholder="Heure de déclenchement"
          i18n-placeholder
          formControlName="time"
          name="time"
          id="time"
        />
      </mat-form-field>
      <button type="button" mat-raised-button (click)="setTimeNow()" i18n>
        Maintenant
      </button>
    </fieldset>
    <div>
      <input
        type="checkbox"
        name="isDisplayingTime"
        formControlName="isDisplayingTime"
        id="isDisplayingTime"
      />
      <label for="isDisplayingTime" i18n>afficher l'horloge</label>
    </div>
    <button mat-raised-button color="primary" type="submit" i18n>
      envoyer
    </button>
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
      message: ['Bonne Année !!!'],
      date: [`${now.getFullYear() + 1}-01-01`],
      time: ['00:00'],
      isDisplayingTime: [false],
    });
  }

  setDateNow(): void {
    const now = new Date();
    this.form?.patchValue({
      date: `${now.getFullYear()}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`,
    });
  }

  setTimeNow(): void {
    const now = new Date();
    this.form?.patchValue({
      time: now.toTimeString().split(':').slice(0, 2).join(':'),
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
