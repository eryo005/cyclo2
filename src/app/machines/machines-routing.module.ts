import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MachinesComponent }    from './machines.component';
import { DetailMachineComponent } from './detail-machine/detail-machine.component';
import { EditMachineComponent } from './edit-machine.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { AuthGuard } from '../auth-guard/auth-guard.service';

// les routes du module machine
const machinesRoutes: Routes = [
	{
		path: 'machine',
		canActivate: [AuthGuard],
		children: [
			{ path: 'list', component: MachinesComponent },
			{ path: 'add', component: AddMachineComponent },
			{ path: 'edit/:id', component: EditMachineComponent},
			{ path: ':id', component: DetailMachineComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(machinesRoutes)
	],
	exports: [
		RouterModule
	]
})
export class MachineRoutingModule { }