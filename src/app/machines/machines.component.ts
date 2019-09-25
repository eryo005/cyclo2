import { Component, OnInit } from '@angular/core';
import { Machine } from './machine';

import { Router } from '@angular/router';
import { MachinesService } from './machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent implements OnInit {
  machines: Machine[] = null;
  title: string = "Liste des machines";
  

  constructor(private router: Router, private machinesService: MachinesService) { }

  ngOnInit() {
    this.getMachines();
  }
  getMachines(): void {
    this.machinesService.getMachines()
    .subscribe(machines => this.machines = machines);
  }

  selectMachine(machine: Machine): void {
		let link = ['/machine', machine.id];
		this.router.navigate(link);
  }
  
  
ChoiceMachine() {
  let link = ['/composant/list'];
  this.router.navigate(link);
}
}
