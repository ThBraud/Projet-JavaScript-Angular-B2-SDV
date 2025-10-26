import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})

export class ServiceAuthentification {
  constructor(private http: HttpClient) {
  }
  // Requête sur l'API pour la connexion
  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/login', {email, password});
  }
  // Requête sur l'API pour le mot de passe oublié
  resetPassword(email: string) {
    return this.http.post('http://localhost:3000/reset-password', { email });
  }
  // Requête sur l'API pour l'inscription
  signup(user: { email:string, password:string, passwordConfirm:string, pseudo:string, cityCode:string, city:string, phone:string }): Observable<any> {
    return this.http.post('http://localhost:3000/signup', user);
  }

}


