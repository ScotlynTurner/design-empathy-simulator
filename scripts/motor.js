const toggle = document.getElementById("tremorToggle");
const intensityRange = document.getElementById("intensityRange");
const intensityOutput = document.getElementById("intensityOutput");
const statusBadge = document.getElementById("statusBadge");
const motorCursor = document.getElementById("motorCursor");

const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};

let animationFrame = null;
let pointerInWindow = false;
const seed = Math.random() * 1000;

function updateIntensityLabel() {
    intensityOutput.textContent = `${intensityRange.value} px`;
}

function setCursorPosition(x, y) {
    motorCursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
}

function animateTremor(time) {
    if (!toggle.checked) {
        animationFrame = null;
        return;
    }

    const intensity = Number(intensityRange.value);
    const fastX = Math.sin(time * 0.045 + seed) * intensity * 0.52;
    const fastY = Math.cos(time * 0.052 + seed) * intensity * 0.52;
    const slowX = Math.sin(time * 0.012 + seed * 0.4) * intensity * 0.48;
    const slowY = Math.cos(time * 0.015 + seed * 0.7) * intensity * 0.48;
    const randomX = (Math.random() - 0.5) * intensity * 0.35;
    const randomY = (Math.random() - 0.5) * intensity * 0.35;

    setCursorPosition(
        pointer.x + fastX + slowX + randomX,
        pointer.y + fastY + slowY + randomY
    );

    animationFrame = requestAnimationFrame(animateTremor);
}

function syncSimulationState() {
    document.body.classList.toggle("simulation-on", toggle.checked);
    statusBadge.textContent = toggle.checked ? "On" : "Off";

    if (toggle.checked) {
        if (!pointerInWindow) {
            pointer.x = window.innerWidth / 2;
            pointer.y = window.innerHeight / 2;
        }

        if (animationFrame === null) {
            animationFrame = requestAnimationFrame(animateTremor);
        }

        return;
    }

    if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    }

    setCursorPosition(pointer.x, pointer.y);
}

document.addEventListener("pointermove", (event) => {
    pointerInWindow = true;
    pointer.x = event.clientX;
    pointer.y = event.clientY;

    if (!toggle.checked) {
        setCursorPosition(pointer.x, pointer.y);
    }
});

document.addEventListener("pointerleave", () => {
    pointerInWindow = false;
});

toggle.addEventListener("change", syncSimulationState);
intensityRange.addEventListener("input", updateIntensityLabel);

updateIntensityLabel();
setCursorPosition(pointer.x, pointer.y);
