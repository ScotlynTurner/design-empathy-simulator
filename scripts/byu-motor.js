const motorToggle = document.getElementById("motorToggle");
const motorStatus = document.getElementById("motorStatus");
const intensityControl = document.querySelector(".intensity-control");
const jitterStrength = 18;
const clickDelay = 300;

const shakeIntensity = document.getElementById("shakeIntensity");
const shakeIntensityValue = document.getElementById("shakeIntensityValue");
let motorImpairmentActive = true;
let clickDelayActive = false;
let fakeCursor = null;

let realMouseX = 0;
let realMouseY = 0;
let fakeMouseX = 0;
let fakeMouseY = 0;

let intensityMultiplier = Number(shakeIntensity.value);


document.body.classList.add("motor-impairment-active");

motorToggle.textContent = "Turn Off Motor Impairment Simulation";
motorStatus.textContent =
  "Simulation is on: cursor movement is shaky and clicks may miss or be delayed.";

intensityControl.style.display = "flex";

createFakeCursor();

motorToggle.addEventListener("click", () => {
  motorImpairmentActive = !motorImpairmentActive;

  document.body.classList.toggle("motor-impairment-active", motorImpairmentActive);

  if (motorImpairmentActive) {
    motorToggle.textContent = "Turn Off Motor Impairment Simulation";
    motorStatus.textContent =
      "Simulation is on: cursor movement is shaky and clicks may miss.";
    intensityControl.style.display = "flex";
    createFakeCursor();
  } else {
    motorToggle.textContent = "Turn On Motor Impairment Simulation";
    motorStatus.textContent = "Simulation is currently off.";
    intensityControl.style.display = "none";
    removeFakeCursor();
  }
});

document.addEventListener("mousemove", event => {
  realMouseX = event.clientX;
  realMouseY = event.clientY;
});

shakeIntensity.addEventListener("input", updateIntensityLabel);

let jerkOffsetX = 0;
let jerkOffsetY = 0;
let lastJerkTime = 0;

function animateFakeCursor() {
  if (motorImpairmentActive && fakeCursor) {
    const time = performance.now() / 1000;

    const smoothAmount = intensityMultiplier * 0.8;
    const jerkAmount = intensityMultiplier * 1.15;
    const jerkSpeed = 120 - intensityMultiplier * 12;

    const tremorX =
      Math.sin(time * 20) * smoothAmount +
      Math.sin(time * 33) * (smoothAmount * 0.45);

    const tremorY =
      Math.cos(time * 18) * smoothAmount +
      Math.sin(time * 31) * (smoothAmount * 0.45);

    if (performance.now() - lastJerkTime > jerkSpeed) {
      jerkOffsetX = Math.random() * (jerkAmount * 2) - jerkAmount;
      jerkOffsetY = Math.random() * (jerkAmount * 2) - jerkAmount;
      lastJerkTime = performance.now();
    }

    fakeMouseX = realMouseX + tremorX + jerkOffsetX;
    fakeMouseY = realMouseY + tremorY + jerkOffsetY;

    fakeCursor.style.left = `${fakeMouseX}px`;
    fakeCursor.style.top = `${fakeMouseY}px`;
  }

  requestAnimationFrame(animateFakeCursor);
}

animateFakeCursor();

document.addEventListener(
  "click",
  event => {
    if (!motorImpairmentActive) {
      return;
    }

    const clickableElement = event.target.closest(
      "a, button, input, select, label, .program-card"
    );

    if (!clickableElement) {
      return;
    }

    if (clickableElement.id === "motorToggle") {
      return;
    }

    if (clickDelayActive) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    const clickWasAccurate = fakeCursorIsOverElement(clickableElement);

    if (!clickWasAccurate) {
      showClickMissMessage();
      return;
    }

    clickDelayActive = true;
    showClickDelayMessage();

    setTimeout(() => {
      clickDelayActive = false;
      activateElement(clickableElement);
    }, clickDelay);
  },
  true
);

function fakeCursorIsOverElement(element) {
  const rect = element.getBoundingClientRect();
  const tolerance = 4;

  return (
    fakeMouseX >= rect.left - tolerance &&
    fakeMouseX <= rect.right + tolerance &&
    fakeMouseY >= rect.top - tolerance &&
    fakeMouseY <= rect.bottom + tolerance
  );
}

function activateElement(element) {
  if (element.tagName === "LABEL") {
    const inputInsideLabel = element.querySelector("input");

    if (inputInsideLabel) {
      inputInsideLabel.checked = true;
      inputInsideLabel.focus();
      inputInsideLabel.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    const labelFor = element.getAttribute("for");

    if (labelFor) {
      const connectedInput = document.getElementById(labelFor);

      if (connectedInput) {
        connectedInput.checked = true;
        connectedInput.focus();
        connectedInput.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    return;
  }

  if (element.tagName === "A" && element.href) {
    window.location.href = element.href;
    return;
  }

  if (element.tagName === "BUTTON") {
    element.focus();
    element.click();
    return;
  }

  if (element.tagName === "INPUT") {
    element.focus();

    if (element.type === "radio" || element.type === "checkbox") {
      element.checked = true;
      element.dispatchEvent(new Event("change", { bubbles: true }));
    }

    return;
  }

  if (element.tagName === "SELECT") {
    element.focus();
    return;
  }

  if (element.classList.contains("program-card")) {
    element.focus();
  }
}
function createFakeCursor() {
  if (fakeCursor) {
    return;
  }

  fakeCursor = document.createElement("div");
  fakeCursor.className = "fake-motor-cursor";
  document.body.appendChild(fakeCursor);
}

function removeFakeCursor() {
  if (fakeCursor) {
    fakeCursor.remove();
    fakeCursor = null;
  }
}

function showClickDelayMessage() {
  const existingMessage = document.querySelector(".click-delay-message");

  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement("div");
  message.className = "click-delay-message";
  message.textContent = "Click delayed by motor impairment simulation";

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 900);
}

function showClickMissMessage() {
  const existingMessage = document.querySelector(".click-miss-message");

  if (existingMessage) {
    existingMessage.remove();
  }

  const message = document.createElement("div");
  message.className = "click-miss-message";
  message.textContent = "Click missed. Try again.";

  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 900);
}

function updateIntensityLabel() {
  const labels = {
    1: "Very Low",
    2: "Very Low",
    3: "Low",
    4: "Low",
    5: "Medium",
    6: "Medium",
    7: "High",
    8: "High",
    9: "Very High",
    10: "Very High"
  };

  intensityMultiplier = Number(shakeIntensity.value);
  shakeIntensityValue.textContent = labels[intensityMultiplier];
}