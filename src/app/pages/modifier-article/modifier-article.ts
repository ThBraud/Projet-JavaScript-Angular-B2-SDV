import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Article, ListeArticlesService} from '../../services/liste-articles-service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modifier-article',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './modifier-article.html',
})
export class ModifierArticle {
  // création d'un article vide auquel on donnera les valeurs d'un article existant
  public article: Article = {
    title: '',
    desc: '',
    author: '',
    imgPath: ''
  };

  constructor(
    private articleService: ListeArticlesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const articleId = Number(this.activatedRoute.snapshot.paramMap.get('id')); // récupère l'id présent dans l'url
    if (articleId) { // si l'id existe alors on récupère ses valeurs qu'on place dans l'article créer précédement
      this.articleService.getArticleById(articleId).subscribe({
        next: (data) => {
          console.log(data);
          if (data.code == 200) {
            this.article = data.data;
          } else {
            alert('Article introuvable');
            this.router.navigate(['/liste-articles']);
          }
        },
        error: (err) => {
          console.error(err);
          alert('Erreur lors de la récupération de l’article');
          this.router.navigate(['/liste-articles']);
        }
      });
    }
  }
  // Appel du service pour save un article/le modifier dans ce cas la.
  onClickModifyArticle(): void {
    this.articleService.saveArticle(this.article).subscribe({  // une fois modifiées, les valeurs de l'article récupérées sont envoyées vers l'api
      next: data => {
        if (data.code == 200) {
          this.article = data.data
          this.router.navigate(['/liste-articles']);
        } else {
          alert('Erreur lors de la modification.');
        }
      },
      // en cas de crash
      error: (err) => {
        console.error(err);
        alert('Erreur serveur.');
      }
    })
  }}
