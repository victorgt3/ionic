import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    public urlUsuario = "http://localhost:8000/usuario";

    constructor(private http: HttpClient) { }


  public findAll():Observable<any> {
    return this.http.get(this.urlUsuario);
  }

  public salvar(usuario):Observable<any>{
    return this.http.post(this.urlUsuario, usuario);
  }
}
