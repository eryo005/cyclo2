import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Machine } from './machine';
import { MachinesService } from './machines.service';

@Component({
  selector: 'edit-machine',
  template: `
    <h2 class="header center">Editer {{ machine?.name }}</h2>
		<p class="center">
			<img *ngIf="machine" [src]="machine.picture"/>
		</p>
    <machine-form [machine]="machine"></machine-form>
  `,
})
export class EditMachineComponent implements OnInit {

    machine: Machine = null;

  constructor(
    private route: ActivatedRoute,
    private machinesService: MachinesService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.machinesService.getMachine(id)
    .subscribe(machine => this.machine = machine);
  }

}