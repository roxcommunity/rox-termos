const icons={"Comece por aqui":"🏠","Compras":"🛒","Apoiadores":"🏅","Comunidade":"🛡️","Suporte":"💬"};
const pageIcons={
  "boas-vindas":"🏠",
  "compras":"🛒",
  "pagamentos":"💳",
  "reembolsos":"↩️",
  "apoiadores":"🎖️",
  "master":"🏆",
  "premium":"💎",
  "booster":"🚀",
  "conteudos":"📦",
  "conduta":"🛡️",
  "canais":"💬",
  "seguranca":"🔐",
  "penalidades":"⚠️",
  "suporte":"🎫"
};

const pages=[
  {
    group:"Comece por aqui",
    slug:"boas-vindas",
    title:"Regras Gerais",
    desc:"Regras essenciais de convivência, organização e segurança da Rox Community.",
    body:`<span class="eyebrow">Rox Community</span><h1>Regras Gerais</h1><p class="lead">Estas regras definem a conduta básica esperada de todos os membros e ajudam a manter a comunidade <strong>organizada, segura e funcional</strong>.</p><div class="meta-row"><span class="meta-pill live-meta"><span class="live-dot"></span><span id="heroLiveClock">Atualizado em --/--/---- às --:--:--</span></span></div><h2 id="regras">Essencial</h2><ul><li>Trate membros e equipe com respeito, evitando provocações, ofensas ou comportamentos que prejudiquem a convivência.</li><li>Utilize cada canal de acordo com o assunto indicado para facilitar a organização e o atendimento.</li><li>Spam, flood, divulgação não autorizada e marcações excessivas podem ser removidos pela moderação.</li><li>Golpes, tentativas de fraude e comprovantes falsos são considerados infrações graves.</li><li>Não tente contornar cargos, permissões, bots, restrições ou qualquer sistema utilizado pela comunidade.</li><li>As regras e diretrizes da plataforma Discord também devem ser respeitadas durante o uso do servidor.</li></ul><div class="callout"><strong>Importante</strong>O desconhecimento das regras não impede a aplicação de medidas quando houver uma infração.</div>`
  },
  {
    group:"Compras",
    slug:"compras",
    title:"Compras",
    desc:"Orientações para concluir a compra corretamente e receber o acesso correspondente.",
    body:`<span class="eyebrow">Compras</span><h1>Compras</h1><p class="lead">Antes de concluir qualquer pagamento, confira atentamente o plano escolhido, o valor informado e o período de acesso oferecido.</p><h2 id="antes">Antes de pagar</h2><ul><li>Verifique se está adquirindo o plano correto e se as informações apresentadas correspondem ao acesso desejado.</li><li>Utilize a conta Discord que realmente receberá o cargo, pois o acesso é associado ao usuário informado na compra.</li><li>A compra somente é considerada concluída quando o meio de pagamento confirmar a transação como aprovada.</li><li>Os acessos pagos atualmente possuem duração de <strong>30 dias</strong> a partir da ativação.</li></ul><h2 id="problemas">Problemas</h2><p>Se o pagamento estiver aprovado e o cargo não for entregue corretamente, abra um atendimento informando os dados necessários para que a compra seja localizada e verificada.</p>`
  },
  {
    group:"Compras",
    slug:"pagamentos",
    title:"Pagamentos",
    desc:"Como a confirmação do pagamento é validada antes da liberação do acesso.",
    body:`<span class="eyebrow">Compras</span><h1>Pagamentos</h1><p class="lead">O cargo e o acesso correspondente são liberados somente depois que o pagamento constar como <strong>aprovado</strong> no meio utilizado.</p><h2 id="confirmacao">Confirmação</h2><ul><li>Prints, comprovantes isolados, pagamentos agendados ou transações ainda pendentes não são considerados confirmação definitiva.</li><li>A validação considera o status real retornado pelo meio de pagamento utilizado na compra.</li><li>O tempo de processamento pode variar conforme o método escolhido e a instituição responsável pela transação.</li><li>Pagamentos duplicados, cobranças incorretas ou falhas de processamento devem ser comunicados ao suporte para análise.</li></ul>`
  },
  {
    group:"Compras",
    slug:"reembolsos",
    title:"Reembolsos",
    desc:"Política de reembolso aplicada quando a entrega do produto não pode ser concluída por falha no processo.",
    body:`<span class="eyebrow">Política de compra</span><h1>Reembolsos</h1><p class="lead">Por se tratar de <strong>produto digital com entrega e liberação de acesso</strong>, não oferecemos reembolso após a entrega ser concluída corretamente.</p><h2 id="politica">Política</h2><ul><li><strong>Não oferecemos reembolso após a entrega correta do produto.</strong> A compra deve ser realizada somente após o usuário conferir a modalidade e entender o que está adquirindo.</li><li>O reembolso será realizado quando <strong>não conseguirmos entregar o produto adquirido devido a uma falha ou erro ocorrido durante o nosso processo de entrega</strong>.</li><li>Quando houver uma falha de entrega, o suporte poderá primeiro tentar corrigir o problema e concluir a entrega normalmente. Caso isso não seja possível, o reembolso da compra poderá ser processado.</li><li>Desistência após a entrega, mudança de interesse, compra da modalidade errada, falta de utilização ou decisão de não utilizar mais o conteúdo não são motivos para reembolso depois que o produto já tiver sido entregue corretamente.</li><li>Problemas de entrega devem ser informados ao suporte para que a compra, o pagamento e a situação do acesso possam ser verificados antes da conclusão da análise.</li></ul>`
  },
  {
    group:"Apoiadores",
    slug:"apoiadores",
    title:"Visão Geral",
    desc:"Resumo das modalidades Apoiador Master, Apoiador Premium e do benefício de Booster.",
    body:`<span class="eyebrow">Apoiadores</span><h1>Visão Geral</h1><p class="lead">A Rox Community possui duas modalidades pagas de apoiador, cada uma com estrutura própria, além de um benefício separado para membros que impulsionam o servidor pelo Discord.</p><div class="plan-grid"><a class="plan featured pressable" href="#master"><span class="plan-tag">Pago</span><h3>🏆 Apoiador Master</h3><div class="plan-price">30 dias</div><p>Acesso temporário aos benefícios e conteúdos definidos para a modalidade Master.</p></a><a class="plan pressable" href="#premium"><span class="plan-tag">Pago</span><h3>💎 Apoiador Premium</h3><div class="plan-price">30 dias</div><p>Acesso temporário aos benefícios e conteúdos definidos para a modalidade Premium.</p></a><a class="plan pressable" href="#booster"><span class="plan-tag">Discord</span><h3>🚀 Booster</h3><div class="plan-price">Enquanto ativo</div><p>Benefício mantido enquanto o Server Boost permanecer ativo no servidor.</p></a></div><h2 id="acesso">Como funciona</h2><ul><li>Master e Premium possuem cargos, benefícios e áreas próprias, definidos de forma independente para cada modalidade.</li><li>A compra de uma modalidade não inclui automaticamente o acesso ou os benefícios da outra; cada plano é tratado separadamente.</li><li>O Booster não é vendido pela comunidade e funciona exclusivamente de acordo com o status de Server Boost no Discord.</li></ul>`
  },
  {
    group:"Apoiadores",
    slug:"master",
    title:"Apoiador Master",
    desc:"Funcionamento, duração e renovação do acesso Apoiador Master.",
    body:`<span class="eyebrow">Apoiadores</span><h1>Apoiador Master</h1><p class="lead">O Apoiador Master é uma modalidade paga com acesso temporário de <strong>30 dias</strong> aos benefícios e conteúdos definidos para esse plano.</p><h2 id="funcionamento">Funcionamento</h2><ul><li>O cargo Master é concedido depois que o pagamento correspondente for confirmado como aprovado.</li><li>Enquanto o cargo estiver ativo, o membro possui acesso às áreas, benefícios e conteúdos disponibilizados especificamente para o Apoiador Master.</li><li>O período de acesso é de 30 dias, contado a partir da ativação do cargo referente à compra.</li><li>Ao final do período, o cargo é removido e os benefícios vinculados à modalidade deixam de ficar disponíveis.</li><li>Para manter o acesso após o vencimento, será necessária uma nova aquisição ou renovação quando essa opção estiver disponível.</li></ul>`
  },
  {
    group:"Apoiadores",
    slug:"premium",
    title:"Apoiador Premium",
    desc:"Funcionamento, duração e renovação do acesso Apoiador Premium.",
    body:`<span class="eyebrow">Apoiadores</span><h1>Apoiador Premium</h1><p class="lead">O Apoiador Premium é uma modalidade paga com acesso temporário de <strong>30 dias</strong> aos benefícios e conteúdos definidos para esse plano.</p><h2 id="funcionamento">Funcionamento</h2><ul><li>O cargo Premium é concedido depois que o pagamento correspondente for confirmado como aprovado.</li><li>Enquanto o cargo estiver ativo, o membro possui acesso às áreas, benefícios e conteúdos disponibilizados especificamente para o Apoiador Premium.</li><li>O período de acesso é de 30 dias, contado a partir da ativação do cargo referente à compra.</li><li>Ao final do período, o cargo é removido e os benefícios vinculados à modalidade deixam de ficar disponíveis.</li><li>Para manter o acesso após o vencimento, será necessária uma nova aquisição ou renovação quando essa opção estiver disponível.</li></ul>`
  },
  {
    group:"Apoiadores",
    slug:"booster",
    title:"Booster",
    desc:"Como funciona o acesso de Booster vinculado ao Server Boost do Discord.",
    body:`<span class="eyebrow">Discord</span><h1>Booster</h1><p class="lead">O Booster <strong>não é um produto vendido</strong> pela Rox Community e depende diretamente do status de impulsionamento do membro no Discord.</p><h2 id="funcionamento">Funcionamento</h2><ul><li>O acesso é concedido enquanto existir um Server Boost ativo e reconhecido pelo Discord dentro da comunidade.</li><li>Após o boost ser identificado, o membro passa a ter acesso aos benefícios e canais reservados para Boosters.</li><li>O benefício permanece disponível somente enquanto o status de Booster continuar ativo no servidor.</li><li>Quando o boost expirar, for removido ou deixar de ser reconhecido pelo Discord, o acesso relacionado poderá ser retirado automaticamente.</li></ul>`
  },
  {
    group:"Apoiadores",
    slug:"conteudos",
    title:"Conteúdos",
    desc:"Como os conteúdos FiveM são organizados e disponibilizados entre as modalidades.",
    body:`<span class="eyebrow">Conteúdos</span><h1>Conteúdos</h1><p class="lead">Os conteúdos são organizados por modalidade para que cada área mantenha sua própria seleção de materiais voltados para <strong>FiveM</strong>.</p><h2 id="organizacao">Organização</h2><ul><li>Master, Premium e Booster possuem áreas separadas, cada uma destinada aos conteúdos e benefícios definidos para aquele acesso.</li><li>O conteúdo disponível em uma modalidade é independente das demais, portanto não existe obrigação de repetição entre os diferentes acessos.</li><li>O membro poderá consultar os materiais disponibilizados na área correspondente enquanto o cargo necessário permanecer ativo.</li><li>Novos conteúdos, correções e atualizações podem ser adicionados à modalidade correspondente conforme a organização e manutenção da comunidade.</li></ul>`
  },
  {
    group:"Comunidade",
    slug:"conduta",
    title:"Conduta",
    desc:"Padrões de convivência e comportamento esperados dentro do servidor.",
    body:`<span class="eyebrow">Comunidade</span><h1>Conduta</h1><p class="lead">A convivência deve ser respeitosa, objetiva e compatível com um ambiente comunitário organizado.</p><h2 id="regras">Regras</h2><ul><li>Respeite os demais membros e a equipe, mesmo quando houver opiniões ou interesses diferentes.</li><li>Não provoque discussões, conflitos ou tumultos de forma intencional para prejudicar o ambiente da comunidade.</li><li>Assédio, ameaças, perseguição e exposição de informações pessoais de terceiros não são permitidos.</li><li>Evite spam, flood e marcações repetitivas que atrapalhem conversas ou atendimentos em andamento.</li><li>Divulgação de servidores, lojas, serviços ou projetos externos depende de autorização prévia da administração.</li></ul>`
  },
  {
    group:"Comunidade",
    slug:"canais",
    title:"Canais e Suporte",
    desc:"Orientações para utilizar os canais corretamente e solicitar atendimento de forma eficiente.",
    body:`<span class="eyebrow">Comunidade</span><h1>Canais e Suporte</h1><p class="lead">Utilizar o local correto para cada assunto reduz atrasos, evita mensagens perdidas e facilita o atendimento da equipe.</p><h2 id="canais">Canais</h2><ul><li>Envie mensagens no canal correspondente ao assunto para manter as informações organizadas e fáceis de localizar.</li><li>Dúvidas sobre compras, pagamentos, cargos ou falhas de acesso devem ser encaminhadas aos canais oficiais de suporte.</li><li>Não abra vários chamados para o mesmo problema, pois isso pode dificultar a análise e atrasar o atendimento.</li><li>Evite pressionar, mencionar repetidamente ou chamar membros da equipe em canais diferentes enquanto já existir um atendimento aberto.</li></ul>`
  },
  {
    group:"Comunidade",
    slug:"seguranca",
    title:"Fraude e Segurança",
    desc:"Regras de prevenção contra fraude, abuso de permissões e manipulação dos sistemas.",
    body:`<span class="eyebrow">Segurança</span><h1>Fraude e Segurança</h1><p class="lead">Qualquer tentativa de obter vantagem indevida, enganar membros ou manipular os sistemas da comunidade será tratada como uma infração grave.</p><h2 id="proibido">É proibido</h2><ul><li>Enviar comprovantes falsos, adulterados ou informações manipuladas com a intenção de simular um pagamento.</li><li>Tentar receber cargos, benefícios ou acessos sem que exista uma compra válida ou autorização da administração.</li><li>Explorar ou tentar explorar falhas em bots, permissões, cargos, integrações ou canais para obter acesso indevido.</li><li>Se passar por membro da equipe, utilizar identidade falsa ou tentar aplicar golpes em outros usuários da comunidade.</li><li>Utilizar contas alternativas para evitar punições, restrições ou outras medidas aplicadas pela moderação.</li></ul>`
  },
  {
    group:"Comunidade",
    slug:"penalidades",
    title:"Penalidades",
    desc:"Como advertências, restrições e banimentos podem ser aplicados pela moderação.",
    body:`<span class="eyebrow">Moderação</span><h1>Penalidades</h1><p class="lead">As medidas aplicadas pela moderação consideram a gravidade da situação, o impacto causado e a reincidência do membro.</p><h2 id="medidas">Possíveis medidas</h2><div class="callout danger"><strong>Advertência → Restrição → Remoção de acesso → Banimento</strong>A ordem das medidas não é obrigatória em todos os casos. Infrações graves, fraude, golpes, tentativa de burlar sistemas ou situações que comprometam a segurança da comunidade podem resultar em ação imediata.</div>`
  },
  {
    group:"Suporte",
    slug:"suporte",
    title:"Suporte",
    desc:"Como abrir um atendimento e quais informações enviar para agilizar a análise.",
    body:`<span class="eyebrow">Suporte</span><h1>Suporte</h1><p class="lead">O suporte oficial deve ser utilizado sempre que existir algum problema relacionado a compra, pagamento, cargo, duração do acesso ou funcionamento da comunidade.</p><h2 id="enviar">Ao solicitar ajuda</h2><ul><li>Explique o problema de forma clara, informando o que aconteceu e qual resultado você esperava.</li><li>Envie somente as informações necessárias para localizar e verificar a compra ou o acesso relacionado ao atendimento.</li><li>Nunca envie senhas, tokens, códigos de autenticação ou outras credenciais pessoais em chamados de suporte.</li><li>Mantenha as informações do mesmo problema concentradas no chamado já aberto e aguarde o retorno da equipe.</li></ul><div class="callout"><strong>Atendimento oficial</strong>Para evitar golpes e informações incorretas, utilize somente os canais de suporte indicados pela Rox Community.</div>`
  }
];
const groups=[...new Set(pages.map(p=>p.group))],sideNav=document.getElementById("sideNav"),content=document.getElementById("content"),searchModal=document.getElementById("searchModal"),searchInput=document.getElementById("searchInput"),searchResults=document.getElementById("searchResults"),sidebar=document.getElementById("sidebar"),backdrop=document.getElementById("mobileBackdrop");let currentSlug="boas-vindas",selectedSearch=0,currentSection="";
const esc=s=>s.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
function renderNav(){sideNav.innerHTML=groups.map(g=>`<section class="nav-group"><button class="nav-group-head" type="button"><span class="nav-group-title">${g}</span><span class="nav-chevron">⌄</span></button><div class="nav-items">${pages.filter(p=>p.group===g).map(p=>`<a class="nav-link ${p.slug===currentSlug?"active":""}" href="#${p.slug}"><span class="nav-icon">${pageIcons[p.slug]||icons[g]||"•"}</span><span>${p.title}</span></a>`).join("")}</div></section>`).join("");sideNav.querySelectorAll(".nav-group-head").forEach(b=>b.onclick=()=>b.closest(".nav-group").classList.toggle("collapsed"))}
function renderPage(slug){const idx=pages.findIndex(p=>p.slug===slug),p=pages[idx]||pages[0];currentSlug=p.slug;currentSection="";document.title=`${p.title} · Rox Community`;content.innerHTML=`<article class="doc-page"><nav class="breadcrumb"><a href="#boas-vindas">Rox Community</a><i>›</i><span>${p.group}</span><i>›</i><strong>${p.title}</strong></nav>${p.body}<nav class="page-nav">${idx>0?`<a class="pressable" href="#${pages[idx-1].slug}"><small>Anterior</small><strong>← ${pages[idx-1].title}</strong></a>`:"<span></span>"}${idx<pages.length-1?`<a class="pressable" href="#${pages[idx+1].slug}"><small>Próxima</small><strong>${pages[idx+1].title} →</strong></a>`:"<span></span>"}</nav><div class="updated-note">Rox Community · Documentação oficial · <span id="footerLiveClock">--/--/---- · --:--:--</span></div></article>`;renderNav();renderToc();updateLiveClock();content.focus({preventScroll:true});window.scrollTo({top:0,behavior:"instant"});closeMobile()}
function renderToc(){}
function updateToc(){}
function route(){const raw=location.hash.slice(1)||"boas-vindas",[slug,anchor]=raw.split("/");renderPage(pages.some(p=>p.slug===slug)?slug:"boas-vindas");if(anchor)setTimeout(()=>{currentSection=anchor;document.getElementById(anchor)?.scrollIntoView();updateToc()},0)}window.addEventListener("hashchange",route);
function openMobile(){sidebar.classList.add("open");backdrop.classList.add("show")}function closeMobile(){sidebar.classList.remove("open");backdrop.classList.remove("show")}document.getElementById("mobileMenu").onclick=()=>sidebar.classList.contains("open")?closeMobile():openMobile();backdrop.onclick=closeMobile;
function openSearch(){searchModal.classList.add("open");searchModal.setAttribute("aria-hidden","false");searchInput.value="";renderSearch("");setTimeout(()=>searchInput.focus(),20)}function closeSearch(){searchModal.classList.remove("open");searchModal.setAttribute("aria-hidden","true")}document.getElementById("searchTrigger").onclick=openSearch;document.getElementById("searchClose").onclick=closeSearch;searchModal.addEventListener("click",e=>{if(e.target===searchModal)closeSearch()});
function strip(s){const d=document.createElement("div");d.innerHTML=s;return d.textContent||""}function renderSearch(q){const term=q.trim().toLowerCase(),results=pages.filter(p=>!term||(`${p.title} ${p.desc} ${strip(p.body)}`).toLowerCase().includes(term)).slice(0,10);selectedSearch=0;searchResults.innerHTML=results.length?results.map((p,i)=>`<a href="#${p.slug}" class="search-item ${i===0?"selected":""}" data-i="${i}"><span class="search-item-icon">${pageIcons[p.slug]||icons[p.group]||"•"}</span><span><strong>${esc(p.title)}</strong><span>${esc(p.group)} · ${esc(p.desc)}</span></span></a>`).join(""):`<div class="empty">Nenhum resultado encontrado.</div>`;searchResults.querySelectorAll("a").forEach(a=>a.onclick=closeSearch)}searchInput.oninput=e=>renderSearch(e.target.value);
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openSearch()}if(e.key==="Escape"){if(searchModal.classList.contains("open"))closeSearch();else closeMobile()}if(searchModal.classList.contains("open")&&(e.key==="ArrowDown"||e.key==="ArrowUp")){e.preventDefault();const items=[...searchResults.querySelectorAll(".search-item")];if(!items.length)return;selectedSearch=(selectedSearch+(e.key==="ArrowDown"?1:-1)+items.length)%items.length;items.forEach((x,i)=>x.classList.toggle("selected",i===selectedSearch));items[selectedSearch].scrollIntoView({block:"nearest"})}if(searchModal.classList.contains("open")&&e.key==="Enter"){const items=[...searchResults.querySelectorAll(".search-item")];if(items[selectedSearch]){location.hash=items[selectedSearch].getAttribute("href");closeSearch()}}});
// Última atualização da documentação.
// O fallback evita campos vazios se a API do GitHub estiver temporariamente indisponível.
// Em produção, a data/hora real é sincronizada com o commit mais recente do repositório.
const LAST_UPDATED_FALLBACK=new Date("2026-08-09T00:30:00-03:00");
let lastUpdatedAt=LAST_UPDATED_FALLBACK;

