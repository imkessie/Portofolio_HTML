window.onscroll = function() {
    let navbar = document.querySelector('#mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white');
    } else {
        navbar.classList.remove('bg-white');
    }
};

let nameText = "Kessie Sengupta";
let idx = 0;

function typing() {
    let container = document.getElementById("typewriter");
    if (container && idx < nameText.length) {
        container.innerHTML += nameText.charAt(idx);
        idx++;
        setTimeout(typing, 150);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    let icon = document.querySelector('.theme-icon');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.innerHTML = '☀️';
    } else {
        icon.innerHTML = '🌙';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.onclick = function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
});

window.onload = typing;