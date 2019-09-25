import { Component, OnInit } from '@angular/core';
import { Composant } from './composant';

import { Router } from '@angular/router';
import { ComposantsService } from './composants.service';

@Component({
  selector: 'app-composants',
  templateUrl: './composants.component.html',
  styleUrls: ['./composants.component.scss']
})
export class ComposantsComponent implements OnInit {
  composants: Composant[] = null;
  title: string = "Liste des composants";

  constructor(private router: Router, private composantsService: ComposantsService) { }

  ngOnInit() {
    this.composants = this.composantsService.getComposants();
  }

  selectComposant(composant: Composant): void {
		let link = ['/composant', composant.id];
		this.router.navigate(link);
}


}