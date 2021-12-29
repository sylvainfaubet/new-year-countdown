import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';

import { CounterPage } from './pages/counter/counter.page';
import { CounterRendererComponent } from './components/counter-renderer/counter-renderer.component';
import { BackgroundModule } from '@core/declarations/background';
import { MessageRendererComponent } from './components/message-renderer/message-renderer.component';
import { FireworkModule } from '@core/declarations/firework';

@NgModule({
  declarations: [
    CounterPage,
    CounterRendererComponent,
    MessageRendererComponent,
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    BackgroundModule,
    FireworkModule,
  ],
})
export class CounterModule {}
