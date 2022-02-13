import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, count, catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  //github profiles
  public getProfile(_searchQuery: any):Observable<any>{
    let dataURL = 'https://api.github.com/users/${searchQuery}?client_id=${clientId}&client_secret=${clientSecret}';
    return this.httpClient.get<any>(dataURL).pipe(
      catchError(this.handleErrors)
    );
  }

  //for github repos
  public getRepos(searchQuery: string):Observable<any>{
    let dataURL = 'https://api.github.com/users/${searchQuery}/repos?client_id=${clientId}&client_secret=${clientSecret}';
    return this.httpClient.get<any[]>(dataURL).pipe(
      catchError(this.handleErrors)
    );
  }


  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent) {
      //client side error
      errorMessage = 'MESSAGE : ${error.error.message}';
    }
    else{
      //server side error
      errorMessage = 'STATUS : ${error.status} MESSAGE : ${error.message}';
    }
    return throwError(errorMessage);
  }
}
function none(count: <T>(predicate?: ((value: T, index: number) => boolean) | undefined) => import("rxjs").OperatorFunction<T, number>, none: any): import("rxjs").OperatorFunction<any, any> {
  throw new Error('Function not implemented.');
}

