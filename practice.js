function navigo() {
  const header = document.querySelector('header');
  const headerheight = header.clientHeight;
  document.addEventListener('scroll', onScroll, { passive: true });
  function onScroll() {
    const scrollposition = pageYOffset;
    const nav = document.querySelector('nav');
    if (headerheight <= scrollposition) {
      nav.classList.add('fix');
    } else {
      nav.classList.remove('fix');
    }
  }
}
navigo();

const button__float = document.querySelector('.button__float');
let lastScrollY = 0;

function scrollEvent(event) {
  const STANDARD = 30;

  if (window.scrollY > STANDARD) {
    button__floatt.classList.add('show');
  } else {
    button__float.classList.remove('show');
  }

  if (window.scrollY > lastScrollY) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }

  lastScrollY = window.scrollY;
}

function moveTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener('mousemove', moveCursor);
