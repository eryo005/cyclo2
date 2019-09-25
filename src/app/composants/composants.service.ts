import { Injectable } from '@angular/core';
import { Composant } from './composant';
import { COMPOSANT } from './mock-composants';

@Injectable({
  providedIn: 'root'
})
export class ComposantsService {

      // Retourne les composants
      getComposants(): Composant[] {
        return COMPOSANT;
      }
      
      // Retourne la machine avec l'identifiant passé en paramètre
      getMachine(id: number): Composant {
        let composants = this.getComposants();
      
        for(let index = 0; index < composants.length; index++) {
          if(id === composants[index].id) {
            return composants[index];
          }
        }
      }

}
