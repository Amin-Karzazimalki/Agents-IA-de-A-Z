// Mobile menu
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileBtn.innerHTML = mobileMenu.classList.contains('hidden')
    ? '<i class="fa-solid fa-bars"></i>'
    : '<i class="fa-solid fa-xmark"></i>';
});

// Scroll smooth
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// Copy buttons
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.previousElementSibling?.querySelector('code') || btn.previousElementSibling;
    if (!target) return;
    
    navigator.clipboard.writeText(target.textContent.trim());
    const original = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => btn.textContent = original, 1800);
  });
});

// Simulator (simplifié ici – tu peux le compléter)
const generateBtn = document.getElementById('generate-btn');
const codeOutput = document.getElementById('generated-code');
const codeBlock = document.getElementById('code-output');

generateBtn?.addEventListener('click', () => {
  const framework = document.getElementById('framework')?.value || 'LangChain';
  
  let code = `from langchain_openai import ChatOpenAI\n`;
  code    += `# Your ${framework} agent code will appear here...\n`;
  code    += `print("Hello from your new AI Agent!")`;
  
  codeBlock.textContent = code;
  codeOutput.classList.remove('hidden');
  codeOutput.scrollIntoView({ behavior: 'smooth' });
});

// Tu peux ajouter le quiz ici aussi comme dans la version précédente
