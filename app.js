// Small interactions and motion effects
document.addEventListener('DOMContentLoaded', () => {
  // Navbar fade/blur on scroll (desktop)
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if(!navbar) return;
    if(window.scrollY > 10){ navbar.classList.add('scrolled'); } else { navbar.classList.remove('scrolled'); }
  };
  document.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // FAQ accordion
  document.querySelectorAll('.item .q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.item');
      const expanded = item.getAttribute('aria-expanded') === 'true';
      item.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      const answer = item.querySelector('.a'); if(answer){ answer.hidden = expanded; }
    });
    btn.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); btn.click(); } });
  });

  // Pricing toggle
  const monthlyBtn = document.getElementById('toggle-monthly');
  const yearlyBtn = document.getElementById('toggle-yearly');
  const priceEls = document.querySelectorAll('[data-price]');
  function setBilling(mode){
    if(monthlyBtn && yearlyBtn){
      monthlyBtn.setAttribute('aria-pressed', String(mode === 'monthly'));
      yearlyBtn.setAttribute('aria-pressed', String(mode === 'yearly'));
    }
    priceEls.forEach(el => { el.textContent = (mode === 'yearly' ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly')); });
    try{ sessionStorage.setItem('billing', mode);}catch(e){}
  }
  if(monthlyBtn && yearlyBtn){
    monthlyBtn.addEventListener('click', () => setBilling('monthly'));
    yearlyBtn.addEventListener('click', () => setBilling('yearly'));
    let pref = null; try{ pref = sessionStorage.getItem('billing'); }catch(e){}
    setBilling(pref || 'monthly');
  }

  // ===== Hero Canvas FX: flowing neon curves (lightweight) =====
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.getElementById('fx');
  if (canvas && !prefersReduce) {
    const ctx = canvas.getContext('2d');
    function size(){ 
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    size();
    window.addEventListener('resize', size);

    const colors = ['rgba(157,180,255,0.35)','rgba(47,128,237,0.35)','rgba(28,59,107,0.35)'];
    let t = 0;
    const curves = Array.from({length: 3}, (_,i)=> ({ amp: 60 + i*22, freq: 0.0018 + i*0.0007, speed: 0.015 + i*0.004, offset: i*1.3 }));
    function draw(){
      t += 1;
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0,0,w,h);
      // dark wash
      const g = ctx.createLinearGradient(0,0,w,h);
      g.addColorStop(0,'rgba(20,30,48,0.35)'); g.addColorStop(1,'rgba(9,11,16,0.25)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

      curves.forEach((c,i)=>{
        ctx.beginPath();
        const y0 = h*0.42 + Math.sin((t*c.speed)/20 + c.offset)*10;
        ctx.moveTo(0, y0);
        for(let x=0; x<=w; x+=8){
          const y = y0 + Math.sin(x*c.freq + t*c.speed + c.offset)*c.amp * Math.sin((t*0.003)+(i*0.4));
          ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2.2 + i*0.7;
        ctx.strokeStyle = colors[i % colors.length];
        ctx.shadowColor = 'rgba(47,128,237,0.35)';
        ctx.shadowBlur = 12 + i*10;
        ctx.stroke(); ctx.shadowBlur = 0;
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // ===== Magnetic / tilt buttons =====
  document.querySelectorAll('[data-magnetic="true"]').forEach(el => {
    const strength = 18;
    function move(e){
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width/2;
      const relY = e.clientY - rect.top - rect.height/2;
      el.style.transform = `translate(${relX/strength}px, ${relY/strength}px)`;
    }
    function leave(){ el.style.transform = ''; }
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    el.addEventListener('touchend', leave, {passive:true});
  });

  // ===== Reveal on scroll =====
  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
    }, { threshold:.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
});