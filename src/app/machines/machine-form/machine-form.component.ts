
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from '../machine';

import { MachinesService } from '../machines.service';

@Component({
	selector: 'machine-form',
	templateUrl: './machine-form.component.html',
	styleUrls: ['./machine-form.component.scss']
})
export class MachineFormComponent implements OnInit {

	@Input() machine: Machine; // propriété d'entrée du composant
	isAddForm: boolean;
	constructor(
		private router: Router, private machinesService: MachinesService) { }

	ngOnInit() {
		this.isAddForm = this.router.url.includes('add');
	}

	// La méthode appelée lorsque le formulaire est soumis.
	onSubmit(): void {
		if (this.isAddForm) {
			this.machinesService.addMachine(this.machine)
				.subscribe(machine => {
					this.machine = machine;
					this.goBack()
				});
		} else {
			this.machinesService.updateMachine(this.machine)
				.subscribe(() => this.goBack());
		}
	}

	goBack(): void {
		let link = ['/machine', this.machine.id];
		this.router.navigate(link);
	}
}