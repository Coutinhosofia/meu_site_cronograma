
const weeks = [
  { n:1, phase:1, tema:"Linux — Fundamentos + CLI", topics:["Sistema de diretórios Linux","Comandos: ls, cd, pwd, mkdir, touch, rm, cp, mv","Permissões: chmod, chown","Compactar: tar, gzip","Editar arquivos com VI/nano"], resources:["Ninja do Linux — Comandos básicos (YouTube)","Alura: Linux Onboarding — CLI rápida e prática","MIT: The Missing Semester of Your CS Education","OverTheWire: Bandit (prática)"] },
  { n:2, phase:1, tema:"Linux Intermediário + Python básico", topics:["Processos: ps, top, kill","Usuários, grupos, variáveis de ambiente PATH","SSH e SCP: comunicação remota","Bash scripting e automação básica","Python: tipos, variáveis, condicionais, loops"], resources:["Alura: Linux Onboarding — usuários e permissões","Artigo: SSH, o acesso remoto (Alura)","Alura: Python — crie a sua primeira aplicação","Documentação Python oficial"] },
  { n:3, phase:1, tema:"Redes de Computadores + TCP/IP", topics:["Modelo OSI: 7 camadas na prática","TCP/IP, DNS, DHCP, ARP, ICMP","Diferenças: hub, switch, roteador","Wireshark: captura e análise de pacotes","Endereçamento IPv4"], resources:["AWS: O que são redes de computadores?","Artigo: O protocolo TCP/IP (Medium)","YouTube: Rede de Computadores — Animação 3D","Cisco NetAcad: Introduction to Networks (grátis)"] },
  { n:4, phase:1, tema:"Sub-redes + HTTP + Cloud fundamentos", topics:["Cálculo CIDR e máscaras de sub-rede","HTTP: GET, POST, PUT, DELETE, status codes","HTTPS e TLS/SSL básico","IaaS, PaaS, SaaS: AWS, Azure, GCP"], resources:["Alura: Como calcular máscaras de sub-rede","MDN Web Docs: Uma visão geral do HTTP","Alura: Diferença entre HTTP e HTTPS","YouTube: AWS — O que é a AWS?"] },
  { n:5, phase:2, tema:"CIA Triad + Framework de Cibersegurança", topics:["CIA: Confidencialidade, Integridade, Disponibilidade","NIST Cybersecurity Framework","ISO 27001 e SOC2: visão geral","Conscientização de segurança: fator humano"], resources:["Site NIST Cybersecurity Framework","YouTube: NIST Overview","Artigo: Normas de segurança da informação","ISO 27001 oficial"] },
  { n:6, phase:2, tema:"Gestão de Riscos + IAM + LGPD", topics:["CVE e CVSS: leitura e classificação","IAM: MFA, SSO, RBAC na prática","Threat modeling básico","LGPD e GDPR: princípios e diferenças"], resources:["Site CVSS — NIST NVD","IBM: O que é gerenciamento de vulnerabilidades?","YouTube: ENTENDA O QUE É LGPD","Alura: O que é IAM?"] },
  { n:7, phase:2, tema:"Criptografia + Autenticação + Quebra de Senhas", topics:["Criptografia simétrica x assimétrica","Hashing: MD5, SHA, bcrypt","PKI e certificados digitais","Quebra de senhas: Hashcat, brute force, rainbow tables"], resources:["Alura: Criptografia — diferenças","YouTube: Criptografia Assimétrica","Artigo: Hashcat 101 (Medium)","YouTube: Demonstração de Ataque Brute Force"] },
  { n:8, phase:2, tema:"Firewalls + IDS + IPS", topics:["Firewall: regras, filtragem de tráfego","IDS (passivo) vs IPS (ativo)","iptables e UFW na prática","pfSense: configuração básica"], resources:["Artigo: UFW — Descomplicando o Firewall","YouTube: Firewall com Iptables: Teoria e Prática","Site pfSense","YouTube: iptables Complete Guide"] },
  { n:9, phase:3, tema:"OSINT + Técnicas Hacker + Reconhecimento", topics:["OSINT: Shodan, theHarvester, Google Dorks","Maltego: mapeamento de alvos","Metodologias: PTES, OWASP, OSSTMM","Etapas de reconhecimento (pre-attack)"], resources:["Site: OSINT Framework","Site: haveibeenpwned.com","YouTube: O que é OSINT?","YouTube: Maltego — ferramenta poderosa"] },
  { n:10, phase:3, tema:"Web Application: Segurança + OWASP Top 10", topics:["SQLi, XSS, IDOR, SSRF, XXE na prática","Broken Authentication e exposição de dados","DVWA: ambiente vulnerável controlado","Nessus e OpenVAS: análise de vulnerabilidades"], resources:["Site OWASP Top Ten","Artigo: SQL Injection — DVWA Solution","YouTube: DVWA Playlist — CryptoCat","Site Nessus (Tenable) · Site Qualys"] },
  { n:11, phase:3, tema:"SOC + SIEM + SOAR", topics:["Estrutura SOC: Tier 1, 2 e 3","Elastic SIEM e Wazuh (hands-on)","SOAR: orquestração e automação de resposta","Análise de logs: Windows Event Logs, Syslog"], resources:["Artigo: SIEM e SOC para iniciantes","YouTube: Construindo um SOC","YouTube: Como configurar o SIEM Wazuh","Site ELK Stack"] },
  { n:12, phase:3, tema:"Hardening + Endpoint Security + Metasploit", topics:["Hardening Linux e Windows: CIS Benchmarks","Endpoint Security: EDR, EPP, XDR","Metasploit no contexto Blue Team","Análise de backdoors com MSFVENOM (conceitual)"], resources:["Artigo: Como fazer Hardening no Linux","YouTube: How to protect Linux from Hackers","Artigo: EPP vs EDR vs XDR","Site Metasploit"] },
  { n:13, phase:3, tema:"Forense Digital: Memória + Rede", topics:["Cadeia de custódia digital","Volatility: análise de memória","Wireshark: forense de rede","FTK Imager e Autopsy na prática"], resources:["YouTube: DFIRScience — Digital Investigation Methods","Artigo: Memory Analysis For Beginners with Volatility","YouTube: Intro to Memory Forensics with Volatility 3","DFIR.training"] },
  { n:14, phase:3, tema:"Cloud Security + Forense na Nuvem + Contêineres", topics:["Shared Responsibility Model","Misconfigurações comuns em cloud","Análise forense em ambientes cloud","Segurança de contêineres Docker"], resources:["Artigo: Security IN vs OF the Cloud","Artigo: Cloud Forensics Tools","YouTube: IBM — Container Security Explained","YouTube: HackerSploit — Docker Security"] },
  { n:15, phase:4, tema:"Threat Hunting + Análise de Malware + PowerShell", topics:["Threat Hunting: busca proativa de ameaças","Análise de malware estática e dinâmica (sandbox)","YARA: identificação de padrões","PowerShell para detecção e segurança"], resources:["Artigo: Threat Hunting — The Basics","YouTube: Threat Hunting Process","Artigo: Malware Analysis 101 — Static Analysis","YouTube: Papo Binário — AMO playlist"] },
  { n:16, phase:4, tema:"Zero Trust + Arquitetura + Resposta a Incidentes", topics:["Zero Trust: NIST SP 800-207","Arquitetura de segurança de rede: design seguro","Gerenciamento de Resposta a Incidentes: 6 fases","Plano de resposta e análise pós-incidente"], resources:["Artigo: NIST Zero Trust Architecture (PDF)","YouTube: Descomplicando Zero Trust","YouTube: The Six Phases of Incident Response","Artigo: Incident Response Plan for Startups"] },
  { n:17, phase:4, tema:"AppSec + MDM + DevSecOps", topics:["Segurança de aplicações: SAST e DAST","Web Application Security: melhores práticas","MDM: gestão de dispositivos móveis","Segurança contínua e automação (DevSecOps)"], resources:["YouTube: Application Security 101 (Snyk)","YouTube: SAST / DAST","Artigo: What is MDM?","Artigo: Continuous Security — DevSecOps"] },
  { n:18, phase:4, tema:"Projeto Final + Revisão + CompTIA Security+", topics:["Relatório completo de incidente simulado","Revisão geral de todos os tópicos TechGuide","Simulados CompTIA Security+ SY0-701","Planejamento de carreira Blue Team"], resources:["ExamCompass — simulados gratuitos","Professor Messer — Security+ SY0-701","CompTIA.org","TryHackMe: SOC Simulator"] }
];
 
