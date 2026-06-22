const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');
const modeButtons = document.querySelectorAll('.mode-btn');
const modeLabel = document.querySelector('#modeLabel');
const bioMeter = document.querySelector('#bioMeter');
const aiMeter = document.querySelector('#aiMeter');
const bioText = document.querySelector('#bioText');
const aiText = document.querySelector('#aiText');
const objectiveText = document.querySelector('#objectiveText');
const terminalText = document.querySelector('#terminalText');
const form = document.querySelector('.cta-form');
const formMessage = document.querySelector('.form-message');
const neuralCount = document.querySelector('#neuralCount');

const modes = {
  rescue: {
    label: 'RESCUE MODE',
    bio: '92%',
    ai: '86%',
    objective: 'Locate survivors, map safe path, and stabilize rescue route.',
    terminal: '> mission package loaded: rescue navigation.'
  },
  defense: {
    label: 'DEFENSE MODE',
    bio: '88%',
    ai: '94%',
    objective: 'Detect risks, strengthen perimeter awareness, and prioritize alerts.',
    terminal: '> mission package loaded: defense shield.'
  },
  medical: {
    label: 'MEDICAL MODE',
    bio: '97%',
    ai: '82%',
    objective: 'Track vitals, identify stress spikes, and recommend recovery steps.',
    terminal: '> mission package loaded: medical support.'
  }
};

menuToggle.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedMode = modes[button.dataset.mode];

    modeButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    modeLabel.textContent = selectedMode.label;
    bioText.textContent = selectedMode.bio;
    aiText.textContent = selectedMode.ai;
    bioMeter.style.width = selectedMode.bio;
    aiMeter.style.width = selectedMode.ai;
    objectiveText.textContent = selectedMode.objective;
    terminalText.textContent = selectedMode.terminal;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Access request simulated successfully. This is a frontend demo interaction.';
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

let current = 90;
setInterval(() => {
  current = current >= 99 ? 92 : current + 1;
  neuralCount.textContent = `${current}%`;
}, 1200);
