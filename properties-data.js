/**
 * Elkoutami Immobilier - Base de Données des Biens de Prestige au Maroc
 * Toutes les propriétés sont présentées avec des données réalistes et représentatives du marché marocain haut de gamme.
 */

const PROPERTIES_DATA = [
  {
    id: 1,
    ref: "ELK-CAS-001",
    title: "Villa d'Architecte Contemporaine avec Vue Mer",
    category: "villa",
    status: "vente",
    featured: true,
    badge: "Exclusivité",
    city: "Casablanca",
    district: "Anfa Supérieur",
    priceMAD: 28500000,
    priceFormatted: "28 500 000 MAD",
    priceEuro: "~ 2 640 000 €",
    area: 950,
    landArea: 1600,
    bedrooms: 6,
    bathrooms: 7,
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Piscine à débordement",
      "Vue panoramique sur l'Océan",
      "Domotique intégrale",
      "Hammam Beldi en marbre",
      "Suite Master de 120 m²",
      "Garage sous-sol 4 voitures",
      "Sécurité 24/7 et vidéosurveillance",
      "Titre Foncier net et sans charge"
    ],
    description: "Chef-d'œuvre architectural niché au cœur d'Anfa Supérieur, cette propriété d'exception allie lignes épurées et noblesse des matériaux (marbre Statuario, boiseries en noyer d'Amérique). Offrant de grandioses volumes de réception ouverts sur un jardin paysagé luxuriant et une piscine miroir avec vue imprenable sur l'Atlantique. Espace bien-être privatif avec hammam marocain traditionnel et salle de sport.",
    coords: { lat: 33.5898, lng: -7.6653 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 2,
    ref: "ELK-RAK-002",
    title: "Somptueux Riad Palais au Cœur de la Palmeraie",
    category: "riad",
    status: "vente",
    featured: true,
    badge: "Coup de Cœur",
    city: "Marrakech",
    district: "La Palmeraie",
    priceMAD: 19800000,
    priceFormatted: "19 800 000 MAD",
    priceEuro: "~ 1 830 000 €",
    area: 1200,
    landArea: 10000,
    bedrooms: 7,
    bathrooms: 8,
    yearBuilt: 2021,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Parc arboré 10 000 m² (oliviers centenaires)",
      "Piscine semi-olympique chauffée",
      "Spa privatif avec hammam & salle de massage",
      "Vue dégagée sur la chaîne de l'Atlas",
      "Pavillon d'invités indépendant",
      "Logement pour le personnel",
      "Puits d'eau privé & autorisation VNA pour non-marocains",
      "Titre Foncier définitif"
    ],
    description: "Une oasis de raffinement absolu dans le quartier le plus prisé de Marrakech. Ce palais d'inspiration arabo-andalouse conjugue artisanat traditionnel d'excellence (sculptures sur plâtre, plafonds en cèdre sculpté à la main, zellige de Fès) et confort moderne le plus sophistiqué. Les 7 suites majestueuses disposent toutes de leur terrasse privative avec vue sur les cimes enneigées de l'Atlas.",
    coords: { lat: 31.6698, lng: -7.9733 },
    agent: {
      name: "Sofia Benjelloun",
      role: "Responsable Marrakech & Régions Sud",
      phone: "+212 6 62 98 76 54",
      whatsapp: "212662987654",
      email: "sofia@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 3,
    ref: "ELK-CAS-003",
    title: "Penthouse Triplex d'Exception avec Rooftop & Jacuzzi",
    category: "penthouse",
    status: "vente",
    featured: true,
    badge: "Rare sur le Marché",
    city: "Casablanca",
    district: "Triangle d'Or - Racine",
    priceMAD: 9400000,
    priceFormatted: "9 400 000 MAD",
    priceEuro: "~ 870 000 €",
    area: 420,
    landArea: null,
    bedrooms: 4,
    bathrooms: 5,
    yearBuilt: 2024,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Rooftop aménagé de 150 m² avec Jacuzzi",
      "Ascenseur privatif à clé arrivant dans l'appartement",
      "Cuisine italienne Boffi entièrement équipée",
      "Vue panoramique à 360° sur Casablanca",
      "Cheminée contemporaine au bioéthanol",
      "3 places de parking titrées au sous-sol",
      "Box de stockage sécurisé",
      "Résidence de très haut standing avec gardiennage"
    ],
    description: "Au dernier étage d'un immeuble ultra moderne au Triangle d'Or, ce penthouse triplex baigné de lumière offre des prestations inégalées. Vastes réceptions avec 6 mètres de hauteur sous plafond, suite parentale digne d'un hôtel 5 étoiles avec double dressing et salle de bain en quartz. Le rooftop exclusif accueille un salon extérieur abrité, un solarium et un jacuzzi chauffé.",
    coords: { lat: 33.5882, lng: -7.6436 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 4,
    ref: "ELK-RAB-004",
    title: "Propriété de Prestige Diplomatique & Résidentielle",
    category: "villa",
    status: "vente",
    featured: true,
    badge: "Quartier Diplomatique",
    city: "Rabat",
    district: "Souissi",
    priceMAD: 24000000,
    priceFormatted: "24 000 000 MAD",
    priceEuro: "~ 2 220 000 €",
    area: 1100,
    landArea: 3200,
    bedrooms: 6,
    bathrooms: 7,
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Parc paysager boisé de 3 200 m²",
      "Piscine chauffée avec pool-house",
      "Normes de sécurité internationales pour résidences d'ambassade",
      "Triple salon de réception marocain et européen",
      "Espace bien-être avec sauna & hammam",
      "Poste de garde blindé et vidéosurveillance",
      "Grande cour d'honneur pour 8 véhicules"
    ],
    description: "Située dans l'artère la plus prestigieuse de Souissi à Rabat, cette demeure de maître séduit par sa majesté et son calme souverain. Conçue pour recevoir avec faste tout en préservant l'intimité familiale, elle propose de volumineux salons s'ouvrant sur une terrasse ombragée et une pelouse verdoyante à perte de vue.",
    coords: { lat: 33.9723, lng: -6.8398 },
    agent: {
      name: "Mehdi Alami",
      role: "Directeur Associé Rabat",
      phone: "+212 6 63 45 67 89",
      whatsapp: "212663456789",
      email: "mehdi@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 5,
    ref: "ELK-TNG-005",
    title: "Villa Contemporaine Dominant le Détroit de Gibraltar",
    category: "villa",
    status: "vente",
    featured: false,
    badge: "Front de Mer",
    city: "Tanger",
    district: "Marshan / Cap Malabata",
    priceMAD: 14800000,
    priceFormatted: "14 800 000 MAD",
    priceEuro: "~ 1 370 000 €",
    area: 720,
    landArea: 1450,
    bedrooms: 5,
    bathrooms: 6,
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Vue féerique sur le Détroit et les côtes espagnoles",
      "Piscine miroir à débordement",
      "Grandes baies vitrées coulissantes sans rupture",
      "Ascenseur panoramique intérieur",
      "Toit-terrasse lounge aménagé",
      "Isolation phonique et thermique haute performance",
      "Titre foncier individuel"
    ],
    description: "Une prouesse architecturale suspendue entre ciel et mer à Tanger. Chaque pièce a été pensée pour cadrer l'horizon et les défilés maritimes du Détroit. Les couchers de soleil y sont un spectacle permanent. Proximité immédiate du port de plaisance Tanja Marina Bay et du centre-ville historique.",
    coords: { lat: 35.7925, lng: -5.7981 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 6,
    ref: "ELK-BSK-006",
    title: "Villa Moderne Neuve en Première Ligne de Golf",
    category: "villa",
    status: "neuf",
    featured: true,
    badge: "Programme Neuf",
    city: "Bouskoura",
    district: "Ville Verte Golf Resort",
    priceMAD: 7850000,
    priceFormatted: "7 850 000 MAD",
    priceEuro: "~ 725 000 €",
    area: 510,
    landArea: 800,
    bedrooms: 4,
    bathrooms: 5,
    yearBuilt: 2025,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Accès direct au parcours de Golf 18 trous",
      "Piscine privative avec solarium en teck",
      "Climatisation réversible gainée Inverter",
      "Panneaux photovoltaïques & chauffe-eau solaire",
      "Cuisine américaine haut de gamme avec îlot en céramique",
      "Communauté fermée ultra sécurisée avec contrôle d'accès",
      "À 15 minutes des écoles internationales de Casablanca"
    ],
    description: "Le summum du confort contemporain dans l'écrin vert et apaisant de Bouskoura. Conçue selon les standards écologiques les plus rigoureux, cette villa neuve propose des espaces de vie conviviaux ouverts sur les fairways arborés. Finitions irréprochables signées par les meilleurs artisans marocains.",
    coords: { lat: 33.4542, lng: -7.6489 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 7,
    ref: "ELK-RAK-LOC01",
    title: "Appartement de Prestige Meublé avec Service Hôtelier",
    category: "appartement",
    status: "location",
    featured: false,
    badge: "Location Luxe",
    city: "Marrakech",
    district: "L'Hivernage",
    priceMAD: 35000,
    priceFormatted: "35 000 MAD / mois",
    priceEuro: "~ 3 240 € / mois",
    area: 195,
    landArea: null,
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Totalement meublé par un architecte d'intérieur renommé",
      "Terrasse d'angle avec vue sur les jardins de l'Hivernage",
      "Accès à la piscine commune chauffée et salle de fitness",
      "Service de conciergerie 24/7 et ménage quotidien disponible",
      "Parking souterrain sécurisé",
      "Proche des meilleurs restaurants et palaces de Marrakech"
    ],
    description: "Idéal pour un séjour longue durée ou une expatriation dans des conditions de confort absolu. Cet appartement raffiné propose des finitions de premier ordre, un mobilier contemporain sur-mesure et une atmosphère feutrée au cœur du quartier le plus chic de Marrakech.",
    coords: { lat: 31.6212, lng: -8.0125 },
    agent: {
      name: "Sofia Benjelloun",
      role: "Responsable Marrakech & Régions Sud",
      phone: "+212 6 62 98 76 54",
      whatsapp: "212662987654",
      email: "sofia@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 8,
    ref: "ELK-CAS-LOC02",
    title: "Appartement Front de Mer Vue Directe Océan",
    category: "appartement",
    status: "location",
    featured: false,
    badge: "Front de Mer",
    city: "Casablanca",
    district: "Ain Diab Corniche",
    priceMAD: 26000,
    priceFormatted: "26 000 MAD / mois",
    priceEuro: "~ 2 400 € / mois",
    area: 180,
    landArea: null,
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Grande terrasse panoramique face à l'Océan",
      "Cheminée feu de bois moderne",
      "Cuisine équipée Siemens avec buanderie",
      "Suite parentale vue mer avec dressing et baignoire îlot",
      "Deux places de garage titrées",
      "Gardiennage 24/7 et ascenseur Schindler"
    ],
    description: "Vivez au rythme des vagues au cœur de la Corniche d'Ain Diab. Dans une résidence récente et très sécurisée, cet appartement spacieux vous offre un cadre de vie idyllique à quelques minutes du Morocco Mall et du centre financier Casa Anfa.",
    coords: { lat: 33.5855, lng: -7.6789 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 9,
    ref: "ELK-AGA-007",
    title: "Villa Californienne & Jardin Exotique Face aux Dunes",
    category: "villa",
    status: "vente",
    featured: false,
    badge: "Bord de Mer",
    city: "Agadir",
    district: "Baie des Palmiers / Founty",
    priceMAD: 11500000,
    priceFormatted: "11 500 000 MAD",
    priceEuro: "~ 1 065 000 €",
    area: 600,
    landArea: 1100,
    bedrooms: 5,
    bathrooms: 5,
    yearBuilt: 2023,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Climat ensoleillé 300 jours par an",
      "Piscine miroir chauffée",
      "Jardin paysagé avec cactées et palmiers royaux",
      "Espace barbecue et cuisine d'été extérieure",
      "Suite principale en rez-de-jardin avec patio privé",
      "Proximité de la Marina d'Agadir et des golfs"
    ],
    description: "Une sérénité totale baignée par la lumière atlantique d'Agadir. Cette villa d'inspiration moderniste californienne propose des transitions fluides entre l'intérieur et l'extérieur, sublimée par des matériaux nobles et une ambiance chaleureuse et lumineuse.",
    coords: { lat: 30.4074, lng: -9.5982 },
    agent: {
      name: "Mehdi Alami",
      role: "Directeur Associé",
      phone: "+212 6 63 45 67 89",
      whatsapp: "212663456789",
      email: "mehdi@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 10,
    ref: "ELK-RAK-008",
    title: "Domaine Éco-Luxe d'Artiste & Vue Atlas",
    category: "riad",
    status: "vente",
    featured: false,
    badge: "Unique",
    city: "Marrakech",
    district: "Route de l'Ourika Km 12",
    priceMAD: 16900000,
    priceFormatted: "16 900 000 MAD",
    priceEuro: "~ 1 565 000 €",
    area: 850,
    landArea: 12500,
    bedrooms: 6,
    bathrooms: 6,
    yearBuilt: 2022,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Domaine bio de 1,25 hectare clôturé",
      "Piscine naturelle d'eau de source",
      "Architecture pisé contemporain haut de gamme",
      "Vue directe sans vis-à-vis sur le mont Toubkal",
      "Oliveraie productive et potager en permaculture",
      "Dépendance pour gardien et atelier d'artiste"
    ],
    description: "Pour les esthètes en quête d'harmonie et d'authenticité. Ce domaine singulier sur la route de l'Ourika mêle l'architecture traditionnelle marocaine en pisé et le confort contemporain le plus pointu. Un havre de paix ressourçant à seulement 20 minutes du centre de Marrakech.",
    coords: { lat: 31.5422, lng: -7.9511 },
    agent: {
      name: "Sofia Benjelloun",
      role: "Responsable Marrakech & Régions Sud",
      phone: "+212 6 62 98 76 54",
      whatsapp: "212662987654",
      email: "sofia@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 11,
    ref: "ELK-CAS-011",
    title: "Appartement de Maître au Cœur de Casablanca",
    category: "appartement",
    status: "vente",
    featured: false,
    badge: "Prestige",
    city: "Casablanca",
    district: "Gauthier",
    priceMAD: 5800000,
    priceFormatted: "5 800 000 MAD",
    priceEuro: "~ 537 000 €",
    area: 245,
    landArea: null,
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2021,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Parquet massif en chêne et boiseries sur-mesure",
      "Double réception avec salon marocain revisité",
      "Cuisine fermée avec électroménager Miele",
      "Deux places de parking en sous-sol avec prise pour véhicule électrique",
      "Proximité immédiate du Parc de la Ligue Arabe",
      "Immeuble d'architecte ultra côté avec conciergerie privée"
    ],
    description: "Situé dans la partie la plus calme et résidentielle du quartier Gauthier, cet appartement traversant bénéficie d'une lumière naturelle exceptionnelle tout au long de la journée. Récemment rénové par une grande signature casablancaise.",
    coords: { lat: 33.5901, lng: -7.6312 },
    agent: {
      name: "Taha Elkoutami",
      role: "Fondateur & Directeur Général",
      phone: "+212 6 61 12 34 56",
      whatsapp: "212661123456",
      email: "taha@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 12,
    ref: "ELK-RAB-012",
    title: "Villa Moderne Neuve avec Jardin Paysagé & Piscine",
    category: "villa",
    status: "neuf",
    featured: false,
    badge: "Livraison Immédiate",
    city: "Rabat",
    district: "Hay Riad - Secteur Privilégié",
    priceMAD: 12900000,
    priceFormatted: "12 900 000 MAD",
    priceEuro: "~ 1 195 000 €",
    area: 650,
    landArea: 1050,
    bedrooms: 5,
    bathrooms: 5,
    yearBuilt: 2025,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Architecture cubique aux lignes pures",
      "Piscine avec cascade d'eau décorative",
      "Ascenseur privatif desservant les 3 niveaux",
      "Sous-sol aménagé avec salle de cinéma privée et hammam",
      "Domotique Legrand MyHome",
      "Système de climatisation réversible VRV Daikin",
      "Titre foncier individuel net"
    ],
    description: "Une propriété d'avant-garde au sein du quartier d'affaires et résidentiel le plus dynamique de Rabat. Grands volumes de plain-pied ouverts sur la piscine et le jardin d'agrément. Idéal pour une famille de cadres dirigeants ou de diplomates.",
    coords: { lat: 33.9554, lng: -6.8789 },
    agent: {
      name: "Mehdi Alami",
      role: "Directeur Associé Rabat",
      phone: "+212 6 63 45 67 89",
      whatsapp: "212663456789",
      email: "mehdi@elkoutami-immobilier.ma",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    }
  }
];

