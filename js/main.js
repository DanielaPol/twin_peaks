(() => {
  const message = document.querySelector('.owl-message');
  document.querySelectorAll('.owl-button').forEach(button => button.addEventListener('click', () => {
    document.body.classList.toggle('red-room');
    if (message) { message.textContent = 'Los búhos no son lo que parecen.'; message.classList.add('visible'); clearTimeout(window.owlTimer); window.owlTimer = setTimeout(() => message.classList.remove('visible'), 3500); }
  }));

  document.querySelectorAll('.social-icon').forEach(icon => icon.addEventListener('click', event => event.preventDefault()));

  document.querySelectorAll('.nav-item.has-submenu').forEach(item => {
    const toggle = item.querySelector('.nav-toggle');
    const submenu = item.querySelector('.nav-submenu');
    if (!toggle || !submenu) return;
    toggle.addEventListener('click', event => {
      event.stopPropagation();
      const open = toggle.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.nav-toggle[aria-expanded="true"]').forEach(other => { if (other !== toggle) other.setAttribute('aria-expanded', 'false'); });
      toggle.setAttribute('aria-expanded', String(!open));
    });
  });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-item.has-submenu')) document.querySelectorAll('.nav-toggle[aria-expanded="true"]').forEach(toggle => toggle.setAttribute('aria-expanded', 'false')); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') document.querySelectorAll('.nav-toggle[aria-expanded="true"]').forEach(toggle => toggle.setAttribute('aria-expanded', 'false')); });

  const filters = document.querySelectorAll('.filter');
  filters.forEach(filter => filter.addEventListener('click', () => { filters.forEach(item => item.classList.remove('active')); filter.classList.add('active'); document.querySelectorAll('.gallery-item').forEach(item => item.classList.toggle('hidden', filter.dataset.filter !== 'all' && item.dataset.category !== filter.dataset.filter)); }));

  document.querySelectorAll('.gallery-item img').forEach(image => {
    const markLoaded = () => image.closest('.gallery-item').classList.add('loaded');
    if (image.complete) markLoaded(); else image.addEventListener('load', markLoaded);
  });

  const modal = document.querySelector('.modal');
  if (modal) {
    const modalImage = modal.querySelector('img');
    const caption = modal.querySelector('figcaption');
    const counter = modal.querySelector('.modal-counter');
    const prevButton = modal.querySelector('.modal-prev');
    const nextButton = modal.querySelector('.modal-next');
    let currentIndex = 0;
    const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };
    const visibleItems = () => Array.from(document.querySelectorAll('.gallery-item')).filter(item => !item.classList.contains('hidden'));
    const show = index => {
      const items = visibleItems();
      if (!items.length) return;
      currentIndex = (index + items.length) % items.length;
      const item = items[currentIndex];
      const image = item.querySelector('img');
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      caption.querySelector('.modal-caption-text').textContent = item.dataset.caption;
      if (counter) counter.textContent = `${currentIndex + 1} / ${items.length}`;
    };
    document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
      const items = visibleItems();
      show(items.indexOf(item));
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      modal.querySelector('.modal-close').focus();
    }));
    if (prevButton) prevButton.addEventListener('click', () => show(currentIndex - 1));
    if (nextButton) nextButton.addEventListener('click', () => show(currentIndex + 1));
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', event => { if (event.target === modal) close(); });
    document.addEventListener('keydown', event => {
      if (!modal.classList.contains('open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') show(currentIndex - 1);
      if (event.key === 'ArrowRight') show(currentIndex + 1);
    });
  }

  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => { event.preventDefault(); form.querySelectorAll('.field-error').forEach(error => error.remove()); let valid = true; const fields = {name:'Ingresá tu nombre.',email:'Ingresá un correo electrónico válido.',subject:'Ingresá un asunto.',message:'Escribí un mensaje.'}; Object.entries(fields).forEach(([name, error]) => { const input = form.elements[name]; const invalid = !input.value.trim() || (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)); if (invalid) { valid = false; input.setAttribute('aria-invalid', 'true'); const note = document.createElement('p'); note.className = 'field-error'; note.textContent = error; input.after(note); } else input.removeAttribute('aria-invalid'); }); const status = form.querySelector('.form-status'); if (valid) { status.textContent = 'Gracias. Tu mensaje fue validado correctamente (demostración local).'; form.reset(); } else { status.textContent = 'Revisá los campos señalados para continuar.'; form.querySelector('[aria-invalid="true"]').focus(); } });

  const returnSection = document.querySelector('#the-return');
  if (returnSection) { let timer; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting && entry.intersectionRatio > .72) timer = setTimeout(() => { returnSection.classList.add('awakened'); setTimeout(() => returnSection.classList.remove('awakened'), 5500); }, 2800); else clearTimeout(timer); }), {threshold:[.72]}); observer.observe(returnSection); }

  const revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('reveal-visible'); revealObserver.unobserve(entry.target); } }), {threshold:.18});
    revealTargets.forEach(target => revealObserver.observe(target));
  }

  const totop = document.querySelector('.totop-button');
  if (totop) {
    window.addEventListener('scroll', () => totop.classList.toggle('visible', window.scrollY > 600));
    totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
})();
