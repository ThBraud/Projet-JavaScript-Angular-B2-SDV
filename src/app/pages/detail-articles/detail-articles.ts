import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListeArticlesService} from '../../services/liste-articles-service';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-detail-articles',
  imports: [HttpClientModule
  ],
  templateUrl: './detail-articles.html',
  styleUrl: './detail-articles.scss'
})


export class DetailArticles implements OnInit {
  article : any;


  constructor(public servicearticle: ListeArticlesService ,public route: ActivatedRoute,) {
  }
  // Récuperer l'id de chaque article pour ensuite afficher le details liée a cet article
  // Ca fonctionne seulement pour les articles déja sur l'API et donc pas ceux qui seront créer localement
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.servicearticle.getArticleById(id).subscribe({
      next: (response: any) => {
        if (response.code === "200") {
          // On récupère uniquement le contenu de "data"
          this.article = response.data;
        } else {
          console.error('Erreur API :', response.message);
        }
      },
      // en cas de crash
      error: (err) => {
        console.error('Erreur lors de la récupération de l’article :', err);
      }
    });
  }
}
