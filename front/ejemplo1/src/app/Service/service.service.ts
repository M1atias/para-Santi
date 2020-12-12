import { Persona } from './../Modelo/Persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/ejemplo/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }
}
