# 💡 Informations 
- Projet fait sur Angular 20 
- Fait du 14/10/2025 au 22/10/2025
- Fait sur WebStorm

# 🧩 Sujet 
🔗 [Lien](https://chocolaterie.github.io/documentation/docs/js-avance/project/project-angular)  
L’application devait comporter les fonctionnalités suivantes :  
## 🔐 Authentification  
- Page de connexion
- Page d’inscription
- Page de mot de passe oublié
## 📰 Gestion des articles  
- Liste des articles : affichage des articles provenant de l’API
- Détail d’un article : consultation des informations d’un article spécifique
- Ajout et modification d’un article : formulaire pour créer ou éditer un article
- Suppression d’un article

# ⚠️ Erreurs Restantes
- Deux erreurs que je n'ai pas réussi à régler. 
	- Quand on fait une modification, il est impossible de changer une image 
	- Quand un article est créé localement, son détail article est vide, car la page détail-article va chercher l'information sur l'API, or il n'existe pas sur l'API.  

# 🔗 Lien vers l'API  
[Back du projet](https://github.com/Chocolaterie/ApiArticle)  
💡**L'api est nécessaire pour le bon fonctionnement de l'application**  
## Etape obligatoire pour faire fonctionner l'application    
- Installer les dépendances : ``npm install``  
- Cloner l'api : ``git clone https://github.com/Chocolaterie/ApiArticle``  
- Se positionner dans le répertoire : ``cd ApiArticle``   
- Lancer le serveur, via le cmd: ``npm start``  
Les requêtes sont à effectuer à http://localhost:3000. **Attention c'est l'adresse de l'API pas de de l'application**
