function redirecionar() {
    let opcao = document.getElementById("opcao").value;
    if (opcao) {
        window.location.href = opcao;
    }
}

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.style.visibility = (nav.style.visibility === 'visible') ? 'hidden' : 'visible';
}

// Event listener for the menu button
document.querySelector('.lowres button').addEventListener('click', toggleNav);

// Handle screen resizing to reset nav visibility on larger screens
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav');
    if (window.innerWidth > 640) {  // Adjust the screen width condition as needed
        nav.style.visibility = 'hidden';  // Hide the menu if the screen width is greater than 640px
    }
});
