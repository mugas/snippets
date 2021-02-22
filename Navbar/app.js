const menu = document.querySelector('.hide-menu');
const navbar = document.querySelector('.navbar-hidden');
const containerFour = document.querySelector('.container__four');

/* containerFour.forEach(eachElement => {
  console.log(eachElement);
}); */

menu.addEventListener('click', () => {
  // menu.classList.toggle('hide-menu-hidden');
  navbar.classList.add('hidden-menu');
  containerFour.classList.toggle('container__four-show');
});
