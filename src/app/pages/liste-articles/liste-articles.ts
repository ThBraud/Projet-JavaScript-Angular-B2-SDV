import {Component} from '@angular/core';
import {ListeArticlesService} from '../../services/liste-articles-service';
import {HttpClientModule} from '@angular/common/http';
import {NgStyle} from '@angular/common';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  imports: [HttpClientModule,
    NgStyle,RouterLink,
  ],

  templateUrl: './liste-articles.html',
  styleUrl: './liste-articles.scss'
})

export class ListeArticles {


  public articles: any = [];
  afficher = false // par défaut, les articles ne sont pas affichés


  constructor(private listesArticles: ListeArticlesService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
  }
  onClickCallApi() {
    // Si ce n’est pas encore affiché
    if (!this.afficher) {
      this.listesArticles.getArticles().subscribe({
        next: data => {
          if (data.code == "200") {
            this.articles = data.data;}
          this.afficher = true
        }
      });
    } else {
      // Si déjà affiché → on les cache
      this.afficher = false;
    }
}
    supprimerArticle(id: number): void {
      this.listesArticles.deleteArticle(id).subscribe(() => {
        // On met à jour la liste localement
        this.articles = this.articles.filter((article :any) => article.id !== id);
      });
    }
  modifierArticle(id: number) {
    // Redirection vers la page modification avec l'id
    this.router.navigate(['/modifier-article', id]);



}
}







