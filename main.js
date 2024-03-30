let menu = document.querySelector('.menu-ikons');
let navbar = document.querySelector('.menu');

menu.onclick = () => {
    navbar.classList.toggle('heyyy');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

let bell = document.querySelector('.notif');

document.querySelector('#bell').onclick =() =>{
    bell.classList.toggle('active');
}

//swiper

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay:5000,
      disableOnInteraction:false,
    },
    breakpoints: {
        "640": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "768": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "1068": {
          slidesPerView: 4,
          spaceBetween: 40,
        },
    },
  });

  // custom scrollbar
  window.onscroll = function() {mufunction()};

  function mufunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
    


  }

//swiper

var swiper = new Swiper(".tambahan", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },
  breakpoints: {
      "640": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "768": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      "1068": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
  },
});

//kelas animasi
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
   
  });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
