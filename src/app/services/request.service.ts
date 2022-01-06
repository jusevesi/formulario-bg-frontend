import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public obtenerPersonas(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerPersonas`
    return this.http.get(url).toPromise();
  }
  public agregarPersona(persona: any): Promise<any> {
    const url = `${environment.apiUrl}/agregarPersona`
    return this.http.post(url, persona).toPromise();
  }

}
