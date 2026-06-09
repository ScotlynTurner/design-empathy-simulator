const modeButtons = document.querySelectorAll('#modes button');
const currentModeLabel = document.getElementById('currentModeLabel');
const strength = document.getElementById('strength');
const strengthValue = document.getElementById('strengthValue');
const simArea = document.getElementById('simArea');

const colorMatrices = {
    normal: 'none',
    protanopia: 'grayscale(0.15) sepia(0.25) saturate(0.75) hue-rotate(-18deg)',
    deuteranopia: 'grayscale(0.15) sepia(0.18) saturate(0.8) hue-rotate(10deg)',
    tritanopia: 'grayscale(0.15) sepia(0.2) saturate(0.9) hue-rotate(150deg)',
    achromatopsia: 'grayscale(1) contrast(1.05)'
};

let selectedMode = 'normal';

function applyFilter() {
    const base = colorMatrices[selectedMode];
    const strengthPercent = Number(strength.value) / 100;
    strengthValue.textContent = `${strength.value}%`;

    if (selectedMode === 'normal' || strengthPercent === 0) {
        simArea.style.setProperty('--sim-filter', 'none');
        return;
    }

    if (selectedMode === 'achromatopsia') {
        const grayAmount = strengthPercent;
        simArea.style.setProperty('--sim-filter', `grayscale(${grayAmount}) contrast(${1 + grayAmount * 0.08})`);
        return;
    }

    const blend = strengthPercent;
    const filter = `${base} contrast(${1 + blend * 0.08}) saturate(${1 - blend * 0.25})`;
    simArea.style.setProperty('--sim-filter', filter);
}

modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        modeButtons.forEach((b) => b.classList.remove('active'));
        button.classList.add('active');
        selectedMode = button.dataset.mode;
        currentModeLabel.textContent = button.textContent;
        applyFilter();
    });
});

strength.addEventListener('input', applyFilter);
applyFilter();