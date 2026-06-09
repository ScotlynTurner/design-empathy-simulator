const presets = {
  mild: {
    label: "Mild low vision",
    blur: 0.6,
    contrast: 82,
    brightness: 105,
    saturate: 92,
    glare: 6,
    vignette: 4,
    tunnel: 0,
    scotoma: 0,
    zoom: 100,
  },
  moderate: {
    label: "Moderate low vision",
    blur: 1.4,
    contrast: 65,
    brightness: 110,
    saturate: 84,
    glare: 14,
    vignette: 10,
    tunnel: 0,
    scotoma: 0,
    zoom: 100,
  },
  severe: {
    label: "Severe low vision",
    blur: 2.4,
    contrast: 48,
    brightness: 115,
    saturate: 72,
    glare: 24,
    vignette: 18,
    tunnel: 0,
    scotoma: 0,
    zoom: 102,
  },
  cataracts: {
    label: "Cataracts / glare",
    blur: 2.2,
    contrast: 55,
    brightness: 125,
    saturate: 78,
    glare: 34,
    vignette: 10,
    tunnel: 0,
    scotoma: 0,
    zoom: 100,
  },
  macular: {
    label: "Macular degeneration",
    blur: 1.0,
    contrast: 72,
    brightness: 108,
    saturate: 90,
    glare: 8,
    vignette: 8,
    tunnel: 0,
    scotoma: 1,
    zoom: 100,
  }
};

const elements = {
  simulationLayer: document.getElementById("simulationLayer"),
  overlayLayer: document.getElementById("overlayLayer"),
  normalModeBtn: document.getElementById("normalModeBtn"),
  lowVisionModeBtn: document.getElementById("lowVisionModeBtn"),
  presetButtons: [...document.querySelectorAll(".preset-btn")],
  currentPresetLabel: document.getElementById("currentPresetLabel"),
  toggleControlsBtn: document.getElementById("toggleControlsBtn"),
  controls: document.querySelector(".controls"),
  blur: document.getElementById("blur"),
  contrast: document.getElementById("contrast"),
  brightness: document.getElementById("brightness"),
  saturate: document.getElementById("saturate"),
  glare: document.getElementById("glare"),
  vignette: document.getElementById("vignette"),
  tunnel: document.getElementById("tunnel"),
  scotoma: document.getElementById("scotoma"),
  zoom: document.getElementById("zoom"),
  blurValue: document.getElementById("blurValue"),
  contrastValue: document.getElementById("contrastValue"),
  brightnessValue: document.getElementById("brightnessValue"),
  saturateValue: document.getElementById("saturateValue"),
  glareValue: document.getElementById("glareValue"),
  vignetteValue: document.getElementById("vignetteValue"),
  tunnelValue: document.getElementById("tunnelValue"),
  scotomaValue: document.getElementById("scotomaValue"),
  zoomValue: document.getElementById("zoomValue"),
};

let currentPreset = "moderate";
let customMode = false;
let lowVisionMode = true;

function applyPreset(name) {
  const preset = presets[name];
  currentPreset = name;
  customMode = false;

  elements.currentPresetLabel.textContent = preset.label;

  elements.blur.value = preset.blur;
  elements.contrast.value = preset.contrast;
  elements.brightness.value = preset.brightness;
  elements.saturate.value = preset.saturate;
  elements.glare.value = preset.glare;
  elements.vignette.value = preset.vignette;
  elements.tunnel.value = preset.tunnel;
  elements.scotoma.value = preset.scotoma;
  elements.zoom.value = preset.zoom;

  syncPresetButtonState();
  updateLabels();
  updateSimulation();
}

function syncPresetButtonState() {
  elements.presetButtons.forEach((btn) => {
    btn.classList.toggle("active", !customMode && btn.dataset.preset === currentPreset);
  });
}