function formatDateTime(now=new Date(),timeZone){
  const options={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false};
  if(timeZone) options.timeZone=timeZone;
  const parts=new Intl.DateTimeFormat("pt-BR",options).formatToParts(now);
  const v=Object.fromEntries(parts.map(x=>[x.type,x.value]));
  return {date:`${v.day}/${v.month}/${v.year}`,time:`${v.hour}:${v.minute}:${v.second}`};
}

function formatLocalDateTime(now=new Date()){
  // Relógio do topo: horário local do navegador/dispositivo do visitante.
  return formatDateTime(now);
}

function updateLastUpdated(){
  // Horário fixo da última publicação, padronizado para o horário de Brasília.
  const {date,time}=formatDateTime(lastUpdatedAt,"America/Sao_Paulo");
  const hero=document.getElementById("heroLiveClock");
  const foot=document.getElementById("footerLiveClock");
  if(hero) hero.textContent=`Atualizado em ${date} às ${time}`;
  if(foot) foot.textContent=`${date} · ${time}`;
}

async function syncLastUpdatedFromGitHub(){
  try{
    const response=await fetch("https://api.github.com/repos/roxcommunity/rox-termos/commits?per_page=1",{
      headers:{"Accept":"application/vnd.github+json"},
      cache:"no-store"
    });
    if(!response.ok) throw new Error(`GitHub API: ${response.status}`);
    const commits=await response.json();
    const iso=commits?.[0]?.commit?.committer?.date||commits?.[0]?.commit?.author?.date;
    const parsed=iso?new Date(iso):null;
    if(parsed&&!Number.isNaN(parsed.getTime())){
      lastUpdatedAt=parsed;
      updateLastUpdated();
    }
  }catch(error){
    console.warn("Não foi possível sincronizar a última atualização:",error);
  }
}

