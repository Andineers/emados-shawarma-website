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
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
}