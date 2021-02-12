const menuToggle = document.querySelector('.toggle');
const headerArea = document.querySelector('.header-area');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    headerArea.classList.toggle('active')
})