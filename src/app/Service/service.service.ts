import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../Modelo/persona-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url='http://127.0.0.1:8080/usuario';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }

  getPersonaId(id: number){
    return this.http.get<Persona>(this.Url+"/id")
  }
  updatePersona(persona:Persona){
    return this.http.put(this.Url,persona);
  }
}
