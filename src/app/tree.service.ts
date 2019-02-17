import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  tree = [
    { id: 11, name: 'Bacteria' },
    { id: 12, name: 'Fungi' },
    { id: 13, name: 'Virus' }
  ];

  private treeApiUrl = "https://api.opentreeoflife.org/v3/tree_of_life";

  constructor(private http: HttpClient) { }

  getTree(): Observable<Object> {
    const url = `${this.treeApiUrl}/about`;

    let params = {
      include_source_list: true
    };

    return this.http.post<Object>(url, params, httpOptions).pipe(
      catchError(this.handleError('getTree', []))
    );
  }

  getSubTree(id: string): Observable<Object> {
    const url = `${this.treeApiUrl}/subtree`;

    let params = {
      node_id: id
    };

    return this.http.post<Object>(url, params, httpOptions).pipe(
      catchError(this.handleError('getTree', []))
    );
  }

  getTreeNode(id: string): Observable<Object> {
    const url = `${this.treeApiUrl}/node_info`;

    let params = {
      node_id: id,
      include_lineage: true
    };

    return this.http.post<Object>(url, params, httpOptions).pipe(
      catchError(this.handleError<Object>(`getTreeNode id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
