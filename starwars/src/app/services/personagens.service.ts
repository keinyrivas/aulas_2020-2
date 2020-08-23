import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  constructor( private http: HttpClient ) {}

  getTodos() {
    return   this.http.get( 'https://swapi.dev/api/people/' );

    }
    getPersonagem(id) {
      return this.http.get('https://swapi.dev/api/people/'+id);

    }
}