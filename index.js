function viewpackagee() {
    document.getElementById("viewpackage").scrollIntoView({
        behavior: "smooth"
    });
}

function viewratings() {
    window.location.href = "https://www.google.com/search?q=senthil+travels+kumbakonam&oq=senthil+travels+&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCggAEEUYFhgeGDkyBwgBEAAYgAQyBwgCEAAYgAQyDQgDEC4YrwEYxwEYgAQyDQgEEC4YrwEYxwEYgAQyDQgFEC4YrwEYxwEYgAQyDQgGEC4YrwEYxwEYgAQyDQgHEC4YrwEYxwEYgAQyCAgIEAAYFhgeMggICRAAGBYYHtIBCjUyNzU2ajBqMTWoAgCwAgA&sourceid=chrome&source=chrome.rb&ie=UTF-8";
}

function booknow() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd257PTdfsYPXhgTipQM7ykcdRbGkbVGom6dNoOncP3F7PUlg/viewform?usp=publish-editor";
}

// ===== MOBILE MENU TOGGLE =====
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const menu = document.getElementById('navMenu');

    if (nav && !nav.contains(event.target)) {
        if (menu) {
            menu.classList.remove('active');
        }
    }
});

// Close menu when a link is clicked
document.querySelectorAll('#navMenu a').forEach(function(link) {
    link.addEventListener('click', function() {
        const menu = document.getElementById('navMenu');
        if (menu) {
            menu.classList.remove('active');
        }
    });
});

// Close menu when Book Now button is clicked
document.querySelector('#navMenu .booknow button')?.addEventListener('click', function() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.remove('active');
    }
});

console.log('🚐 Senthil Travels website loaded successfully!');