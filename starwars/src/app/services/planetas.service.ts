    import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  planetas: any [];
    
  constructor(private http: HttpClient ) { }

    getTodos() {
  return this.http.get('https://swapi.dev/api/planets');
}

    getPlaneta(id) {
  return this.http.get('https://swapi.dev/api/planets/'+id);
}

}