// Small interactions: navbar scroll fade, FAQ accordion, pricing toggle
document.addEventListener('DOMContentLoaded', () => {
  // Navbar fade/blur on scroll (desktop)
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if(!navbar) return;
    if(window.scrollY > 10){
      navbar.classList.add('scrolled');
    }else{
      navbar.classList.remove('scrolled');
    }
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // FAQ accordion
  document.querySelectorAll('.item .q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.item');
      const expanded = item.getAttribute('aria-expanded') === 'true';
      item.setAttribute('aria-expanded', expanded ? 'false' : 'true');

      const answer = item.querySelector('.a');
      if(answer){
        answer.hidden = expanded;
      }

      // rotate arrow is handled via CSS [aria-expanded="true"]
    });
  });

  // Pricing toggle
  const monthlyBtn = document.getElementById('toggle-monthly');
  const yearlyBtn = document.getElementById('toggle-yearly');
  const priceEls = document.querySelectorAll('[data-price]');

  function setBilling(mode){
    // mode: 'monthly' | 'yearly'
    if(monthlyBtn && yearlyBtn){
      monthlyBtn.setAttribute('aria-pressed', String(mode === 'monthly'));
      yearlyBtn.setAttribute('aria-pressed', String(mode === 'yearly'));
    }
    priceEls.forEach(el => {
      const m = el.getAttribute('data-monthly');
      const y = el.getAttribute('data-yearly');
      el.textContent = (mode === 'yearly' ? y : m);
    });
    // Persist preference for the session
    try{ sessionStorage.setItem('billing', mode); }catch(e){}
  }

  if(monthlyBtn && yearlyBtn){
    monthlyBtn.addEventListener('click', () => setBilling('monthly'));
    yearlyBtn.addEventListener('click', () => setBilling('yearly'));
    // Restore preference
    let pref = null;
    try{ pref = sessionStorage.getItem('billing'); }catch(e){}
    setBilling(pref || 'monthly');
  }

  // Make entire FAQ item header keyboard-accessible
  document.querySelectorAll('.item .q').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        el.click();
      }
    });
  });
});