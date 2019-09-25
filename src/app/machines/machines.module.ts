import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MachineRoutingModule } from './machines-routing.module';
import { MachinesComponent } from './machines.component';
import { DetailMachineComponent } from './detail-machine/detail-machine.component';
import { MachineFormComponent } from './machine-form/machine-form.component';
import { EditMachineComponent } from './edit-machine.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { AuthGuard } from '../auth-guard/auth-guard.service';
import { MachinesService } from './machines.service';
import { SearchMachineComponent } from './search-machine/search-machine.component';

@NgModule({
  declarations: [
    MachinesComponent,
    DetailMachineComponent,
    MachineFormComponent,
    EditMachineComponent,
    AddMachineComponent,
    SearchMachineComponent,

  ],
  imports: [
    CommonModule,
    MachineRoutingModule,
    FormsModule
  ],
  providers: [
    MachinesService,
    AuthGuard
  ]
})
export class MachinesModule { }
