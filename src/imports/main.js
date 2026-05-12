/* =========================================================================
   Humberto Ranzuglia S.R.L. — main.js
   Vanilla JS — zero dependencies
   ========================================================================= */
(function () {
  'use strict';

  const WA_NUMBER = '5492923431570';

  const WA_SVG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M20 4A11.9 11.9 0 0 0 1.6 18.5L0 24l5.7-1.5A11.9 11.9 0 0 0 23.9 12 11.9 11.9 0 0 0 20 4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.4.9.9-3.3-.2-.4A9.8 9.8 0 1 1 12 21.8zm5.6-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>';

  const CATEGORY_LABELS = {
    'tractor-pauny': 'Tractores Pauny',
    'tractor-gravo': 'Tractores Gravo',
    'sembradora':    'Sembradoras',
    'acoplado':      'Acoplados',
    'implemento':    'Implementos',
    'vial':          'Equipos Viales',
  };

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll('.js-nav');
  const sections = document.querySelectorAll('section[id]');

  function setActive(id) {
    navLinks.forEach(l => l.classList.toggle('is-active', l.dataset.target === id));
  }

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = document.getElementById('topbar')?.offsetHeight ?? 90;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    setActive(id);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      scrollTo(link.dataset.target);
      closeMobileNav();
    });
  });

  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: '-90px 0px -60% 0px', threshold: 0 });

  sections.forEach(s => spy.observe(s));

  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    hamburger?.classList.remove('is-open');
    hamburger?.setAttribute('aria-expanded', 'false');
    mobileNav?.classList.remove('is-open');
    mobileNav?.setAttribute('aria-hidden', 'true');
  }

  hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(open));
    mobileNav?.classList.toggle('is-open', open);
    mobileNav?.setAttribute('aria-hidden', String(!open));
  });

  document.addEventListener('click', e => {
    if (!hamburger?.contains(e.target) && !mobileNav?.contains(e.target)) closeMobileNav();
  });

  const animObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        animObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  function animateCards() {
    document.querySelectorAll('.products__grid .product-card').forEach((el, i) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(18px)';
      el.style.transition = `opacity 380ms ease ${(i % 6) * 55}ms, transform 380ms ease ${(i % 6) * 55}ms`;
      animObs.observe(el);
    });
    document.querySelectorAll('.financing-card, .brands__cell, .nosotros__stat, .impl-card').forEach((el, i) => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(18px)';
      el.style.transition = `opacity 380ms ease ${(i % 6) * 55}ms, transform 380ms ease ${(i % 6) * 55}ms`;
      animObs.observe(el);
    });
  }

  function imgPlaceholderClass(p) {
    const m = p.marca.toLowerCase();
    if (m.includes('gravo'))   return 'gravo';
    if (m.includes('syl'))     return 'syl';
    if (m.includes('belen'))   return 'belen';
    if (m.includes('pampero')) return 'pampero';
    return 'fallback';
  }

  function buildCardHTML(p) {
    const tagsHtml = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
    const imgHtml  = p.imagen
      ? `<div class="product-card__img"><img src="${p.imagen}" alt="${p.nombre}" loading="lazy"></div>`
      : `<div class="product-card__img product-card__img--${imgPlaceholderClass(p)}"><span>${p.marca}</span></div>`;
    const badgeLabel = p.estado === 'nuevo' ? 'Nuevo' : 'Usado';

    return `<article class="product-card js-product" data-cat="${p.categoria}" data-id="${p.id}" tabindex="0" role="button">
      <div class="product-card__badge product-card__badge--${p.estado}">${badgeLabel}</div>
      ${imgHtml}
      <div class="product-card__body">
        <div class="product-card__brand">${p.marca}</div>
        <h3 class="product-card__name">${p.nombre}</h3>
        <div class="product-card__tags">${tagsHtml}</div>
        <p class="product-card__desc">${p.descripcion || ''}</p>
        <div class="product-card__footer">
          <span class="product-card__price">Consultar precio</span>
          <div class="product-card__actions">
            <button class="btn-card-wa js-wa-product" data-model="${p.marca} ${p.nombre}" aria-label="Consultar por WhatsApp">${WA_SVG}</button>
            <button class="btn-card-detail">Ver ficha →</button>
          </div>
        </div>
      </div>
    </article>`;
  }

  function buildSelectOptions() {
    const sel = document.getElementById('f-tipo');
    if (!sel || typeof CATALOG === 'undefined') return;

    const groups = {};
    CATALOG.forEach(p => {
      if (!groups[p.categoria]) groups[p.categoria] = [];
      groups[p.categoria].push(p);
    });

    const catOrder = ['tractor-pauny', 'tractor-gravo', 'sembradora', 'acoplado', 'implemento', 'vial'];
    let html = '<option value="">— Seleccioná una categoría —</option>';
    catOrder.forEach(cat => {
      if (!groups[cat]) return;
      html += `<optgroup label="${CATEGORY_LABELS[cat] || cat}">`;
      groups[cat].forEach(p => {
        const label = p.hp ? `${p.marca} ${p.nombre} (${p.hp})` : `${p.marca} ${p.nombre}`;
        html += `<option value="${p.id}">${label}</option>`;
      });
      html += '</optgroup>';
    });
    html += '<option value="usado">Maquinaria usada</option>';
    html += '<option value="repuesto">Repuestos</option>';
    html += '<option value="otro">Otro / consultar</option>';
    sel.innerHTML = html;
  }

  function renderCatalog() {
    if (typeof CATALOG === 'undefined') return;

    const nuevosGrid = document.getElementById('nuevosGrid');
    const usadosGrid = document.getElementById('usadosGrid');
    const usedEmpty  = document.getElementById('usadosEmpty');

    const nuevos = CATALOG.filter(p => p.estado === 'nuevo');
    const usados = CATALOG.filter(p => p.estado === 'usado');

    if (nuevosGrid) nuevosGrid.innerHTML = nuevos.map(buildCardHTML).join('');
    if (usadosGrid) usadosGrid.innerHTML = usados.map(buildCardHTML).join('');
    if (usedEmpty)  usedEmpty.hidden     = usados.length > 0;

    buildSelectOptions();
    animateCards();
  }

  renderCatalog();

  const tabs       = document.querySelectorAll('.catalog__tab');
  const panels     = document.querySelectorAll('.catalog__panel');
  const filterBtns = document.querySelectorAll('.filter');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => {
        t.classList.toggle('is-active', t.dataset.tab === target);
        t.setAttribute('aria-selected', String(t.dataset.tab === target));
      });
      panels.forEach(p => {
        const active = p.dataset.panel === target;
        p.classList.toggle('is-active', active);
        p.hidden = !active;
      });
      resetFilters();
    });
  });

  function resetFilters() {
    filterBtns.forEach(b => b.classList.toggle('is-active', b.dataset.cat === 'todos'));
    document.querySelectorAll('.js-product').forEach(c => c.classList.remove('is-hidden'));
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      document.querySelectorAll('.js-product').forEach(card => {
        card.classList.toggle('is-hidden', cat !== 'todos' && card.dataset.cat !== cat);
      });
    });
  });

  ['nuevosGrid', 'usadosGrid'].forEach(gridId => {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.addEventListener('click', e => {
      const waBtn = e.target.closest('.btn-card-wa');
      if (waBtn) {
        e.stopPropagation();
        const model = waBtn.dataset.model ?? 'maquinaria';
        const msg = encodeURIComponent(`Hola, quiero consultar sobre el modelo ${model}`);
        window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener');
        return;
      }
      const card = e.target.closest('.js-product');
      if (card) openModal(card.dataset.id);
    });

    grid.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.js-product');
        if (card) { e.preventDefault(); openModal(card.dataset.id); }
      }
    });
  });

  const modal        = document.getElementById('productModal');
  const modalClose   = document.getElementById('modalClose');
  const modalMedia   = document.getElementById('modalMedia');
  const modalImg     = document.getElementById('modalImg');
  const modalBrand   = document.getElementById('modalBrand');
  const modalName    = document.getElementById('modalName');
  const modalDesc    = document.getElementById('modalDesc');
  const modalSpecs   = document.getElementById('modalSpecs');
  const modalCtaForm = document.getElementById('modalCtaForm');
  const modalCtaWa   = document.getElementById('modalCtaWa');

  function specRow(lbl, val) {
    return `<div class="spec"><div class="spec__lbl">${lbl}</div><div class="spec__val">${val}</div></div>`;
  }

  function openModal(id) {
    if (typeof CATALOG === 'undefined' || !modal) return;
    const p = CATALOG.find(x => x.id === id);
    if (!p) return;

    if (p.imagen) {
      modalImg.src = p.imagen;
      modalImg.alt = p.nombre;
      modalMedia.style.display = '';
    } else {
      modalMedia.style.display = 'none';
    }

    modalBrand.textContent = p.marca;
    modalName.textContent  = p.nombre;
    modalDesc.textContent  = p.descripcion || '';
    modalSpecs.innerHTML   =
      specRow('Potencia', p.hp     || '—') +
      specRow('Peso',     p.peso   || '—') +
      specRow('Cabina',   p.cabina || '—') +
      specRow('Origen',   p.origen || '—');

    const msg = encodeURIComponent(`Hola, quiero consultar sobre el modelo ${p.nombre}`);
    modalCtaWa.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose?.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal && !modal.hidden) closeModal(); });

  modalCtaForm?.addEventListener('click', () => {
    const nombre = modalName?.textContent ?? '';
    closeModal();
    scrollTo('contacto');
    setTimeout(() => {
      const sel = document.getElementById('f-tipo');
      if (!sel || typeof CATALOG === 'undefined') return;
      const p = CATALOG.find(x => x.nombre === nombre);
      if (p) {
        sel.value = p.id;
      } else {
        const opt = Array.from(sel.options).find(o => o.text.includes(nombre));
        if (opt) sel.value = opt.value;
      }
    }, 600);
  });

  const contactForm    = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  const formReset      = document.getElementById('formReset');

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.hidden    = true;
    contactSuccess.hidden = false;
  });

  formReset?.addEventListener('click', () => {
    contactForm?.reset();
    contactForm.hidden    = false;
    contactSuccess.hidden = true;
  });

})();