const projectData = [
 {index:'01',title:'Salesforce CRM Quality Engineering',client:'Charles Schwab Bank',region:'US',sector:'Financial Services',summary:'Quality engineering for a Salesforce CRM application, covering Classic and Lightning interface testing, BDD Cucumber-based automation and regression testing to reduce repetitive manual execution.',overview:'Quality engineering engagement supporting a Salesforce CRM implementation at Charles Schwab Bank. The work centred on validating application behaviour across both the Classic and Lightning experiences, building maintainable BDD Cucumber automation, and strengthening regression coverage so releases could ship with confidence while reducing repetitive manual test execution.',focus:['Salesforce CRM application testing across Classic and Lightning interfaces.','BDD Cucumber-based test automation for core business scenarios.','Regression testing designed to reduce repetitive manual execution.','Defect triage, retesting and release-readiness support.'],tech:['Salesforce','BDD Cucumber','RAD']},
 {index:'02',title:'Customer Data Validation',client:'Thames Water',region:'UK',sector:'Utilities',summary:'Customer data validation — verifying files, formulas and metrics to support the accurate presentation of customer information.',overview:'A data-quality focused engagement centred on validating customer data and the calculations behind it. The work involved verifying customer files, formulas and reported metrics using SQL and Azure-based tooling.',focus:['Validation of customer data files for accuracy and completeness.','Verification of files, formulas and reported metrics.','Supporting the accurate presentation of customer information.','Data validation and defect reporting within Azure DevOps workflows.'],tech:['Azure','Azure DevOps','SQL']},
 {index:'03',title:'Customer Services & Application Validation',client:'Thames Water',region:'UK',sector:'Utilities',summary:'Connected customer-services workstreams spanning application functionality, customer prioritisation, data validation and reporting workflows.',overview:'A portfolio of connected workstreams supporting customer services, including vulnerability programme workflows, GIS-based risk assessment and DTEX data/reporting workflows.',focus:['Application functionality validation for customer services operations.','Vulnerability Programme and customer prioritisation support.','GIS risk assessment workflows.','DTEX data and reporting workflows.','Test management and execution tracking in HP ALM.'],tech:['C4C','HP ALM','SAP BW','SAP PO']},
 {index:'04',title:'Salesforce CPQ & Contract Lifecycle Management',client:'Vertex Inc.',region:'US',sector:'Enterprise Applications',summary:'Quality engineering for Salesforce CPQ and contract lifecycle management, focused on product configuration scenarios, tax calculations and pricing accuracy.',overview:'The focus was validating product configuration scenarios, tax calculations and pricing accuracy alongside contract-related application validation, including signing flows.',focus:['Product configuration scenario testing in Salesforce CPQ.','Validation of tax calculations and pricing accuracy.','Salesforce CPQ and contract-related application validation.','Contract lifecycle management flows, including DocuSign integration.'],tech:['Salesforce CPQ','Salesforce CLM','DocuSign']},
 {index:'05',title:'Commercial Banking & Loan Origination',client:'Wells Fargo',region:'US',sector:'Banking',summary:'Quality engineering for Salesforce nCino — covering loan origination lifecycle workflows, document management and business intelligence/reporting.',overview:'Quality engineering for the Salesforce nCino platform within commercial banking, covering the loan origination lifecycle, document management and business intelligence/reporting outputs.',focus:['Salesforce nCino application quality across commercial banking workflows.','Loan origination lifecycle workflow validation.','Document management and reporting outputs.','Test design and execution tracked in JIRA and HP ALM, with ACCELQ-supported automation.'],tech:['Salesforce nCino','ACCELQ','JIRA','HP ALM']},
 {index:'06',title:'Banking & Credit Workflows',client:'Royal Bank of Canada',region:'Canada',sector:'Banking',summary:'Ongoing quality engineering for Salesforce nCino — account and opportunity workflows, loan-related processes, customer data processing, and credit actions and reviews.',overview:'Ongoing quality engineering for the Salesforce nCino platform, validating account and opportunity workflows, loan-related processes, customer data processing, and credit actions and reviews.',focus:['Account and opportunity workflow validation in Salesforce nCino.','Loan-related process testing across the origination lifecycle.','Customer data processing accuracy and integrity.','Credit actions and review workflows.','ACCELQ-supported automation with delivery tracking in Azure DevOps.'],tech:['Salesforce nCino','ACCELQ','Azure DevOps']}
];
const grid=document.getElementById('projectsGrid');
projectData.forEach((p,i)=>{const card=document.createElement('article');card.className='project-card';card.innerHTML=`<div class="project-top"><span class="project-index">${p.index}</span><span class="project-sector">${p.sector}</span></div><h3>${p.title}</h3><p class="project-client">${p.client} · ${p.region}${i===5?' · Mar 2025 – Present':''}</p><p>${p.summary}</p><div class="pills">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><button class="project-more" type="button" data-project="${i}">View Case Study ↗</button>`;grid.appendChild(card)});
const menuToggle=document.getElementById('menuToggle'),navLinks=document.getElementById('navLinks');menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
const dialog=document.getElementById('projectDialog');grid.addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(!btn)return;const p=projectData[Number(btn.dataset.project)];document.getElementById('dialogEyebrow').textContent=`${p.index} / ${p.sector}`;document.getElementById('dialogTitle').textContent=p.title;document.getElementById('dialogClient').textContent=`${p.client} · ${p.region}`;document.getElementById('dialogSummary').textContent=p.overview;document.getElementById('dialogFocus').innerHTML=p.focus.map(x=>`<li>${x}</li>`).join('');document.getElementById('dialogTech').innerHTML=p.tech.map(x=>`<span>${x}</span>`).join('');dialog.showModal()});document.getElementById('dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.getElementById('copyEmail').addEventListener('click',async()=>{const email='pmanasal196@gmail.com';try{await navigator.clipboard.writeText(email)}catch{const t=document.createElement('textarea');t.value=email;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()}document.getElementById('copyFeedback').textContent='Email address copied: '+email;const btn=document.getElementById('copyEmail');btn.querySelector('span').textContent='Copied!';setTimeout(()=>{btn.querySelector('span').textContent='Copy Email';document.getElementById('copyFeedback').textContent=''},2200)});
document.getElementById('year').textContent=new Date().getFullYear();const toTop=document.getElementById('toTop');window.addEventListener('scroll',()=>toTop.classList.toggle('visible',window.scrollY>500),{passive:true});toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
const revealItems=document.querySelectorAll('.job-card,.expertise-card,.project-card,.award-row,.cert-card,.education-card');
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -3% 0px'});
revealItems.forEach((el,index)=>{el.classList.add('reveal-item');el.style.setProperty('--reveal-delay',((index%4)*110)+'ms');revealObserver.observe(el)});

/* ---- Mobile swipe rows: pagination dots + keyboard access ---- */
(function(){
  document.querySelectorAll('.swipe').forEach(function(row){
    var cards=Array.from(row.children);
    if(cards.length<2) return;
    var section=row.closest('section');
    var label=section&&section.querySelector('.eyebrow')?section.querySelector('.eyebrow').textContent.replace(/^\d+\s*\/\s*/,''):'Cards';
    row.setAttribute('tabindex','0');
    row.setAttribute('role','group');
    row.setAttribute('aria-label',label+' — swipe to see more');
    var dots=document.createElement('div');
    dots.className='swipe-dots';
    cards.forEach(function(_,i){
      var b=document.createElement('button');
      b.type='button';
      b.setAttribute('aria-label','Go to card '+(i+1)+' of '+cards.length);
      b.addEventListener('click',function(){
        var pad=parseFloat(getComputedStyle(row).paddingLeft)||0;
        row.scrollTo({left:cards[i].offsetLeft-pad,behavior:'smooth'});
      });
      dots.appendChild(b);
    });
    row.insertAdjacentElement('afterend',dots);
    var buttons=dots.children,ticking=false;
    function update(){
      ticking=false;
      var pad=parseFloat(getComputedStyle(row).paddingLeft)||0;
      var target=row.scrollLeft+pad,best=0,min=Infinity;
      cards.forEach(function(c,i){var d=Math.abs(c.offsetLeft-target);if(d<min){min=d;best=i}});
      if(row.scrollLeft+row.clientWidth>=row.scrollWidth-4) best=cards.length-1;
      Array.prototype.forEach.call(buttons,function(b,i){
        b.classList.toggle('active',i===best);
        if(i===best) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current');
      });
    }
    row.addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});
    window.addEventListener('resize',update);
    update();
  });
})();

