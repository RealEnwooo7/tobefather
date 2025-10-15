document.addEventListener('DOMContentLoaded',()=>{
  const lsw=document.querySelector('.liquid-switch');
  if(lsw){
    const mBtn=lsw.querySelector('[data-mode="monthly"]');
    const yBtn=lsw.querySelector('[data-mode="yearly"]');
    function setMode(mode){
      lsw.dataset.mode=mode;
      mBtn.setAttribute('aria-pressed', String(mode==='monthly'));
      yBtn.setAttribute('aria-pressed', String(mode==='yearly'));
      lsw.classList.add('bounce'); setTimeout(()=>lsw.classList.remove('bounce'),180);
      document.querySelectorAll('[data-price]').forEach(el=>{
        el.textContent=(mode==='yearly')?el.getAttribute('data-yearly'):el.getAttribute('data-monthly');
      });
      try{sessionStorage.setItem('billing',mode);}catch(e){}
    }
    mBtn.addEventListener('click',()=>setMode('monthly'));
    yBtn.addEventListener('click',()=>setMode('yearly'));
    let pref=null; try{pref=sessionStorage.getItem('billing');}catch(e){}
    setMode(pref||'monthly');
  }
});