import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Case } from './case';

@Injectable()
export class CaseService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private casesUrl = 'http://www.mocky.io/v2/590212490f00006b18d2cb05';  // URL to web api

  constructor(private http: Http) { }

  getCases(): Promise<Case[]> {
    return this.http.get(this.casesUrl)
               .toPromise()
               .then(response => response.json() as Case[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