// Données des villes phares au Maroc
const CITIES_DATA = [
  {
    name: "Casablanca",
    subtitle: "Capitale Économique & Prestige Urbain",
    districts: "Anfa Supérieur, Triangle d'Or, Racine, Ain Diab, Bouskoura",
    image: "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 42,
    startingPrice: "4 500 000 MAD"
  },
  {
    name: "Marrakech",
    subtitle: "La Ville Ocre, Riads & Domaines d'Exception",
    districts: "Palmeraie, Hivernage, Amelkis, Route de l'Ourika",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 38,
    startingPrice: "5 200 000 MAD"
  },
  {
    name: "Rabat",
    subtitle: "Capitale Royale, Diplomatique & Patrimoine",
    districts: "Souissi, Hay Riad, Bir Kacem, Aviation",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 26,
    startingPrice: "6 800 000 MAD"
  },
  {
    name: "Tanger",
    subtitle: "La Perle du Nord & Portes de l'Europe",
    districts: "Marshan, Cap Malabata, Vieille Montagne, Iberia",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&w=800&q=80",
    propertiesCount: 19,
    startingPrice: "3 900 000 MAD"
  }
];

// Avis clients vérifiés
const TESTIMONIALS_DATA = [
  {
    name: "Dr. Karim Berrada",
    role: "Chirurgien & Investisseur MRE (France / Maroc)",
    city: "Casablanca - Anfa Supérieur",
    comment: "L'équipe d'Elkoutami Immobilier a orchestré l'achat de notre villa à Anfa avec un niveau de rigueur et de discrétion remarquable. Toute la vérification juridique du titre foncier à la conservation et le suivi notarié ont été d'une fluidité exemplaire. La meilleure agence de prestige au Maroc.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Hélène & Jean-Marc de Saint-Ange",
    role: "Acquéreurs Internationaux (Suisse)",
    city: "Marrakech - Palmeraie",
    comment: "Notre recherche d'un palais dans la Palmeraie a duré plusieurs mois avant de rencontrer Monsieur Elkoutami. Son écoute, sa maîtrise des dossiers d'autorisation VNA et sa franchise ont fait toute la différence. Un accompagnement digne des plus grands cabinets mondiaux.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Mme Leila Chraïbi",
    role: "Chef d'Entreprise",
    city: "Rabat - Souissi",
    comment: "La vente de ma propriété familiale à Souissi a été réalisée en moins de 60 jours au prix exact convenu. La sélection des acquéreurs était impeccable, aucune visite inutile. Je recommande Elkoutami Immobilier les yeux fermés.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

