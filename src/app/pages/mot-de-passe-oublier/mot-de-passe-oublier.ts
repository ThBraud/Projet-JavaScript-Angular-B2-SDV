import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ServiceAuthentification} from '../../services/service-authentification';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mot-de-passe-oublier',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './mot-de-passe-oublier.html',
  styleUrl: './mot-de-passe-oublier.scss'
})
export class MotDePasseOublier {
  email: string = '';
  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private authmotdepasse: ServiceAuthentification, public router : Router) {}

// On demande l'email pour le reste password
  onResetPassword() {
    if (!this.email) {
    this.messageType = 'error';
    this.message = 'Veuillez entrer votre adresse mail.';
    return;
  }
    // Réponse de l'API à la demande de reset, succès ou non. Puis affichage du nouveau mot de passe.
  this.authmotdepasse.resetPassword(this.email).subscribe({
    next: (response: any) => {
      if (response.code === "200") {
        this.messageType = 'success';
        this.message = `Mot de passe réinitialisé avec succès ! Nouveau mot de passe : ${response.data}`;
      } else {
        this.messageType = 'error';
        this.message = response.message || 'Erreur lors de la réinitialisation.';
      }
    },
    // en cas de crash
    error: () => {
      this.messageType = 'error';
      this.message = 'Erreur serveur.';
    }
  });
}
}