const phaseClass = {1:'phase-1',2:'phase-2',3:'phase-3',4:'phase-4'};
const phaseLabel = {1:'Fase 1',2:'Fase 2',3:'Fase 3',4:'Fase 4'};
let activePhase = null;
 
function getDone() { return JSON.parse(localStorage.getItem('weeks-done')||'{}'); }
function saveDone(d) { localStorage.setItem('weeks-done', JSON.stringify(d)); }
 
function toggleDone(e, n) {
  e.stopPropagation();
  const d = getDone(); d[n] = e.target.checked; saveDone(d);
  const card = e.target.closest('.week-card');
  card.classList.toggle('done', e.target.checked);
  updateStats();
}
 
function updateStats() {
  const d = getDone(), c = Object.values(d).filter(Boolean).length;
  document.getElementById('progress-fill').style.width = (c/18*100)+'%';
  document.getElementById('nav-progress').innerHTML = `<span>${c}</span>/18 semanas`;
  document.getElementById('stat-done').textContent = c;
  document.getElementById('stat-remaining').textContent = 18 - c;
}
 
function getCurrentWeek() {
  const s = new Date('2026-04-27'), diff = Math.floor((new Date()-s)/864e5);
  return Math.min(Math.max(Math.floor(diff/7)+1,1),18);
}
 
