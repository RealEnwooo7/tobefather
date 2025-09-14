// Burger menu
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
if (burger) burger.addEventListener('click', () => {
const open = nav.classList.toggle('open');
burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});


// Lead form (fake success)
const form = document.getElementById('lead');
if (form) form.addEventListener('submit', (e) => {
e.preventDefault();
document.getElementById('lead-status').hidden = false;
});


// Cookie banner
(function(){
if (!localStorage.getItem('tbf_cookies_ok')) {
const el = document.createElement('div');
el.className = 'cookie';
el.innerHTML = `<p>Nous utilisons des cookies d’analytics anonymisés. <a href=\"#confidentialite\">En savoir plus</a>.</p>
<div class=\"row\">
<button id=\"ck-yes\">Accepter</button>
<button id=\"ck-no\">Refuser</button>
</div>`;
document.body.appendChild(el);
el.querySelector('#ck-yes').onclick = ()=>{ localStorage.setItem('tbf_cookies_ok','1'); el.remove(); };
el.querySelector('#ck-no').onclick = ()=> el.remove();
}
})();


// Back to top
const topBtn = document.createElement('a');
Object.assign(topBtn, { href:'#', className:'top', ariaLabel:'Revenir en haut', textContent:'↑' });
document.body.appendChild(topBtn);
window.addEventListener('scroll',()=>{
if (scrollY > 600) topBtn.classList.add('show'); else topBtn.classList.remove('show');
});


// FAQ JSON-LD (condensé)
const faq = [
['Quand sortira l’application ?','Juillet 2026.'],
['iOS & Android ?','Oui (App Store & Google Play).'],
['Version gratuite ?','Oui, essentiels + IA (5 questions/jour).'],
['Prix premium ?','4,39 € / mois.']
].map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}));
const faqScript = document.getElementById('faq-jsonld');
faqScript.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq});