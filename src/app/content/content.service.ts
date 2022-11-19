import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Content } from './content';

@Injectable()
export class ContentService {
  contents: Content[] = [];
  private url = 'http://localhost:3000/api/v1/';

  constructor(
    private http: HttpClient
  ) { }

  getContents(items: number, page: number): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.url}/contents/searchYouTube?items=${items}&page=${page}`)
      .pipe(
        catchError(this.handleError('getContents', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}