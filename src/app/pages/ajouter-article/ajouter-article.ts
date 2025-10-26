import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ListeArticlesService} from '../../services/liste-articles-service';

@Component({
  selector: 'app-ajouter-article',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './ajouter-article.html',
  styleUrls: ['./ajouter-article.scss']
})
export class AjouterArticle {
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    imgPath: new FormControl('', Validators.required)
  });

  message: string = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private serviceArticle: ListeArticlesService, private router: Router) {}

  //l'article créer localement n'aura pas de fiche détail, car le détail est récuperer sur l'API, or il existe que en local
  onSubmit() {
    if(this.articleForm.invalid) {
      this.messageType = 'error';
      this.message = 'Veuillez remplir tous les champs.';
      return;
    }
    // Création de l'article
    this.serviceArticle.saveArticle(this.articleForm.value).subscribe({
      next: (res: any) => {
        if(res.code === "200") {
          this.messageType = 'success';
          this.message = res.message;
          setTimeout(() => this.router.navigate(['/liste-articles']), 10);
        } else {
          this.messageType = 'error';
          this.message = res.message || 'Erreur lors de l’ajout.';
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
