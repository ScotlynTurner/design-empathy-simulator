const form = document.getElementById('sampleForm');
const modalBackdrop = document.getElementById('modalBackdrop');
document.getElementById('openModal').onclick = () => modalBackdrop.classList.add('open');
document.getElementById('helpBtn').onclick = () => modalBackdrop.classList.add('open');
document.getElementById('closeModal').onclick = () => modalBackdrop.classList.remove('open');
modalBackdrop.onclick = (e) => { if (e.target === modalBackdrop) modalBackdrop.classList.remove('open'); };
document.getElementById('hideCookie').onclick = () => document.getElementById('cookie').classList.add('hidden');