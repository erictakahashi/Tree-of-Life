import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  tree = [
    { id: 11, name: 'Bacteria' },
    { id: 12, name: 'Fungi' },
    { id: 13, name: 'Virus' }
  ];

  constructor() { }

  getTree(): Observable<Object[]> {
    return of(this.tree);
  }

  getTreeNode(id: number): Observable<Object> {
    return of(this.tree.find(treeNode => treeNode.id == id));
  }

}
