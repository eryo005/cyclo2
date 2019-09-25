import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Machine } from '../machine';

@Component({
	selector: 'add-machine',
	templateUrl: './add-machine.component.html'
})
export class AddMachineComponent implements OnInit {

	machine: Machine = null;

	constructor(private titleService: Title) { }

	ngOnInit(): void {
		this.titleService.setTitle('Ajouter une machine ');
		this.machine = new Machine();
	}

}
