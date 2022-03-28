import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private BASE_URL = environment.apiBaseUrl;
  private GET_ALL_CATEGORIES = this.BASE_URL + 'category';

  constructor(private http: HttpClient) {
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.GET_ALL_CATEGORIES)
      .pipe(
      tap(_ => console.log('fetched categories')),
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     /* this.log(`${operation} failed: ${error.message}`);*/

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
