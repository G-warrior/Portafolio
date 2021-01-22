//const sidebar = document.querySelector('.sidebar');
const sidebar = document.getElementById('sidebar');
const btnMenu = document.querySelector('.header__toggleMenu');

btnMenu.addEventListener('click',toggleMenu);

function toggleMenu(){
	sidebar.classList.toggle('show');
}
