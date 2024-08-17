const initApp = () =>{
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const toogleClass = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }
    hamburgerButton.addEventListener('click', toogleClass);
    mobileMenu.addEventListener('click', toogleClass);
}

document.addEventListener('DOMContentLoaded', initApp);


