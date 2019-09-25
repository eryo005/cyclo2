import { Injectable } from '@angular/core';
import { Machine } from './machine';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  constructor(private http: HttpClient) {

  }
  private machinesUrl = 'api/machines';

  private log(log: string) {
    console.info(log);
  }
  /* handleError */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Retourne toutes les machines
  getMachines(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.machinesUrl).pipe(
      tap(_ => this.log('fetched machines')),
      catchError(this.handleError('getMachines', []))
    );
  }

  // Retourne la machine avec l'identifiant passé en paramètre
  getMachine(id: number): Observable<Machine> {
    return this.http.get<Machine>('api/machines/'+ id).pipe(
      tap(_ => this.log(`fetched machine id=${id}`)),
      catchError(this.handleError<Machine>(`getMachine id=${id}`))
    );
  }


  /** PUT: update machine sur le  serveur */
	updateMachine(machine: Machine): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.put(this.machinesUrl, machine, httpOptions).pipe(
			tap(_ => this.log(`updated machine id=${machine.id}`)),
			catchError(this.handleError<any>('updateMachine'))
		);
  }
  
  /** DELETE  */
	deleteMachine(machine: Machine): Observable<Machine> {
		const url = `${this.machinesUrl}/${machine.id}`;
		const httpOptions = {
			headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.delete<Machine>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted machine id=${machine.id}`)),
			catchError(this.handleError<Machine>('delmachine'))
		);
}

/* GET machine search */
searchMachines(term: string): Observable<Machine[]> {
  if (!term.trim()) {
    // si le terme de recherche n'existe pas, on renvoie un tableau vide.
    return of([]);
  }
  return this.http.get<Machine[]>(`api/machines/?name=${term}`).pipe(
    tap(_ => this.log(`found machines matching "${term}"`)),
    catchError(this.handleError<Machine[]>('searchMachines', []))
  );
}
/** POST machine */
addMachine(machine: Machine): Observable<Machine> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.post<Machine>(this.machinesUrl, machine, httpOptions).pipe(
    tap((machine: Machine) => this.log(`added machine with id=${machine.id}`)),
    catchError(this.handleError<Machine>('addMachine'))
  );
}
}