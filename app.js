
document.addEventListener('DOMContentLoaded', () => {
  // Burger
  const burger = document.querySelector('.burger'); const menu = document.getElementById('menu');
  if(burger && menu){ burger.addEventListener('click', ()=>{ const open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-hidden', String(!open)); }); }

  // FAQ accordion
  document.querySelectorAll('.item .q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.item'); const expanded = item.getAttribute('aria-expanded') === 'true';
      item.setAttribute('aria-expanded', expanded ? 'false' : 'true'); const answer = item.querySelector('.a'); if(answer){ answer.hidden = expanded; }
    });
    btn.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); btn.click(); } });
  });

  // Pricing segmented toggle (if present)
  const monthlyBtn = document.getElementById('toggle-monthly');
  const yearlyBtn = document.getElementById('toggle-yearly');
  const priceEls = document.querySelectorAll('[data-price]');
  function setBilling(mode){
    if(monthlyBtn && yearlyBtn){ monthlyBtn.setAttribute('aria-pressed', String(mode === 'monthly')); yearlyBtn.setAttribute('aria-pressed', String(mode === 'yearly')); }
    priceEls.forEach(el => { el.textContent = (mode === 'yearly' ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly')); });
    try{ sessionStorage.setItem('billing', mode);}catch(e){}
  }
  if(monthlyBtn && yearlyBtn){
    monthlyBtn.addEventListener('click', () => setBilling('monthly'));
    yearlyBtn.addEventListener('click', () => setBilling('yearly'));
    let pref = null; try{ pref = sessionStorage.getItem('billing'); }catch(e){}; setBilling(pref || 'monthly');
  }
});
