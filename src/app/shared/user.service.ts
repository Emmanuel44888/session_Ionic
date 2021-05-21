import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../classes/user';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'https://dry-bastion-69323.herokuapp.com/api/users/';
  headers = new HttpHeaders().set('content-Type', 'application/json');

  users: Array<User> = new Array<User>();

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    let API_URL = `${this.url}`;
    
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
   }

   // Gère les erreurs par rapport au coté serveur
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
