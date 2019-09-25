import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { MachinesService } from '../machines.service';
import { Machine } from '../machine';

@Component({
  selector: 'search-machine',
  templateUrl: './search-machine.component.html',
  styleUrls: ['./search-machine.component.scss']
})
export class SearchMachineComponent implements OnInit {

  private searchTerms = new Subject<string>();
	machines$: Observable<Machine[]>;

  constructor(	private router: Router, private machineService: MachinesService) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}

  ngOnInit() {
    this.machines$ = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((term: string) => this.machineService.searchMachines(term)),
		);
  }

	gotoDetail(machine: Machine): void {
		let link = ['/machine', machine.id];
		this.router.navigate(link);
	}
}