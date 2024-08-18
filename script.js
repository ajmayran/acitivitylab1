const pencil = document.getElementById('pencil');
let moving = false;
let speed = 5; 

pencil.addEventListener('click', () => {
  if (!moving) {
    moving = true;
    const startPosition = pencil.offsetLeft;
    const endPosition = startPosition + 100 * speed; // Adjust distance as needed

    const animate = () => {
      const now = Date.now();
      const startTime = animate.startTime || now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (10000/ speed), 1); // Animation duration

      pencil.style.left = `${startPosition + progress * (endPosition - startPosition)}px`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        moving = false;
      }
    };

    animate.startTime = Date.now();
    requestAnimationFrame(animate);
  }
});

function setSpeed(newSpeed) {
    speed = newSpeed;
  }