function renderWeeks() {
  const grid = document.getElementById('weeks-grid');
  grid.innerHTML = '';
  const done = getDone(), cur = getCurrentWeek();
  weeks.forEach(w => {
    const isDone = done[w.n]||false, isCurrent = w.n===cur;
    const card = document.createElement('div');
    card.className = 'week-card'+(isCurrent?' current-week':'')+(isDone?' done':'');
    card.dataset.week = w.n; card.dataset.phase = w.phase;
    card.dataset.text = (w.tema+' '+w.topics.join(' ')).toLowerCase();
 
    const topicsHtml = w.topics.map(t=>`<div class="topic">${t}</div>`).join('');
    const resHtml = w.resources.map(r=>`<div class="resource">${r}</div>`).join('');
    const curBadge = isCurrent ? `<span class="current-badge">▶ aqui</span>` : '';
    const doneBadge = isDone ? `<span class="done-badge">✓ concluída</span>` : '';
 
    card.innerHTML = `
      <div class="week-header" onclick="toggleCard(this.parentElement)">
        <input type="checkbox" class="week-check" ${isDone?'checked':''} onclick="toggleDone(event,${w.n})">
        <div class="week-num">sem ${String(w.n).padStart(2,'0')}</div>
        <div class="week-info">
          <div class="week-title">${w.tema}</div>
          <div class="week-badges">
            <span class="phase-pill ${phaseClass[w.phase]}" style="font-size:9px;padding:1px 7px;">● ${phaseLabel[w.phase]}</span>
            ${curBadge}${doneBadge}
          </div>
        </div>
        <svg class="week-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="week-body">
        <div><div class="col-title">tópicos</div>${topicsHtml}</div>
        <div><div class="col-title">recursos</div>${resHtml}</div>
      </div>`;
    grid.appendChild(card);
  });
  applyFilters();
  updateStats();
}
 
function toggleCard(card) { card.classList.toggle('open'); }
 
function filterPhase(phase, el) {
  if (activePhase === phase) {
    activePhase = null;
    document.querySelectorAll('.phase-pill').forEach(p=>p.classList.remove('inactive'));
  } else {
    activePhase = phase;
    document.querySelectorAll('.phase-pill').forEach(p=>p.classList.toggle('inactive', !p.classList.contains('phase-'+phase)));
  }
  applyFilters();
}
 
function applySearch(q) { applyFilters(q); }
 
function applyFilters(searchQuery) {
  const q = (searchQuery !== undefined ? searchQuery : document.getElementById('search-input').value).trim().toLowerCase();
  let vis = 0;
  document.querySelectorAll('.week-card').forEach(card => {
    const phaseMatch = !activePhase || parseInt(card.dataset.phase) === activePhase;
    const searchMatch = !q || card.dataset.text.includes(q);
    const show = phaseMatch && searchMatch;
    card.style.display = show ? '' : 'none';
    if (show) vis++;
  });
  document.getElementById('no-result').style.display = vis === 0 ? 'block' : 'none';
}
 
function resetProgress() {
  if (!confirm('Zerar todo o progresso?')) return;
  localStorage.removeItem('weeks-done');
  renderWeeks();
}
 
const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:0.05});
document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));
 
// cursor
var dot = document.createElement('div');
dot.style.cssText='position:fixed;width:8px;height:8px;background:#00d4aa;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .1s';
document.body.appendChild(dot);
var ring = document.createElement('div');
ring.style.cssText='position:fixed;width:26px;height:26px;border:1px solid rgba(0,212,170,0.5);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:left .1s ease, top .1s ease';
document.body.appendChild(ring);
document.addEventListener('mousemove',function(e){dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';});
document.querySelectorAll('a,button,input').forEach(function(el){el.addEventListener('mouseenter',function(){dot.style.transform='translate(-50%,-50%) scale(2)';ring.style.transform='translate(-50%,-50%) scale(1.4)';});el.addEventListener('mouseleave',function(){dot.style.transform='translate(-50%,-50%) scale(1)';ring.style.transform='translate(-50%,-50%) scale(1)';});});
 
// particles
var canvas=document.createElement('canvas');
canvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.2';
document.body.prepend(canvas);
var ctx=canvas.getContext('2d');
var pts=[];
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
for(var i=0;i<40;i++)pts.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);pts.forEach(function(p){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.width)p.vx*=-1;if(p.y<0||p.y>canvas.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,Math.PI*2);ctx.fillStyle='#00d4aa';ctx.fill();});for(var a=0;a<pts.length;a++){for(var b=a+1;b<pts.length;b++){var dist=Math.hypot(pts[a].x-pts[b].x,pts[a].y-pts[b].y);if(dist<120){ctx.beginPath();ctx.moveTo(pts[a].x,pts[a].y);ctx.lineTo(pts[b].x,pts[b].y);ctx.strokeStyle='rgba(0,212,170,'+(1-dist/120)+')';ctx.lineWidth=0.4;ctx.stroke();}}}requestAnimationFrame(draw);}
draw();
 
renderWeeks();
