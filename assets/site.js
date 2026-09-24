const header=document.querySelector('.site-header');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const languageButton=document.querySelector('.language');
const translated=document.querySelectorAll('[data-en][data-es]');
let language='en';

window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>24),{passive:true});
menuButton.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
}));

languageButton.addEventListener('click',()=>{
  language=language==='en'?'es':'en';
  document.documentElement.lang=language;
  translated.forEach(node=>node.textContent=node.dataset[language]);
  languageButton.textContent=language==='en'?'ES':'EN';
  languageButton.setAttribute('aria-label',language==='en'?'Cambiar a español':'Switch to English');
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));
document.getElementById('year').textContent=new Date().getFullYear();