function updateTopLiveClock(){
  const top=document.getElementById("topLiveClock");
  if(!top) return;
  const {date,time}=formatLocalDateTime();
  top.textContent=`${date} · ${time}`;
}

function updateLiveClock(){
  updateLastUpdated();
  updateTopLiveClock();
}

document.addEventListener("visibilitychange",()=>{if(!document.hidden) updateTopLiveClock()});
window.addEventListener("focus",updateTopLiveClock);

let liveClockTimer=null;
function applyDiscordCssIcons(){
  const candidates=[...document.querySelectorAll(".top-action, .support-button")];
  candidates.forEach(el=>{
    if(!/discord/i.test(el.textContent||"")) return;

    // Remove apenas o emoji/ícone textual antigo, preservando o rótulo do botão.
    [...el.childNodes].forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE){
        node.textContent=node.textContent.replace(/^\s*[💬🗨️🗨☁️☁]\s*/u,"");
      }else if(node.nodeType===Node.ELEMENT_NODE){
        const iconOnly=/^[\s💬🗨️🗨☁️☁]+$/u.test(node.textContent||"");
        if(node.classList?.contains("top-action-icon") || iconOnly) node.remove();
      }
    });

    if(!el.querySelector(".discord-css-icon")){
      const icon=document.createElement("span");
      icon.className="discord-css-icon";
      icon.setAttribute("aria-hidden","true");
      el.prepend(icon);
    }
  });
}

function initApp(){
  applyDiscordCssIcons();
  route();
  updateLiveClock();
  syncLastUpdatedFromGitHub();
  if(liveClockTimer===null) liveClockTimer=setInterval(updateTopLiveClock,1000);
  onScroll();
}
if(document.readyState==="loading"){
  document.addEventListener("DOMContentLoaded",initApp,{once:true});
}else{
  initApp();
}
let toastTimer;function toast(msg){const el=document.getElementById("toast");document.getElementById("toastText").textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),1800)}async function copyUrl(url,msg){try{await navigator.clipboard.writeText(url);toast(msg)}catch{toast("Não foi possível copiar")}}
function onScroll(){const doc=document.documentElement,max=doc.scrollHeight-innerHeight,p=max>0?scrollY/max*100:0;document.getElementById("scrollProgress").style.width=`${p}%`;const heads=[...content.querySelectorAll("h2[id],h3[id]")];let active="";heads.forEach(h=>{if(h.getBoundingClientRect().top<150)active=h.id});if(active!==currentSection){currentSection=active;updateToc()}}window.addEventListener("scroll",onScroll,{passive:true});
