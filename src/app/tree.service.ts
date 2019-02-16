import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  getTree(): Observable<Object[]>{
    let tree = [
      { id: 11, name: 'Bacteria' },
      { id: 12, name: 'Fungi' },
      { id: 13, name: 'Virus' }
    ];
    return of(tree);
  }

}
