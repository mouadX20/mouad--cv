/**
 * ELKOUTAMI IMMOBILIER - Script Principal
 * Fonctions interactives : Recherche multi-critères, Filtrage dynamique,
 * Simulateur de crédit marocain, Estimation de bien, Favoris, Modal & WhatsApp.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initPropertiesGrid();
  initFilterTabs();
  initMortgageCalculator();
  initEstimationWizard();
  initLeafletMap();
  initFaqAccordion();
  initFavoritesSystem();
  initMobileMenu();
});

// ==========================================================================
// 1. HEADER & NAVIGATION
// ==========================================================================
function initHeader() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const icon = hamburgerBtn.querySelector('i');
      if (navMenu.classList.contains('mobile-open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Close when clicking nav links
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

// ==========================================================================
// 2. PROPERTIES RENDERING & FILTERING
// ==========================================================================
let currentProperties = [...PROPERTIES_DATA];

function initPropertiesGrid() {
  renderProperties(currentProperties);
}

function renderProperties(list) {
  const grid = document.getElementById('propertiesGrid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 14px; border: 1px dashed var(--border-light);">
        <i class="fa-solid fa-house-chimney-crack" style="font-size: 3rem; color: var(--gold); margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--primary); margin-bottom: 8px;">Aucun bien ne correspond à vos critères</h3>
        <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 20px;">Nos conseillers Elkoutami disposent d'un portefeuille de biens confidentiels "Off-Market" au Maroc.</p>
        <button class="btn btn-gold" onclick="resetFilters()">Réinitialiser les filtres</button>
      </div>
    `;
    return;
  }

  const favorites = getFavorites();

  grid.innerHTML = list.map(item => {
    const isFav = favorites.includes(item.id);
    const whatsappMsg = encodeURIComponent(
      `Bonjour Elkoutami Immobilier, je suis intéressé(e) par la propriété réf: ${item.ref} - ${item.title} à ${item.city} (${item.priceFormatted}). Pourriez-vous me transmettre la brochure détaillée et les disponibilités de visite ?`
    );

    return `
      <div class="property-card" data-id="${item.id}">
        <div class="card-img-wrap">
          <img src="${item.images[0]}" alt="${item.title}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'">
          <div class="card-badges">
            ${item.badge ? `<span class="card-badge badge-featured">${item.badge}</span>` : ''}
            <span class="card-badge badge-status">${item.status.toUpperCase()}</span>
          </div>
          <button class="favorite-btn ${isFav ? 'favorited' : ''}" onclick="toggleFavorite(${item.id}, event)" title="Ajouter aux favoris">
            <i class="${isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
          <div class="card-ref"><i class="fa-regular fa-bookmark"></i> ${item.ref}</div>
        </div>
        <div class="card-body">
          <div class="card-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${item.district}, ${item.city}</span>
          </div>
          <h3 class="card-title" title="${item.title}">${item.title}</h3>
          <div class="card-price-wrap">
            <span class="card-price-mad">${item.priceFormatted}</span>
            <span class="card-price-euro">${item.priceEuro}</span>
          </div>
          <div class="card-specs">
            <div class="spec-item">
              <i class="fa-solid fa-ruler-combined"></i>
              <span>${item.area} m²</span>
              <span class="spec-label">Habitable</span>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-bed"></i>
              <span>${item.bedrooms} ch.</span>
              <span class="spec-label">Chambres</span>
            </div>
            <div class="spec-item">
              <i class="fa-solid fa-bath"></i>
              <span>${item.bathrooms} sdb.</span>
              <span class="spec-label">Bains</span>
            </div>
          </div>
          <div class="card-footer-actions">
            <button class="btn btn-primary btn-sm card-btn-view" onclick="openPropertyModal(${item.id})">
              <span>Voir les détails</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
            <a href="https://wa.me/212661123456?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="card-btn-whatsapp" title="Contacter sur WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Category Pill Filter
function initFilterTabs() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const category = pill.getAttribute('data-filter');

      if (category === 'all') {
        currentProperties = [...PROPERTIES_DATA];
      } else if (category === 'villas-riads') {
        currentProperties = PROPERTIES_DATA.filter(p => p.category === 'villa' || p.category === 'riad');
      } else if (category === 'penthouses-appartements') {
        currentProperties = PROPERTIES_DATA.filter(p => p.category === 'penthouse' || p.category === 'appartement');
      } else if (category === 'bord-mer') {
        currentProperties = PROPERTIES_DATA.filter(p => 
          p.features.some(f => f.toLowerCase().includes('mer') || f.toLowerCase().includes('océan')) ||
          p.badge.toLowerCase().includes('mer') || p.city === 'Tanger' || p.city === 'Agadir'
        );
      } else if (category === 'neuf') {
        currentProperties = PROPERTIES_DATA.filter(p => p.status === 'neuf');
      }

      renderProperties(currentProperties);
    });
  });
}

// Hero Search Box Handling
window.searchProperties = function(event) {
  if (event) event.preventDefault();

  const activeTab = document.querySelector('.search-tab-btn.active');
  const transactionType = activeTab ? activeTab.getAttribute('data-type') : 'all';
  const city = document.getElementById('searchCity').value;
  const propertyType = document.getElementById('searchType').value;
  const budget = document.getElementById('searchBudget').value;

  currentProperties = PROPERTIES_DATA.filter(item => {
    // Transaction type
    if (transactionType === 'vente' && item.status !== 'vente') return false;
    if (transactionType === 'location' && item.status !== 'location') return false;
    if (transactionType === 'neuf' && item.status !== 'neuf') return false;

    // City
    if (city && city !== 'all' && item.city.toLowerCase() !== city.toLowerCase()) return false;

    // Property Type
    if (propertyType && propertyType !== 'all' && item.category.toLowerCase() !== propertyType.toLowerCase()) return false;

    // Budget Max
    if (budget && budget !== 'all') {
      const maxBudget = parseInt(budget, 10);
      if (item.priceMAD > maxBudget) return false;
    }

    return true;
  });

  renderProperties(currentProperties);

  // Smooth scroll to catalog
  const catalogSection = document.getElementById('catalogue');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.setSearchType = function(type, element) {
  document.querySelectorAll('.search-tab-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
};

window.filterByCity = function(cityName) {
  const searchCity = document.getElementById('searchCity');
  if (searchCity) {
    searchCity.value = cityName;
  }
  currentProperties = PROPERTIES_DATA.filter(p => p.city.toLowerCase() === cityName.toLowerCase());
  renderProperties(currentProperties);

  const catalogSection = document.getElementById('catalogue');
  if (catalogSection) {
    catalogSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.resetFilters = function() {
  currentProperties = [...PROPERTIES_DATA];
  const searchCity = document.getElementById('searchCity');
  const searchType = document.getElementById('searchType');
  const searchBudget = document.getElementById('searchBudget');
  if (searchCity) searchCity.value = 'all';
  if (searchType) searchType.value = 'all';
  if (searchBudget) searchBudget.value = 'all';

  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  const firstPill = document.querySelector('.filter-pill[data-filter="all"]');
  if (firstPill) firstPill.classList.add('active');

  renderProperties(currentProperties);
};

// ==========================================================================
// 3. PROPERTY DETAIL MODAL
// ==========================================================================
window.openPropertyModal = function(id) {
  const property = PROPERTIES_DATA.find(p => p.id === id);
  if (!property) return;

  const modalBackdrop = document.getElementById('propertyModal');
  const modalContent = document.getElementById('modalContent');
  if (!modalBackdrop || !modalContent) return;

  const whatsappMsg = encodeURIComponent(
    `Bonjour Elkoutami Immobilier, je souhaite planifier une visite privée pour la propriété : ${property.ref} - ${property.title} située à ${property.city} (${property.district}). Prix : ${property.priceFormatted}.`
  );

  modalContent.innerHTML = `
    <div style="position: relative;">
      <img id="modalMainImg" src="${property.images[0]}" alt="${property.title}" class="modal-gallery-main">
      <div style="position: absolute; bottom: 16px; left: 24px; background: rgba(10, 25, 47, 0.85); backdrop-filter: blur(8px); padding: 6px 14px; border-radius: 6px; color: var(--gold-light); font-size: 0.85rem; font-weight: 700;">
        <i class="fa-solid fa-camera"></i> ${property.images.length} Photos Professionnelles
      </div>
    </div>

    <div class="modal-thumbs-row">
      ${property.images.map((img, idx) => `
        <img src="${img}" class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="switchModalImg('${img}', this)" alt="Vue ${idx + 1}">
      `).join('')}
    </div>

    <div class="modal-content-body">
      <div class="modal-header-row">
        <div>
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <span class="card-badge badge-featured">${property.badge || 'Exclusivité'}</span>
            <span class="card-badge badge-status">${property.status.toUpperCase()}</span>
            <span class="card-badge" style="background: #E2E8F0; color: #475569;">REF: ${property.ref}</span>
          </div>
          <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--primary); margin-bottom: 6px;">${property.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            <i class="fa-solid fa-location-dot" style="color: var(--gold);"></i> ${property.district}, ${property.city}, Maroc
          </p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">${property.priceFormatted}</div>
          <div style="color: var(--gold-dark); font-weight: 600; font-size: 0.95rem;">${property.priceEuro}</div>
        </div>
      </div>

      <!-- Quick specs -->
      <div class="card-specs" style="margin-bottom: 24px; padding: 16px;">
        <div class="spec-item">
          <i class="fa-solid fa-ruler-combined" style="font-size: 1.3rem;"></i>
          <span style="font-size: 1rem; margin: 4px 0;">${property.area} m²</span>
          <span class="spec-label">Superficie Habitable</span>
        </div>
        ${property.landArea ? `
        <div class="spec-item">
          <i class="fa-solid fa-tree" style="font-size: 1.3rem;"></i>
          <span style="font-size: 1rem; margin: 4px 0;">${property.landArea.toLocaleString('fr-FR')} m²</span>
          <span class="spec-label">Terrain Arboré</span>
        </div>` : ''}
        <div class="spec-item">
          <i class="fa-solid fa-bed" style="font-size: 1.3rem;"></i>
          <span style="font-size: 1rem; margin: 4px 0;">${property.bedrooms} Chambres</span>
          <span class="spec-label">Toutes en Suites</span>
        </div>
        <div class="spec-item">
          <i class="fa-solid fa-bath" style="font-size: 1.3rem;"></i>
          <span style="font-size: 1rem; margin: 4px 0;">${property.bathrooms} Salles de bain</span>
          <span class="spec-label">Marbre & Zellige</span>
        </div>
      </div>

      <!-- Description -->
      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary); margin-bottom: 10px;">Description du bien</h4>
        <p style="color: var(--text-muted); line-height: 1.8; font-size: 0.95rem;">${property.description}</p>
      </div>

      <!-- Prestations & Equipements -->
      <div style="margin-bottom: 28px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary); margin-bottom: 14px;">Prestations & Caractéristiques de Prestige</h4>
        <div class="modal-features-list">
          ${property.features.map(f => `
            <div class="modal-feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <span>${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Agent Card & Direct Booking -->
      <div class="modal-agent-box">
        <div style="display: flex; align-items: center; gap: 16px;">
          <img src="${property.agent.photo}" alt="${property.agent.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 2px solid var(--gold);">
          <div>
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-dark); font-weight: 700; letter-spacing: 1px;">Conseiller Dédié</div>
            <div style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 700; color: var(--primary);">${property.agent.name}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${property.agent.role} • ${property.city}</div>
          </div>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="tel:${property.agent.phone}" class="btn btn-outline-gold btn-sm">
            <i class="fa-solid fa-phone"></i> Appeler
          </a>
          <a href="https://wa.me/${property.agent.whatsapp}?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
            <i class="fa-brands fa-whatsapp"></i> Visite Privée WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.switchModalImg = function(src, thumbElement) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  if (thumbElement) thumbElement.classList.add('active');
};

window.closePropertyModal = function() {
  const modalBackdrop = document.getElementById('propertyModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// ==========================================================================
// 4. MOROCCAN MORTGAGE SIMULATOR
// ==========================================================================
function initMortgageCalculator() {
  const priceSlider = document.getElementById('calcPrice');
  const downSlider = document.getElementById('calcDownPayment');
  const durationSlider = document.getElementById('calcDuration');
  const rateSlider = document.getElementById('calcRate');

  if (!priceSlider) return;

  const updateCalculator = () => {
    const propertyPrice = parseFloat(priceSlider.value);
    const downPercent = parseFloat(downSlider.value);
    const durationYears = parseInt(durationSlider.value, 10);
    const annualRate = parseFloat(rateSlider.value);

    // Update labels
    document.getElementById('calcPriceDisplay').textContent = propertyPrice.toLocaleString('fr-FR') + ' MAD';
    const downAmount = (propertyPrice * (downPercent / 100));
    document.getElementById('calcDownDisplay').textContent = `${downPercent}% (${downAmount.toLocaleString('fr-FR')} MAD)`;
    document.getElementById('calcDurationDisplay').textContent = `${durationYears} ans (${durationYears * 12} mois)`;
    document.getElementById('calcRateDisplay').textContent = `${annualRate.toFixed(2)}% HT`;

    // Calculate Loan
    const loanAmount = propertyPrice - downAmount;
    const monthlyRate = (annualRate / 100) / 12;
    const totalMonths = durationYears * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      monthlyPayment = loanAmount / totalMonths;
    }

    const totalPaid = (monthlyPayment * totalMonths) + downAmount;
    const totalInterest = (monthlyPayment * totalMonths) - loanAmount;

    // Moroccan Notary and Registration Fees
    // Enregistrement: 4% | Conservation Foncière: 1.5% + 200 DH | Notaire + TVA: ~1.2%
    const registrationTax = propertyPrice * 0.04;
    const landRegistry = (propertyPrice * 0.015) + 200;
    const notaryFees = propertyPrice * 0.012;
    const totalNotaryFees = registrationTax + landRegistry + notaryFees;

    // Update Results
    document.getElementById('calcMonthlyPayment').textContent = Math.round(monthlyPayment).toLocaleString('fr-FR') + ' MAD';
    document.getElementById('calcLoanAmount').textContent = Math.round(loanAmount).toLocaleString('fr-FR') + ' MAD';
    document.getElementById('calcTotalInterest').textContent = Math.round(totalInterest).toLocaleString('fr-FR') + ' MAD';
    document.getElementById('calcNotaryFees').textContent = Math.round(totalNotaryFees).toLocaleString('fr-FR') + ' MAD';
  };

  [priceSlider, downSlider, durationSlider, rateSlider].forEach(slider => {
    slider.addEventListener('input', updateCalculator);
  });

  updateCalculator();
}

// ==========================================================================
// 5. ESTIMATION WIZARD
// ==========================================================================
function initEstimationWizard() {
  const form = document.getElementById('estimationForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = document.getElementById('estCity').value;
    const type = document.getElementById('estType').value;
    const area = parseFloat(document.getElementById('estArea').value) || 200;
    const name = document.getElementById('estName').value || 'Client';

    // Pricing benchmark in Morocco based on city
    let pricePerSqm = 24000;
    if (city === 'Casablanca') pricePerSqm = 26000;
    if (city === 'Marrakech') pricePerSqm = 23000;
    if (city === 'Rabat') pricePerSqm = 25000;
    if (city === 'Tanger') pricePerSqm = 20000;

    const estimatedLow = Math.round((area * pricePerSqm * 0.92) / 50000) * 50000;
    const estimatedHigh = Math.round((area * pricePerSqm * 1.15) / 50000) * 50000;

    const resultBox = document.getElementById('estimationResult');
    if (resultBox) {
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: #F0FDF4; border: 1px solid #86EFAC; border-radius: 12px; padding: 24px; margin-top: 24px; animation: modalSlideUp 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 10px; color: #166534; font-weight: 700; margin-bottom: 8px;">
            <i class="fa-solid fa-circle-check" style="font-size: 1.3rem;"></i>
            <span>Estimation Indicative Préliminaire Établie</span>
          </div>
          <p style="font-size: 0.9rem; color: #374151; margin-bottom: 16px;">
            Merci <strong>${name}</strong>. D'après notre observatoire du marché immobilier marocain de prestige pour un bien de type <strong>${type}</strong> d'environ <strong>${area} m²</strong> à <strong>${city}</strong>, la fourchette vénale estimée est de :
          </p>
          <div style="background: #FFFFFF; padding: 18px; border-radius: 10px; border: 2px solid var(--gold); text-align: center; margin-bottom: 16px;">
            <span style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Fourchette de Valeur</span>
            <div style="font-family: var(--font-serif); font-size: 1.7rem; font-weight: 800; color: var(--primary);">
              ${estimatedLow.toLocaleString('fr-FR')} MAD – ${estimatedHigh.toLocaleString('fr-FR')} MAD
            </div>
            <div style="font-size: 0.82rem; color: var(--gold-dark); margin-top: 4px;">Soit une moyenne de ~${pricePerSqm.toLocaleString('fr-FR')} MAD / m²</div>
          </div>
          <p style="font-size: 0.82rem; color: #6B7280; margin-bottom: 16px;">
            <i class="fa-solid fa-shield-halved" style="color: var(--gold);"></i> Un expert assermenté Elkoutami Immobilier prendra contact avec vous sous 24h pour affiner cette valeur selon les prestations architecturales exactes, l'orientation et le titre foncier.
          </p>
          <a href="https://wa.me/212661123456?text=${encodeURIComponent(`Bonjour, je souhaite un audit d'estimation physique pour mon bien (${type} de ${area} m² à ${city}).`)}" target="_blank" class="btn btn-gold btn-sm" style="width: 100%;">
            <i class="fa-brands fa-whatsapp"></i> Réserver l'audit d'estimation physique offert
          </a>
        </div>
      `;
      resultBox.scrollIntoView({ behavior: 'smooth' });
    }
    showToast('Estimation calculée avec succès !');
  });
}

// ==========================================================================
// 6. FAVORITES SYSTEM
// ==========================================================================
function getFavorites() {
  try {
    const raw = localStorage.getItem('elkoutami_favorites');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favs) {
  try {
    localStorage.setItem('elkoutami_favorites', JSON.stringify(favs));
    updateFavoritesCounter();
  } catch (e) {}
}

function updateFavoritesCounter() {
  const favs = getFavorites();
  const counter = document.getElementById('favoritesCount');
  if (counter) {
    counter.textContent = favs.length;
    counter.style.display = favs.length > 0 ? 'flex' : 'none';
  }
}

window.toggleFavorite = function(id, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  let favs = getFavorites();
  const idx = favs.indexOf(id);

  if (idx > -1) {
    favs.splice(idx, 1);
    showToast('Propriété retirée de vos favoris');
  } else {
    favs.push(id);
    showToast('Propriété enregistrée dans vos favoris !');
  }

  saveFavorites(favs);
  renderProperties(currentProperties);
  renderFavoritesDrawer();
};

window.openFavoritesDrawer = function() {
  renderFavoritesDrawer();
  const drawer = document.getElementById('favoritesDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer && backdrop) {
    backdrop.classList.add('active');
    drawer.classList.add('open');
  }
};

window.closeFavoritesDrawer = function() {
  const drawer = document.getElementById('favoritesDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
  }
};

function renderFavoritesDrawer() {
  const container = document.getElementById('drawerItemsList');
  if (!container) return;

  const favIds = getFavorites();
  const favProperties = PROPERTIES_DATA.filter(p => favIds.includes(p.id));

  if (favProperties.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 2.5rem; color: #CBD5E1; margin-bottom: 14px;"></i>
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--primary); margin-bottom: 6px;">Aucun bien enregistré</h4>
        <p style="font-size: 0.85rem;">Cliquez sur le cœur d'une propriété pour la retrouver facilement ici.</p>
      </div>
    `;
    const shareBtn = document.getElementById('shareFavBtn');
    if (shareBtn) shareBtn.style.display = 'none';
    return;
  }

  const shareBtn = document.getElementById('shareFavBtn');
  if (shareBtn) shareBtn.style.display = 'block';

  container.innerHTML = favProperties.map(p => `
    <div class="drawer-item">
      <img src="${p.images[0]}" alt="${p.title}" class="drawer-item-img">
      <div class="drawer-item-info">
        <div class="drawer-item-title">${p.title}</div>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 2px;">
          <i class="fa-solid fa-location-dot" style="color: var(--gold);"></i> ${p.city} (${p.ref})
        </div>
        <div class="drawer-item-price">${p.priceFormatted}</div>
        <button class="btn btn-outline-gold btn-sm" style="padding: 4px 10px; font-size: 0.75rem; margin-top: 6px;" onclick="closeFavoritesDrawer(); openPropertyModal(${p.id})">
          Consulter
        </button>
      </div>
      <button class="drawer-remove-btn" onclick="toggleFavorite(${p.id}, event)" title="Supprimer">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');
}

window.shareFavoritesWhatsApp = function() {
  const favIds = getFavorites();
  const favProperties = PROPERTIES_DATA.filter(p => favIds.includes(p.id));
  if (favProperties.length === 0) return;

  let text = `Bonjour Elkoutami Immobilier, voici la sélection de biens de prestige qui m'intéressent particulièrement sur votre site :\n\n`;
  favProperties.forEach((p, idx) => {
    text += `${idx + 1}. [${p.ref}] ${p.title} à ${p.city} - ${p.priceFormatted}\n`;
  });
  text += `\nPourriez-vous me contacter pour organiser des visites ou me transmettre les dossiers complets ? Merci.`;

  window.open(`https://wa.me/212661123456?text=${encodeURIComponent(text)}`, '_blank');
};

function initFavoritesSystem() {
  updateFavoritesCounter();
}

// ==========================================================================
// 7. LEAFLET MAP (MAROC)
// ==========================================================================
let mapInstance = null;

function initLeafletMap() {
  const mapElement = document.getElementById('propertiesMap');
  if (!mapElement || typeof L === 'undefined') return;

  // Initialize map centered on Morocco (between Casablanca and Marrakech)
  mapInstance = L.map('propertiesMap', {
    scrollWheelZoom: false
  }).setView([32.5, -7.5], 7);

  // CartoDB Positron / OSM tiles for a clean luxury look
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CartoDB</a> &copy; OpenStreetMap',
    maxZoom: 19
  }).addTo(mapInstance);

  // Custom Gold Marker Icon
  const goldIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="background: #0A192F; border: 2px solid #C5A880; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); color: #C5A880; font-size: 0.95rem;">
        <i class="fa-solid fa-gem"></i>
      </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18]
  });

  PROPERTIES_DATA.forEach(property => {
    if (property.coords && property.coords.lat && property.coords.lng) {
      const marker = L.marker([property.coords.lat, property.coords.lng], { icon: goldIcon }).addTo(mapInstance);

      const popupContent = `
        <div style="width: 220px; font-family: 'Plus Jakarta Sans', sans-serif;">
          <img src="${property.images[0]}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
          <div style="font-size: 0.72rem; color: #C5A880; font-weight: 700; text-transform: uppercase;">${property.city} • ${property.district}</div>
          <div style="font-weight: 700; font-size: 0.9rem; color: #0A192F; line-height: 1.25; margin: 3px 0 6px;">${property.title}</div>
          <div style="font-weight: 800; font-size: 0.95rem; color: #0A192F;">${property.priceFormatted}</div>
          <button onclick="openPropertyModal(${property.id})" style="width: 100%; margin-top: 8px; padding: 6px 10px; background: #0A192F; color: #FFFFFF; border: none; border-radius: 4px; font-size: 0.75rem; font-weight: 600; cursor: pointer;">
            Consulter le bien
          </button>
        </div>
      `;
      marker.bindPopup(popupContent);
    }
  });
}

// ==========================================================================
// 8. FAQ ACCORDION
// ==========================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// ==========================================================================
// 9. TOAST NOTIFICATION
// ==========================================================================
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

