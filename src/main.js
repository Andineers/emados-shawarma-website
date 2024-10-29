const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav_link')


navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    })
)

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click",() => {
    navMenu.classList.remove('hidden')
})



const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap')
const foods = document.querySelectorAll('.food')
const snacks = document.querySelectorAll('.snack')
const beverages = document.querySelectorAll('.beverage')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'beverage') {
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }
    })

})


// DARK LIGHT MODE
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

// Muat mode tema dari localStorage saat halaman dimuat
window.addEventListener('DOMContentLoaded', (e) => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        html.classList.add('dark');
        themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    } else {
        html.classList.remove('dark');
        themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    }
});

themeBtn.addEventListener('click', (e) => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
        localStorage.setItem('mode', 'dark');
    } else {
        themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
        localStorage.setItem('mode', 'light');
    }
});




const scrollUpBtn = document.querySelector('#scroll-up');

const scrollUp = () => {
  // Cek scrollY
  if (window.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};

// Event listener saat scroll
window.addEventListener('scroll', scrollUp);


// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
const header = document.getElementById("#header");

if(this.scrollY >= 50) {
    header.classList.add("border-b", "border-secondary");
}else {
    header.classList.remove("border-b", "border-secondary");
  }
}
window.addEventListener('scroll', scrollHeader)


// ACTIVE LINK
// JavaScript untuk menandai tautan aktif saat halaman di-scroll
// JavaScript untuk menandai tautan aktif
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav__link');

    let current = "home"; // Default ke "home"

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Cek jika scrollY berada dalam rentang section ini
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        // Hapus kelas text-secondary dari semua tautan
        link.classList.remove("text-secondary");
        
        // Tambahkan kelas text-secondary pada tautan yang aktif
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("text-secondary");
        }
    });
};

// Tambahkan event listener untuk scroll
window.addEventListener('scroll', activeLink);

// Menjaga tautan aktif saat diklik
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Hapus kelas text-secondary dari semua tautan
        document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('text-secondary');
            link.classList.add('text-white'); // Set semua ke text-white
        });

        // Tambahkan kelas text-secondary pada tautan yang diklik
        e.target.classList.add('text-secondary');
    });
});

// Tambahkan event listener untuk memanggil activeLink saat halaman di-scroll
window.addEventListener('scroll', activeLink);

// SCROLL REVEAL ANIMATION
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2500,
        delay: 400
    });

    sr.reveal('.home_image');
    sr.reveal('.home_content', { origin: 'bottom' });
    sr.reveal('.category_card', { interval: 300});
    sr.reveal('.promo_card-1', { origin: 'left'});
    sr.reveal('.promo_card-2', { origin: 'right'});
    sr.reveal('.about_image', { origin: 'bottom'});
    sr.reveal('.about_content', { origin: 'top'});
    sr.reveal('.menu_items', { origin: 'left'});
    sr.reveal('.customer_review', { origin: 'right'});
    sr.reveal('.footer');
});

