import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../models/config';

@Component({
  template: `<app-config-form (formValue)="goTo($event)"></app-config-form>`,
  styleUrls: ['./config.page.css'],
})
export class ConfigPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(form: Config): Promise<boolean> {
    const queryParams = {
      q: btoa(JSON.stringify(form)),
    };
    return this.router.navigate(['/counter'], { queryParams });
  }
}
