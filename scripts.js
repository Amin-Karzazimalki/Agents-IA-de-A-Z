// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('input[name="lang"]');
  
  function updateLanguage(lang) {
    document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
    document.querySelectorAll('nav ul').forEach(ul => {
      ul.style.display = ul.getAttribute('data-lang') === lang ? 'flex' : 'none';
    });
    document.querySelectorAll('footer p').forEach(p => {
      p.style.display = p.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
  }

  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  });

  // Initialisation
  const initialLang = document.querySelector('input[name="lang"]:checked').value;
  updateLanguage(initialLang);
});
