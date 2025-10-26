import { Routes, RouterModule } from '@angular/router';
import {ListeArticles} from './pages/liste-articles/liste-articles';
import {DetailArticles} from './pages/detail-articles/detail-articles';
import {NgModule } from '@angular/core';
import {Connexion} from './pages/connexion/connexion';
import {Inscription} from './pages/inscription/inscription';
import {MotDePasseOublier} from './pages/mot-de-passe-oublier/mot-de-passe-oublier';
import {ModifierArticle} from './pages/modifier-article/modifier-article';
import {AjouterArticle} from './pages/ajouter-article/ajouter-article';

export const routes: Routes = [
  {path: `liste-articles`, component: ListeArticles },
  {path: `liste-articles/:id`, component: DetailArticles },
  {path: `connexion`, component: Connexion },
  {path: `inscription`, component: Inscription },
  {path: `mot-de-passe`, component: MotDePasseOublier },
  {path: `modifier-article/:id`, component: ModifierArticle },
  {path: `ajouter-article`, component: AjouterArticle },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
