import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantsComponent } from './composants.component';

import { ComposantsRoutingModule } from './composants-routing.module';
import { ComposantsService } from './composants.service';

@NgModule({
  declarations: [
    ComposantsComponent
  ],
  imports: [
    CommonModule,
    ComposantsRoutingModule
  ],
  providers: [
    ComposantsService
  ]
})
export class ComposantsModule { }
