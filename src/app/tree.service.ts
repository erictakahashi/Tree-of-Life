import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor() { }

  getTree(): Observable<string>{
    return of("tree");
  }

}
