import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  search(criteria: any): Observable<any> {
    let queryParams = "";
    if (criteria) {
      queryParams = Object.keys(criteria).reduce((a: any, b: any) => {
        if (!criteria[b]) return a;
        if (a) return `${a}&${b}=${criteria[b]}`;
        return `?${b}=${criteria[b]}`
      }, null);
    }

    console.log(queryParams);
    return this.http.get(`${this.baseUrl}/beers${queryParams}`);
  }
}
