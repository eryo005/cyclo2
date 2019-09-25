import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposantsComponent } from './composants.component';
import { AuthGuard } from '../auth-guard/auth-guard.service';

const composantsRoutes: Routes = [
	{
		path: 'composant',
		canActivate: [AuthGuard],
		children: [
			{ path: 'list', component: ComposantsComponent },
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(composantsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ComposantsRoutingModule { }