/* ---- Scroll progress, active nav link, stat count-up ---- */
(function(){
  var bar=document.getElementById('scrollProgress');
  function progress(){
    var max=document.documentElement.scrollHeight-innerHeight;
    if(bar) bar.style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%';
  }
  addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();

  var links=Array.from(document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)'));
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
  var spy=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting&&map[en.target.id]){
        links.forEach(function(l){l.classList.remove('active');l.removeAttribute('aria-current')});
        map[en.target.id].classList.add('active');map[en.target.id].setAttribute('aria-current','true');
      }
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(map).forEach(function(id){var s=document.getElementById(id);if(s)spy.observe(s)});

  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters=document.querySelectorAll('[data-count]');
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      io.unobserve(en.target);
      var el=en.target,end=Number(el.dataset.count),suf=el.dataset.suffix||'';
      if(reduce){el.textContent=end+suf;return}
      var t0=performance.now(),dur=1100;
      (function tick(t){
        var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);
        el.textContent=Math.round(end*e)+suf;
        if(p<1) requestAnimationFrame(tick);
      })(t0);
    });
  },{threshold:.6});
  counters.forEach(function(c){io.observe(c)});
})();

/* ---- Loading screen ---- */
(function(){
  var loader=document.getElementById('loader');
  if(!loader) return;
  var start=Date.now(), done=false;
  function hide(){
    if(done) return; done=true;
    var wait=Math.max(0,1200-(Date.now()-start));
    setTimeout(function(){
      loader.classList.add('hide');
      document.body.classList.remove('is-loading');
      setTimeout(function(){loader.remove()},700);
    },wait);
  }
  if(document.readyState==='complete') hide(); else window.addEventListener('load',hide);
  setTimeout(hide,5000);
})();


/* ---- Reliable smooth anchor navigation ---- */
document.querySelectorAll('a[href^="#"]').forEach(function(link){
  link.addEventListener('click',function(event){
    var id=link.getAttribute('href').slice(1);
    var target=document.getElementById(id);
    if(!target)return;
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    event.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
    if(history.replaceState) history.replaceState(null,'','#'+id);
  });
});

