import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceAuthentification } from '../../services/service-authentification';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.scss']
})
export class Inscription {
  signupForm: FormGroup;

  // Pour la réactive form, donc chaque case doit être remplie pour valider
  constructor(private authService: ServiceAuthentification, private router: Router) {
    this.signupForm = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      cityCode: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

// Pour des messages d'erreurs ou de succès
  message: string = '';
  messageType: 'success' | 'error' = 'success';


  onSignup() {
    // Si case vide
    if(this.signupForm.invalid) {
      this.messageType = 'error';
      this.message = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    const user = this.signupForm.value;
  // Pour le Mot de passe identique
    if(user.password !== user.passwordConfirm) {
      this.messageType = 'error';
      this.message = 'Le mot de passe et la confirmation doivent être identiques.';
      return;
    }
  // Inscription réussie
    this.authService.signup(user).subscribe({
      next: (response: any) => {
        if (response.code === "200") {
          this.messageType = 'success';
          this.message = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
          setTimeout(() => this.router.navigate(['/connexion']), 10);
        } else {
          this.messageType = 'error';
          this.message = response.message || 'Erreur lors de l’inscription.';
        }
      },
      // en cas de crash
      error: () => {
        this.messageType = 'error';
        this.message = 'Erreur serveur ou réseau.';
      }
    });
  }
}
