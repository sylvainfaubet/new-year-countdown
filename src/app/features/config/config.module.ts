import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigFormComponent } from './components/config-form/config-form.component';
import { ConfigPage } from './pages/config/config.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfigPage, ConfigFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConfigRoutingModule,
  ],
})
export class ConfigModule {}
