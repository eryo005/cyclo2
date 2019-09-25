import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Machine } from '../machine';
import { MachinesService } from '../machines.service';

@Component({
  selector: 'app-detail-machine',
  templateUrl: './detail-machine.component.html',
  styleUrls: ['./detail-machine.component.scss'],
})
export class DetailMachineComponent implements OnInit {
  
  machine: Machine = null;

  constructor(private route : ActivatedRoute, private router: Router, private machinesService: MachinesService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.machinesService.getMachine(id)
    .subscribe(machine => this.machine = machine);
    console.log(this.machine);
    }

    goBack(): void {
    this.router.navigate(['/machine/list']);
  }
  goEdit(machine: Machine): void {
    let link = ['/machine/edit', machine.id];
    this.router.navigate(link);
  }
  delete(machine: Machine) : void {
    this.machinesService.deleteMachine(machine)
    .subscribe(_ => this.goBack());
  }
  }

  



