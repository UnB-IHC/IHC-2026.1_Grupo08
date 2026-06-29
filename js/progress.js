(function () {
  "use strict";
  var STORAGE_KEY = "verificaAAA_progress_v1";
  var SECTIONS = [
    { id: "gestao", match: "guia_gestao", label: "Gestão de Projetos" },
    { id: "desenvolvimento", match: "guia_desenvolvimento", label: "Desenvolvimento" },
    { id: "design", match: "guia_design", label: "Design" },
    { id: "conteudo", match: "guia_conteudo", label: "Conteúdo" }
  ];
  var CIRCLE_R = 42;
  var CIRCLE_C = 2 * Math.PI * CIRCLE_R;
  function loadStore() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveStore(store) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch (e) {}
  }
  function colorFor(pct) {
    var hue = Math.round((pct / 100) * 120);
    return "hsl(" + hue + ", 75%, 45%)";
  }
  function currentSection() {
    var path = window.location.pathname;
    for (var i = 0; i < SECTIONS.length; i++) {
      if (path.indexOf(SECTIONS[i].match) !== -1) return SECTIONS[i];
    }
    return null;
  }
  function getCheckboxes() {
    return Array.prototype.slice.call(
      document.querySelectorAll(
        ".md-content article li.task-list-item input[type='checkbox']"
      )
    );
  }
  function buildRing(opts) {
    opts = opts || {};
    var size = opts.size || "circle";
    var root = document.createElement("div");
    root.className = "vaaa-ring vaaa-ring--" + size;
    var svgNS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    var track = document.createElementNS(svgNS, "circle");
    track.setAttribute("class", "vaaa-ring__track");
    track.setAttribute("cx", "50");
    track.setAttribute("cy", "50");
    track.setAttribute("r", String(CIRCLE_R));
    var bar = document.createElementNS(svgNS, "circle");
    bar.setAttribute("class", "vaaa-ring__bar");
    bar.setAttribute("cx", "50");
    bar.setAttribute("cy", "50");
    bar.setAttribute("r", String(CIRCLE_R));
    bar.setAttribute("transform", "rotate(-90 50 50)");
    bar.setAttribute("stroke-dasharray", String(CIRCLE_C));
    bar.setAttribute("stroke-dashoffset", String(CIRCLE_C));
    svg.appendChild(track);
    svg.appendChild(bar);
    var label = document.createElement("div");
    label.className = "vaaa-ring__label";
    var pct = document.createElement("span");
    pct.className = "vaaa-ring__pct";
    pct.textContent = "0%";
    var count = document.createElement("span");
    count.className = "vaaa-ring__count";
    count.textContent = "0/0";
    label.appendChild(pct);
    label.appendChild(count);
    root.appendChild(svg);
    root.appendChild(label);
    return { root: root, bar: bar, pct: pct, count: count };
  }
  function updateRing(ring, checked, total) {
    var pct = total ? Math.round((checked / total) * 100) : 0;
    var color = colorFor(pct);
    ring.bar.setAttribute("stroke-dashoffset", String(CIRCLE_C * (1 - pct / 100)));
    ring.bar.style.stroke = color;
    ring.pct.textContent = pct + "%";
    ring.pct.style.color = color;
    ring.count.textContent = checked + "/" + total;
    if (ring.root) {
      ring.root.setAttribute("aria-label", "Progresso: " + pct + " por cento, " + checked + " de " + total + " itens.");
    }
  }
  function removeFloating() {
    var existing = document.querySelector(".vaaa-floating");
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
  }
  function initChecklistPage(section) {
    var checkboxes = getCheckboxes();
    if (!checkboxes.length) return;
    var store = loadStore();
    var saved = store[section.id] && store[section.id].items ? store[section.id].items : {};
    checkboxes.forEach(function (cb, i) {
      cb.disabled = false;
      cb.checked = !!saved[i];
    });
    var floating = document.createElement("div");
    floating.className = "vaaa-floating";
    floating.setAttribute("role", "status");
    floating.setAttribute("aria-live", "polite");
    var ring = buildRing({ size: "circle" });
    floating.appendChild(ring.root);
    document.body.appendChild(floating);
    function update() {
      var total = checkboxes.length;
      var checked = checkboxes.filter(function (c) { return c.checked; }).length;
      var s = loadStore();
      var items = {};
      checkboxes.forEach(function (c, i) { if (c.checked) items[i] = true; });
      s[section.id] = { label: section.label, total: total, checked: checked, items: items };
      saveStore(s);
      updateRing(ring, checked, total);
    }
    checkboxes.forEach(function (cb) {
      cb.addEventListener("change", update);
    });
    update();
  }
  function initResultPage(container) {
    var store = loadStore();
    container.innerHTML = "";
    var totalAll = 0;
    var checkedAll = 0;
    var overall = document.createElement("div");
    overall.className = "vaaa-overall";
    var overallRing = buildRing({ size: "big" });
    var overallTitle = document.createElement("h2");
    overallTitle.textContent = "Resultado Geral";
    overall.appendChild(overallTitle);
    overall.appendChild(overallRing.root);
    container.appendChild(overall);
    var grid = document.createElement("div");
    grid.className = "vaaa-grid";
    SECTIONS.forEach(function (section) {
      var data = store[section.id] || { total: 0, checked: 0 };
      var total = data.total || 0;
      var checked = data.checked || 0;
      totalAll += total;
      checkedAll += checked;
      var card = document.createElement("div");
      card.className = "vaaa-card";
      var ring = buildRing({ size: "circle" });
      card.appendChild(ring.root);
      var title = document.createElement("div");
      title.className = "vaaa-card__title";
      title.textContent = section.label;
      card.appendChild(title);
      if (!total) {
        var hint = document.createElement("div");
        hint.className = "vaaa-card__hint";
        hint.textContent = "Seção ainda não iniciada";
        card.appendChild(hint);
      }
      grid.appendChild(card);
      updateRing(ring, checked, total);
    });
    container.appendChild(grid);
    updateRing(overallRing, checkedAll, totalAll);
    var actions = document.createElement("div");
    actions.className = "vaaa-actions";
    var reset = document.createElement("button");
    reset.type = "button";
    reset.className = "md-button vaaa-reset";
    reset.textContent = "Limpar progresso";
    reset.addEventListener("click", function () {
      if (window.confirm("Deseja apagar todo o progresso salvo do checklist?")) {
        saveStore({});
        initResultPage(container);
      }
    });
    actions.appendChild(reset);
    container.appendChild(actions);
  }
  function boot() {
    removeFloating();
    var resultContainer = document.getElementById("verificaaaa-resultado");
    if (resultContainer) {
      initResultPage(resultContainer);
      return;
    }
    var section = currentSection();
    if (section) {
      initChecklistPage(section);
    }
  }
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(boot);
  } else if (document.readyState !== "loading") {
    boot();
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
