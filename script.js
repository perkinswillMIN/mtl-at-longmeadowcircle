function navToggle() {
  var element = document.querySelector('.site-nav');
  element.classList.toggle("nav-open");
  var navIcon = document.querySelector('#menu-icon');
  navIcon.classList.toggle('fa-times');
  navIcon.classList.toggle('fa-bars');
}

document.getElementById("menu-icon").onclick = navToggle;


fa-times