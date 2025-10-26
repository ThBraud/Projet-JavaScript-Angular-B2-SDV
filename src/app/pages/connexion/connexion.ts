import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ServiceAuthentification} from '../../services/service-authentification';
import {HttpClientModule} from '@angular/common/http';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true, // le composant peut fonctionner de manière autonome
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './connexion.html',
  styleUrls: ['./connexion.scss']
})
// Propriétes pour stocher les informations et message a l'utilisateur
export class Connexion {
  email: string = '';
  password: string = '';
  message: string = '';
  messageType : 'success' | 'error' = 'success';

  constructor(private authService: ServiceAuthentification) {
  }
  // Formulaire de connexion, puis redirection vers page d'accueil
  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response.code === "200") {
          this.message = "Connexion réussie";
          window.location.href = 'http://localhost:4200/liste-articles';
        } else {
          this.message = "Échec de la connexion : Mot de passe ou Email incorrect"
        }
      },
      // en cas de crash
      error: (err) => {
        this.message = "Erreur réseau ou serveur";
        console.error('Erreur:', err);
      }
    });
  }

}
