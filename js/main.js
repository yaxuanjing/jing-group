/* ============================================================
   Main script — rendering, routing, i18n, animations
   ============================================================ */
(function () {
  'use strict';

  const $ = (s, ctx) => (ctx || document).querySelector(s);
  const $$ = (s, ctx) => Array.from((ctx || document).querySelectorAll(s));
  const cur = () => document.body.classList.contains('lang-zh') ? 'zh' : 'en';
  const t = (obj) => obj ? (obj[cur()] || obj.en || '') : '';

  /* ---------- SVG icons ---------- */
  const ICONS = {
    flask: '<svg viewBox="0 0 24 24"><path d="M9 2h6v2h-1v5.2l6.3 10.9A2 2 0 0 1 18.6 23H5.4a2 2 0 0 1-1.7-2.9L10 9.2V4H9V2zm3 8.6l-4.8 8.3h9.6L12 10.6z"/></svg>',
    recycle: '<svg viewBox="0 0 24 24"><path d="M12 5.7l2.6 4.5h-5.2L12 5.7zm-6.4 3.8l2.6-4.5h5.1L10.7 9.5H5.6zm.9 2h5.1L8.5 20H3.4l3.1-8.5zM19.4 9.5l-3.1-8.5h-5.1l2.6 4.5-2.6 4.5h5.1l3.1-.5zM14.8 20l3.6-6.2 2.6 4.5-1.3 2.3c-.4.7-1.2 1.2-2 1.2h-2.9z"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm0-12h1v3h-1V3zm0 17h1v3h-1v-3zM3 11h3v1H3v-1zm15 0h3v1h-3v-1zM5.6 5.6l.7-.7 2.1 2.1-.7.7-2.1-2.1zm10.6 10.6l.7-.7 2.1 2.1-.7.7-2.1-2.1zM18.4 5.6l2.1 2.1-.7.7-2.1-2.1.7-.7zM7.7 16.2l2.1 2.1-.7.7-2.1-2.1.7-.7z"/></svg>',
    microscope: '<svg viewBox="0 0 24 24"><path d="M9 20h10v2H7a3 3 0 01-3-3v-2h2v2a1 1 0 001 1h2zM11 2h2v3h-2V2zM6 6h8v1H6V6zm3 2h2v6l3 3v1H7v-1l3-3V8z"/></svg>',
    globe: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 6h-3.1a15 15 0 00-1.3-3.3A8 8 0 0118.9 8zM12 4c.8 1 1.5 2.3 1.9 4h-3.8c.4-1.7 1.1-3 1.9-4zM7.5 4.7A15 15 0 006.2 8H3.1a8 8 0 014.4-3.3zM3 10h3.2a17 17 0 000 4H3a8 8 0 010-4zm.1 6h3.1a15 15 0 001.3 3.3A8 8 0 013.1 16zM12 20c-.8-1-1.5-2.3-1.9-4h3.8c-.4 1.7-1.1 3-1.9 4zm4.5-3.3A15 15 0 0017.9 16h3.1a8 8 0 01-4.5 3.3zM17.8 14a17 17 0 000-4H21a8 8 0 010 4h-3.2z"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M3 21V6l9-4 9 4v15h-8v-6h-2v6H3zm4-12h2V7H7v2zm0 4h2v-2H7v2zm0 4h2v-2H7v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2z"/></svg>',
    search: '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 10-.7.7l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-1 14H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V6h10v2z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.2 3.8 21.2 3.4 22 3 23 4 23c1 0 8-1 11-6 2-3.3 2-6 2-9zm-1.1 4.9C14.5 16 11.7 19 7 20.4c2.6-4.3 5.7-7.4 9.9-8.7z"/></svg>',
    person: '<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'
  };

  /* ---------- Renderers ---------- */
  function researchCardHTML(r) {
    const d = r[cur()] || r.en;
    return `<article class="card research-card reveal">
      <div class="rc-img" style="background-image:url('${r.img}')">
        <div class="rc-icon">${ICONS[r.icon] || ICONS.flask}</div>
      </div>
      <div class="card-body">
        <div class="tagline">${d.tag}</div>
        <h3 class="h3">${d.t}</h3>
        <p>${d.d}</p>
      </div>
    </article>`;
  }

  function memberHTML(m) {
    return `<article class="member reveal">
      <div class="avatar" style="background:linear-gradient(135deg,${m.color},${m.color}bb)">${m.initials}</div>
      <h4>${m.name}</h4>
      <div class="role">${t(m.role)}</div>
      <div class="meta">${t(m.meta)}</div>
      ${m.year ? `<span class="year">${m.year}</span>` : ''}
    </article>`;
  }

  function newsItemHTML(n, compact) {
    return `<article class="news-item reveal">
      <div class="news-date"><div class="d">${n.d}</div><div class="m">${n.m}</div><div class="y">${n.y}</div></div>
      <div class="news-content">
        <span class="badge">${t(n.badge)}</span>
        <h3>${t(n.title)}</h3>
        ${compact ? '' : `<p>${t(n.desc)}</p>`}
      </div>
    </article>`;
  }

  function pubHTML(p) {
    const doiLink = p.doi ? `https://doi.org/${p.doi}` : 'https://scholar.google.com/citations?user=w2y0FVIAAAAJ';
    return `<article class="pub reveal">
      <div class="jbadge">${p.journal}</div>
      <div class="pbody">
        <div class="ptitle">${t(p.title)} ${p.highlight ? '<span class="pill hl" style="vertical-align:middle;margin-left:6px"><span class="en">Highlight</span><span class="zh">亮点</span></span>' : ''}</div>
        <div class="pauthors">${p.authors}</div>
        <div class="pmeta">${p.meta}</div>
        <div class="plinks"><a class="pill" href="${doiLink}" target="_blank" rel="noopener">DOI / <span class="en">Full text</span><span class="zh">全文</span> ↗</a></div>
      </div>
    </article>`;
  }

  function openingHTML(o) {
    return `<div class="opening reveal">
      <h3><span class="dot"></span>${t(o.title)}</h3>
      <p>${t(o.desc)}</p>
      <ul>${(t(o.items) || []).map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
  }

  function resourceHTML(r) {
    return `<a class="resource reveal" href="${r.url}" target="_blank" rel="noopener">
      <div class="ricon">${ICONS[r.icon] || ICONS.globe}</div>
      <div><h4>${t(r.title)}</h4><p>${t(r.desc)}</p></div>
      <span class="arrow">↗</span>
    </a>`;
  }

  function eventHTML(e, i) {
    return `<div class="tile ${i === 0 ? 'big' : ''}" style="background-image:url('${e.img}')"><div class="cap">${t(e.title)}</div></div>`;
  }

  /* ---------- Populate static text ---------- */
  function fillStatic() {
    $('#topAddrEn').textContent = SITE.affiliation.en;
    $('#topAddrZh').textContent = SITE.affiliation.zh;
    $('#topEmail').textContent = SITE.email;
  }

  /* ---------- Render all dynamic content ---------- */
  function renderAll() {
    // home research (first 4)
    $('#homeResearch').innerHTML = RESEARCH.map(researchCardHTML).join('');
    // home news (first 3, compact)
    $('#homeNews').innerHTML = NEWS.slice(0, 3).map(n => newsItemHTML(n, true)).join('');

    // PI
    const pi = MEMBERS.find(m => m.type === 'pi');
    $('#piCard').innerHTML = `
      <div class="pi-photo"><img src="${pi.photo}" alt="Prof. Yaxuan Jing"><span class="mono" style="display:none">${pi.initials}</span></div>
      <div class="pi-info">
        <h3>Prof. Yaxuan Jing 景亚轩</h3>
        <div class="role en">Associate Professor · Distinguished Research Fellow · Ph.D. Supervisor · ${SITE.institute.en}</div>
        <div class="role zh">副教授 · 特聘研究员 · 博士生导师 · ${SITE.institute.zh}</div>
        <p class="zh">景亚轩，独立 PI，副教授、特聘研究员、博士生导师。华东理工大学应用化学学士、工业催化博士（导师：王艳芹教授），新加坡国立大学化学工程联合培养博士（导师：颜宁教授），上海市超级博士后。主要研究方向为多相催化、废塑料降解、生物质转化、废弃资源循环。</p>
        <p class="en">Prof. Yaxuan Jing is an independent PI, Associate Professor and Distinguished Research Fellow at Nanjing University. He received his B.Sc. in Applied Chemistry and Ph.D. in Industrial Catalysis from East China University of Science and Technology (advisor: Prof. Yanqin Wang), with joint doctoral training at the National University of Singapore (advisor: Prof. Ning Yan), followed by a Shanghai Super Postdoctoral Fellowship.</p>
        <p class="zh">以第一/通讯作者发表论文 30 余篇，包括 Nat. Commun.（2 篇）、Chem、Angew.（3 篇）、Energy Environ. Sci.、Nat. Rev. Chem.、Acc. Chem. Res.、ACS Catal.（9 篇）等。主持国家级（面上、青年）、省部级、企业项目及教改项目 8 项。入选全球前 2% 顶尖科学家榜单（2025–2026）。</p>
        <p class="en">He has authored 30+ papers as first/corresponding author in Nat. Commun., Chem, Angew., Energy Environ. Sci., Nat. Rev. Chem., Acc. Chem. Res. and ACS Catal. He leads 8 national, provincial and industry-funded projects and was named among the World's Top 2% Scientists (2025–2026).</p>
        <p class="zh">获 WSETC Early Career Award、IChemE & CCST Young Investigator Award、石化联合会可持续发展青年创新奖、江苏省青年科技人才托举工程、南京大学绿叶奖教金等荣誉十余项，并担任 EcoEnergy、Green Carbon 等期刊青年编委。</p>
        <div class="tags">
          <a class="tagchip" href="https://scholar.google.com/citations?user=w2y0FVIAAAAJ" target="_blank" rel="noopener">Google Scholar ↗</a>
          <a class="tagchip" href="https://www.researchgate.net/profile/Yaxuan-Jing" target="_blank" rel="noopener">ResearchGate ↗</a>
          <a class="tagchip" href="https://orcid.org/0000-0002-9747-3044" target="_blank" rel="noopener">ORCID ↗</a>
          <a class="tagchip" href="https://x.com/JingYaxuan" target="_blank" rel="noopener">Twitter ↗</a>
        </div>
      </div>`;

    // members (non-PI)
    $('#memberGrid').innerHTML = MEMBERS.filter(m => m.type !== 'pi').map(memberHTML).join('');
    // alumni
    $('#alumniList').innerHTML = ALUMNI.map(a => `<div class="alum reveal"><h5>${t(a.name)}</h5><p>${t(a.info)}</p></div>`).join('');
    // research page
    $('#researchPage').innerHTML = RESEARCH.map(researchCardHTML).join('');
    // publications
    $('#pubList').innerHTML = Object.keys(PUBLICATIONS).sort((a,b)=>b-a).map(y =>
      `<div class="year-block reveal"><div class="year-head"><span class="y">${y}</span><span class="line"></span></div>${PUBLICATIONS[y].map(pubHTML).join('')}</div>`
    ).join('');
    // news page
    $('#newsPage').innerHTML = NEWS.map(n => newsItemHTML(n, false)).join('');
    // culture / events
    $('#eventGrid').innerHTML = EVENTS.map(eventHTML).join('');
    // openings
    $('#openingList').innerHTML = OPENINGS.map(openingHTML).join('');
    // resources
    $('#resourceList').innerHTML = RESOURCES.map(resourceHTML).join('');

    observeReveals();
  }

  /* ---------- Scroll reveal ---------- */
  let observer;
  function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
    }, { threshold: 0.08 });
    $$('.reveal').forEach(el => {
      // only observe elements in visible page
      if (el.getClientRects().length) observer.observe(el);
    });
  }

  /* ---------- Routing ---------- */
  let currentPage = 'home';
  function showPage(page) {
    const target = $('#' + page);
    if (!target) return;
    $$('.page').forEach(p => { p.style.display = 'none'; });
    target.style.display = 'block';
    currentPage = page;
    $$('#menu a[data-page], .brand[data-page]').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(observeReveals, 30);
  }

  function handleNavLink(a) {
    const page = a.dataset.page;
    if (!page) return;
    if (location.hash !== '#' + page) history.pushState(null, '', '#' + page);
    showPage(page);
    $('#menu').classList.remove('open');
    $$('.has-sub').forEach(s => s.classList.remove('open-sub'));
  }

  /* ---------- i18n ---------- */
  function setLang(lang) {
    document.body.classList.toggle('lang-zh', lang === 'zh');
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang;
    $$('#langSwitch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('jg-lang', lang); } catch (e) {}
    // re-render dynamic content in new language
    renderAll();
    // re-observe current page reveals
    setTimeout(observeReveals, 30);
  }

  /* ---------- Wire up events ---------- */
  function init() {
    fillStatic();
    // restore language
    let saved = 'en';
    try { saved = localStorage.getItem('jg-lang') || 'en'; } catch (e) {}
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add(saved === 'zh' ? 'lang-zh' : 'lang-en');
    $$('#langSwitch button').forEach(b => b.classList.toggle('active', b.dataset.lang === saved));

    renderAll();

    // language buttons
    $$('#langSwitch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

    // nav links
    $$('[data-page]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); handleNavLink(a); }));

    // mobile submenu toggles (click on top label)
    $$('.has-sub .top').forEach(top => top.addEventListener('click', () => {
      top.parentElement.classList.toggle('open-sub');
    }));

    // mobile menu toggle
    $('#menuToggle').addEventListener('click', () => $('#menu').classList.toggle('open'));

    // browser back/forward
    window.addEventListener('popstate', () => {
      const p = location.hash.replace('#','') || 'home';
      showPage(p);
    });

    // initial route
    const initial = location.hash.replace('#','') || 'home';
    showPage(initial);

    document.documentElement.classList.add('ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
