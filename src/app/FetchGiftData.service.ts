import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { DataInterface } from './model/dataInterface';
@Injectable({
  providedIn: 'root',
})
export class FetchGiftDataService {
  private url = 'http://localhost:8080/api/casita';
  private URL_t = 'https://ricardo-mycvapp.herokuapp.com/api/casita';
  constructor(private http: HttpClient) {}
  dataI: DataInterface | undefined;
  async getData(): Promise<Observable<DataInterface>> {
    return this.http.get<DataInterface>(this.URL_t + '/1').pipe(
      map((res) => {
        return res;
      })
    );
  }

  saveData(data: any) {
    this.http
      .post<any>(this.URL_t, data)
      .subscribe(() => console.log('saved ... '));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