function updateLabels() {
  elements.blurValue.textContent = `${Number(elements.blur.value).toFixed(1)}px`;
  elements.contrastValue.textContent = `${elements.contrast.value}%`;
  elements.brightnessValue.textContent = `${elements.brightness.value}%`;
  elements.saturateValue.textContent = `${elements.saturate.value}%`;
  elements.glareValue.textContent = `${elements.glare.value}%`;
  elements.vignetteValue.textContent = `${elements.vignette.value}%`;
  elements.tunnelValue.textContent = `${elements.tunnel.value}%`;
  elements.scotomaValue.textContent = `${elements.scotoma.value}`;
  elements.zoomValue.textContent = `${elements.zoom.value}%`;
}

function updateSimulation() {
  const blur = Number(elements.blur.value);
  const contrast = Number(elements.contrast.value);
  const brightness = Number(elements.brightness.value);
  const saturate = Number(elements.saturate.value);
  const glare = Number(elements.glare.value);
  const vignette = Number(elements.vignette.value);
  const tunnel = Number(elements.tunnel.value);
  const scotoma = Number(elements.scotoma.value);
  const zoom = Number(elements.zoom.value);

  if (!lowVisionMode) {
    elements.simulationLayer.style.filter = "none";
    elements.simulationLayer.style.transform = "scale(1)";
    elements.overlayLayer.innerHTML = "";

    elements.normalModeBtn.classList.add("active");
    elements.lowVisionModeBtn.classList.remove("active");

    updateLabels();
    return;
  }

  elements.normalModeBtn.classList.remove("active");
  elements.lowVisionModeBtn.classList.add("active");

  elements.simulationLayer.style.filter = `
    blur(${blur}px)
    contrast(${contrast}%)
    brightness(${brightness}%)
    saturate(${saturate}%)
  `.trim();

  elements.simulationLayer.style.transform = `scale(${zoom / 100})`;

  const glareAlpha = glare / 220;
  const glareFade = glare / 180;
  const vignetteAlpha = vignette / 120;
  const tunnelAlpha = tunnel / 100;
  const scotomaAlpha = scotoma ? 0.34 : 0;

  elements.overlayLayer.innerHTML = `
    <div class="overlay-glare" style="
      background:
        radial-gradient(circle at center, rgba(255,255,255,${glareAlpha}), rgba(255,255,255,0) 38%),
        linear-gradient(to bottom, rgba(255,255,255,${glareFade}), rgba(255,255,255,0.02));
    "></div>

    <div class="overlay-vignette" style="
      background:
        radial-gradient(circle at center, rgba(255,255,255,0) 58%, rgba(15,23,42,${vignetteAlpha}));
    "></div>

    ${tunnel > 0 ? `<div class="overlay-tunnel" style="
      background: radial-gradient(circle at center, rgba(255,255,255,0) 58%, rgba(15,23,42,${tunnelAlpha}));
    "></div>` : ""}

    ${scotoma ? `<div class="overlay-scotoma" style="
      background: radial-gradient(circle at center, rgba(0,0,0,${scotomaAlpha}) 0%, rgba(0,0,0,${scotomaAlpha}) 14%, rgba(0,0,0,0) 17%);
    "></div>` : ""}
  `;

  updateLabels();
  customMode = true;
  syncPresetButtonState();
}

function hookSlider(input) {
  input.addEventListener("input", updateSimulation);
}

elements.presetButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyPreset(btn.dataset.preset));
});

[
  elements.blur,
  elements.contrast,
  elements.brightness,
  elements.saturate,
  elements.glare,
  elements.vignette,
  elements.tunnel,
  elements.scotoma,
  elements.zoom
].forEach(hookSlider);

elements.toggleControlsBtn.addEventListener("click", () => {
  document.body.classList.toggle("controls-collapsed");

  const collapsed = document.body.classList.contains("controls-collapsed");
  elements.toggleControlsBtn.textContent = collapsed ? "Show" : "Hide";
});

elements.normalModeBtn.addEventListener("click", () => {
  lowVisionMode = false;
  elements.currentPresetLabel.textContent = "Normal vision";
  updateSimulation();
});

elements.lowVisionModeBtn.addEventListener("click", () => {
  lowVisionMode = true;
  elements.currentPresetLabel.textContent = customMode
    ? "Custom low vision"
    : presets[currentPreset].label;
  updateSimulation();
});

applyPreset("moderate");