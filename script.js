let eyesOpen = false; // track whether eyes are open

// When clicked, toggle open/close state
document.body.addEventListener('click', () => {
  const eyes = document.querySelectorAll('.eye');
  eyesOpen = !eyesOpen; // toggle state

  eyes.forEach(eye => {
    if (eyesOpen) {
      eye.classList.add('open');
    } else {
      eye.classList.remove('open');
    }
  });

  console.log(eyesOpen ? "Eyes opened" : "Eyes closed");
});

// Move pupils with mouse when eyes are open
document.body.addEventListener('mousemove', (event) => {
  if (!eyesOpen) return; // only move when open

  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = event.clientX - eyeCenterX;
    const dy = event.clientY - eyeCenterY;

    const maxDistance = 5;
    const distance = Math.min(maxDistance, Math.sqrt(dx * dx + dy * dy) / 10);

    const angle = Math.atan2(dy, dx);
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
