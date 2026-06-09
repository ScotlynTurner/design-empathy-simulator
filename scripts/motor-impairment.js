const fakeCursor = document.getElementById('fakeCursor');
const clickMarker = document.getElementById('clickMarker');
const status = document.getElementById('status');
const tremorSlider = document.getElementById('tremorSlider');
const presetButtons = [...document.querySelectorAll('[data-preset]')];

let tremorAmount = 0;
let mouseX = 0;
let mouseY = 0;

const presets = {
    mild: { tremor: 3 },
    moderate: { tremor: 8 },
    severe: { tremor: 16 }
};

function setStatus(message) {
    status.textContent = message;
}

function applyPreset(name) {
    const preset = presets[name];
    if (!preset) return;
    tremorAmount = preset.tremor;
    tremorSlider.value = tremorAmount;
    setStatus(`${name.charAt(0).toUpperCase() + name.slice(1)} preset applied.`);
}

presetButtons.forEach((button) => {
    button.addEventListener('click', () => applyPreset(button.dataset.preset));
});

tremorSlider.addEventListener('input', () => {
    tremorAmount = Number(tremorSlider.value);
    setStatus(`Tremor strength: ${tremorAmount}px`);
});

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const shakeX = (Math.random() - 0.5) * tremorAmount * 2;
    const shakeY = (Math.random() - 0.5) * tremorAmount * 2;
    fakeCursor.style.left = `${mouseX + shakeX}px`;
    fakeCursor.style.top = `${mouseY + shakeY}px`;
    requestAnimationFrame(animateCursor);
}

function showMarker(x, y) {
    clickMarker.style.display = 'block';
    clickMarker.style.left = `${x - 6}px`;
    clickMarker.style.top = `${y - 6}px`;
    clearTimeout(clickMarker.timer);
    clickMarker.timer = setTimeout(() => {
        clickMarker.style.display = 'none';
    }, 250);
}

document.addEventListener('click', (e) => {
    if (e.target.dataset.simulatedClick) return;
    if (tremorAmount === 0) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const offsetX = (Math.random() - 0.5) * tremorAmount * 2;
    const offsetY = (Math.random() - 0.5) * tremorAmount * 2;
    const clickX = e.clientX + offsetX;
    const clickY = e.clientY + offsetY;

    showMarker(clickX, clickY);
}, true);

document.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.closest('.controls')) return;
        setStatus(`Clicked: ${btn.textContent.trim()}`);
    });
});

animateCursor();
applyPreset('mild');