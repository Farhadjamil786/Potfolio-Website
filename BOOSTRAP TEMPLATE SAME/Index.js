const spanElement = document.getElementById('changingSpan');
const words = ["Webdeveloper", "Farhad Satti"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  const updatedText = currentWord.substring(0, charIndex);
  spanElement.textContent = updatedText;

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
