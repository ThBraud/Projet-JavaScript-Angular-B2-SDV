import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// Création d'un interface Article nécessaire pour l'option modifier les articles
export interface Article {
  id?: string; // optionnel car pas nécessaire à la création
  title: string;
  desc: string;
  author: string;
  imgPath: string;
}

@Injectable({
  providedIn: 'any'
})

export class ListeArticlesService {

  constructor(private http: HttpClient) {}
  // Pour obtenir les articles
  getArticles(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/articles")
  }
  // Pour supprimer un article
  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`)
  }

  // Méthode pour récupérer un article par ID
  getArticleById(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/articles/${id}`);
  }

  // Méthode pour save l'article pour la modification et pour ajouter
  saveArticle(article: any): Observable<any> {
    return this.http.post('http://localhost:3000/articles/save', article);
  }
}
