import { Injectable } from '@angular/core';

import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';

export class Work{

  _id!: String;
  name!: String;
  detail!: String;

}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  // Node/Express API

  REST_API: string = 'http://localhost:8000/api';

    // Http header

    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }


    // Add Work

  AddWork(data: Work): Observable<any>{

    let API_URL = `${this.REST_API}/add-work`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )

  }

  // Get all Work Service

  GetWorks(){

    return this.httpClient.get(`${this.REST_API}`);
  }


  // Get Single Work Service


  GetWork(id: any): Observable<any> {

    let API_URL = `${this.REST_API}/open-work/${id}`;
    return this.httpClient.get(API_URL, {headers: this.httpHeaders})
      .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
      )
  }

  // Update Work Service

  updateWork(id: any ,data:any): Observable<any>{
    let API_URL = `${this.REST_API}/update-work/${id}`;
    return this.httpClient.put(API_URL, data,{headers: this.httpHeaders})
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete Work Service

  deleteWork(id: any): Observable<any>{
    let API_URL = `${this.REST_API}/delete-work/${id}`;
    return this.httpClient.delete(API_URL, {headers: this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }

   // ดักจับ Error
   handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      // Client error

      errorMessage = error.error.message;
    }else{
    // Server error
    let errorMessage = `Error Code: ${error.status}/nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
