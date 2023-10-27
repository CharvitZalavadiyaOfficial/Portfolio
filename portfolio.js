var typed = new Typed(".typing", {
  strings: ["Web Developer","UI-UX Designer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Web Developer","UI-UX Designer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
});

function changeNavbarColor(container) {
    var navbar = document.getElementById('navbar');
    if (container.scrollTop > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }