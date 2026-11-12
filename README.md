# Elkoutami Immobilier - Site Web d'Excellence au Maroc

Bienvenue sur le projet **Elkoutami Immobilier** (Immobilier Elkoutami), portail web de référence pour l'immobilier de prestige au Maroc.

---

## 🌟 Présentation du Projet

Conçu selon les standards internationaux de l'immobilier de luxe (inspiré de Sotheby's Realty, Barnes, Engel & Völkers), le site **Elkoutami Immobilier** met en valeur les plus belles propriétés du Royaume du Maroc à **Casablanca, Marrakech, Rabat, Tanger, Bouskoura et Agadir**.

### ✨ Caractéristiques Clés & Design Pro

1. **Identité Visuelle de Prestige**
   - Palette royale marocaine : *Bleu Saphir Impérial* (`#0A192F`), *Or Champagne* (`#C5A880`), et *Marbre Ivoire* (`#FBFBFA`).
   - Typographies de maître : **Cinzel** (titrage royal et prestigieux) et **Plus Jakarta Sans** (lisibilité contemporaine fluide).
   - Monogramme doré architectural Elkoutami.

2. **Moteur de Recherche Multi-Critères en Direct**
   - Onglets d'opération : *Tous nos biens*, *Acheter*, *Louer*, *Projets Neufs*.
   - Filtres dynamiques par ville marocaine, type de bien (Villas & Domaines, Riads & Palais, Penthouses, Appartements de Maître) et budget en **MAD (Dirhams marocains)**.
   - Filtrage instantané côté client (sans rechargement de page).

3. **Simulateur de Crédit Immobilier Spécifique au Marché Marocain**
   - Calcul en temps réel de la mensualité en **MAD**.
   - Prise en compte de l'apport, de la durée (jusqu'à 25 ans) et du taux bancaire marocain moyen (ex: 4.75% HT).
   - **Calculateur automatique des frais d'acte notarié au Maroc (~6.7%)** :
     - Droits d'enregistrement DGI (4%)
     - Conservation Foncière ANCFCC (1.5% + 200 DH)
     - Émoluments de notaire et TVA (1.2%)
   - Mise en relation directe avec les pôles banque privée partenaires (*Attijariwafa bank, BCP, Bank of Africa, CIH, CFG Bank*).

4. **Module d'Estimation de Bien en Ligne**
   - Questionnaire interactif (Ville, Type de bien, Superficie, Statut foncier titré).
   - Calcul d'une fourchette vénale estimée en Dirhams basée sur les prix au m² réels du marché marocain de prestige.
   - Génération immédiate d'un rapport avec réservation d'audit physique offert.

5. **Système de Favoris avec Sauvegarde Locale**
   - Ajout en un clic avec animation cœur.
   - Compteur dynamique dans le menu supérieur.
   - Tiroir latéral (*Drawer*) coulissant permettant de récapituler ses biens favoris et de les **partager directement en un clic via WhatsApp à un conseiller Elkoutami**.

6. **Fiche Détaillée & Galerie Photos (Modal Lightbox)**
   - Galerie photos haute définition avec miniatures interactives.
   - Spécifications précises : superficie habitable, terrain arboré, suites avec salles de bain marbre & zellige, domotique, hammam beldi, etc.
   - Fiche du conseiller dédié avec photo, téléphone direct et bouton **WhatsApp pré-rempli avec la référence du bien**.

7. **Cartographie Interactive du Maroc (Leaflet.js)**
   - Marqueurs dorés interactifs géo-localisés à Casablanca, Marrakech, Rabat, Tanger et Agadir.
   - Popups d'aperçu avec photo, prix en MAD et lien direct vers la fiche.

8. **Section Spécifique Accompagnement MRE & Investisseurs Étrangers**
   - Sécurité juridique : **100% de biens titrés** à la Conservation Foncière (ANCFCC).
   - Accompagnement pour l'obtention de la **VNA (Vocation Non Agricole)** pour les acquéreurs étrangers.
   - Rapatriement garanti des devises via l'Office des Changes.

9. **Intégration WhatsApp Flottante**
   - Badge "Conseiller disponible en ligne - Réponse en 5 min".
   - Liens pré-remplis avec messages courtois en français.

---

## 📁 Architecture des Fichiers

```
siteweb immobilier/
├── index.html               # Page d'accueil complète (Hero, Recherche, Catalogue, Simulateur, Estimation, Carte, FAQ)
├── properties.html          # Page catalogue dédiée avec filtres avancés en barre latérale (Piscine, Vue Mer, Hammam)
├── simulateur-credit.html   # Page dédiée au crédit bancaire et aux frais d'acte notarié au Maroc
├── a-propos.html            # Histoire d'Elkoutami, valeurs, équipe dirigeante et guide MRE
├── contact.html             # Coordonnées des agences (Casablanca Racine & Marrakech Hivernage), formulaire et WhatsApp
├── css/
│   └── style.css            # Feuille de style complète, design system, animations et responsive
├── js/
│   ├── properties-data.js   # Base de données réaliste des 12 propriétés de prestige au Maroc
│   └── main.js              # Logique métier : recherche, filtres, simulateur, estimation, favoris, modal, Leaflet
└── server.js                # Serveur local Node.js ultra-léger (zéro dépendance)
```

---

## 🚀 Comment Lancer et Prévisualiser le Site

### Option 1 : Double-clic direct
Vous pouvez ouvrir directement le fichier `index.html` dans n'importe quel navigateur moderne (Chrome, Edge, Safari, Firefox).

### Option 2 : Via le serveur local inclus
Ouvrez un terminal dans le dossier et lancez :
```bash
node server.js
```
Puis accédez à : **`http://localhost:3000`**

---

## 🇲🇦 Mentions Légales Intégrées
Le site intègre les mentions légales conformes au droit commercial marocain :
- Immatriculation au Registre du Commerce de Casablanca N° 458921
- Patente 34102981 • Identifiant Fiscal (IF) 39821455 • ICE 002198734000089
- Sièges : Boulevard d'Anfa, Quartier Racine (Casablanca) & Avenue Mohammed VI (Marrakech)

