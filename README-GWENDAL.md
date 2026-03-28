# 🥋 Guide GwenViet — Comment gérer mon site

## Accès rapides
- **Site en local** : http://localhost:3000
- **Admin** : http://localhost:3000/admin (mot de passe : `gwenviet2026`)
- **Déploiement** : Vercel (automatique sur push GitHub)

---

## Démarrer le site en local

```bash
cd gwenviet-site
npm run dev
```
Puis ouvrir http://localhost:3000

---

## Gestion de l'administration (/admin)

### Modifier les tarifs
1. Aller sur `/admin` → se connecter
2. Cliquer "Tarifs" dans le menu
3. Cliquer sur n'importe quelle ligne pour modifier le prix ou le libellé
4. Cliquer "Enregistrer"

### Ajouter un article de blog
1. Aller sur `/admin/blog`
2. Cliquer "Nouvel article"
3. Remplir : titre, catégorie, résumé, contenu
4. Choisir "Publié" pour le mettre en ligne
5. "Enregistrer"

### Ajouter un témoignage
1. Aller sur `/admin/temoignages`
2. Cliquer "Ajouter"
3. Remplir prénom, ville, activité, note, texte
4. "Ajouter"

### Masquer/afficher un témoignage
- Cliquer sur l'œil 👁 à droite d'un témoignage

---

## Configurer les emails (IMPORTANT)

1. Créer un compte sur **resend.com** (gratuit jusqu'à 3000 emails/mois)
2. Obtenir votre API Key
3. Ouvrir le fichier `.env.local` et remplacer :
   ```
   RESEND_API_KEY=re_XXXXXXXX_changez_moi
   ```
   par votre vraie clé Resend

4. Changer aussi le mot de passe admin :
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD=VotreNouveauMotDePasse
   ```

---

## Déployer sur Vercel (mise en ligne)

1. Créer un compte sur **vercel.com**
2. Importer ce projet depuis GitHub
3. Dans les paramètres Vercel, ajouter les variables d'environnement (copier depuis `.env.local`)
4. Chaque `git push` déploie automatiquement !

---

## Structure des pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | / | Homepage avec toutes les sections |
| Animation | /animation | Hub des animations |
| Anniversaire Ninja | /animation/anniversaires/ninja | Page détaillée |
| Vovinam | /arts-martiaux/vovinam | Cours et tarifs |
| Tarifs | /tarifs | Tableau complet des prix |
| Contact | /contact | Formulaire de réservation |
| FAQ | /faq | Questions fréquentes |
| Blog | /blog | Articles |
| Admin | /admin | Interface de gestion |

---

## Checklist avant lancement

- [ ] Remplacer les photos placeholders par de vraies photos
- [ ] Configurer Resend (emails de contact)
- [ ] Changer le mot de passe admin dans `.env.local`
- [ ] Connecter Google Search Console (SEO)
- [ ] Créer Google Business Profile
- [ ] Tester le formulaire de contact (email reçu ?)
- [ ] Vérifier sur mobile (iPhone + Android)
- [ ] Soumettre le sitemap : gwenviet.fr/sitemap.xml

---

## Support

En cas de problème technique, contacter le développeur ou consulter :
- Documentation Next.js : https://nextjs.org/docs
- Documentation Tailwind : https://tailwindcss.com/docs
