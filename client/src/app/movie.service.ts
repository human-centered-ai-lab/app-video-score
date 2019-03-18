import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stripe } from './stripe';
import { Cut } from './cut';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Movie, MovieState } from './entities/movie.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MovieService {

  private movieAPI = '/api/movies';  // URL to web api

  constructor( private messageService: MessageService,
               private http: HttpClient) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MovieService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStripes(id: number): Observable<Stripe[]> {
    const url = `/api/movie/${id}/stripes`;
    return this.http.get<Stripe[]>(url).pipe(
      tap(_ => this.log(`fetched stripes for id=${id}`)),
      catchError(this.handleError<Stripe[]>(`getStripes id=${id}`))
    );
  }

  getCuts(id: number): Observable<Cut[]> {
    const url = `/api/movie/${id}/cuts`;
    return this.http.get<Cut[]>(url).pipe(
      tap(_ => this.log(`fetched cuts for id=${id}`)),
      catchError(this.handleError<Cut[]>(`getCuts id=${id}`))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMovie(movie: Movie | number): Observable<Movie> {

    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `/api/movie/${id}`;

    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

 computeStripe(id: number) {

    console.log('Compute Stripes Process in MOVIE SERVICES');
    const url = `/api/movie/${id}/command`;
    const command = `{ "command": "[MOVIE] MAKE STRIPES", "parameters": {"silent": "true"} }`;
    console.log(url, command);

    this.http.post(url, command, httpOptions).pipe(
      tap(_ => this.log(`generate stripes id=${id}`)),
      catchError(this.handleError<Movie>('computeStripe'))
    ).subscribe(() => console.log('command done'));
  }

 computeCuts (id: number) {

    console.log('Compute Cut Process in MOVIE SERVICES');
    const url = `/api/movie/${id}/command`;
    const command = `{ "command": "[MOVIE] ANALYZE CUTS", "parameters": {"silent": "true"} }`;

    this.http.post<Movie>(url, command, httpOptions).pipe(
      tap(_ => this.log(`compute cuts movie id=${id}`)),
      catchError(this.handleError<Movie>('computeCuts'))
    ).subscribe(() => console.log('command done'));
  }


  makeDocAndOmImages (id: number) {
    console.log('Make Document and OM Images Cache in MOVIE SERVICES');
    const url = `/api/movie/${id}/command`;
    const command = `{ "command": "[MOVIE] MAKE DOC AND IMAGES", "parameters": {"silent": "true"} }`;

    this.http.post<Movie>(url, command, httpOptions).pipe(
      tap(_ => this.log(`Make Document and OM Images id=${id}`)),
      catchError(this.handleError<Movie>('makeDocAndOmImages'))
    ).subscribe(() => console.log('Make Document and OM Images Cache  command done'));
  }



}
