$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: false,
    autoplayTimeout: 2000,
    rewind: true,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });



/* SECTION BUTTONS */
function btn1(){
    document.querySelector('.btn1').classList.remove('btn-desactive');
    document.querySelector('.btn1').classList.add('btn-active');
    document.querySelector('.image1').classList.remove('image-desactive');
    document.querySelector('.image1').classList.add('image-active');


    document.querySelector('.image2').classList.add('image-desactive');
    document.querySelector('.image3').classList.add('image-desactive');
    document.querySelector('.image4').classList.add('image-desactive');
    document.querySelector('.btn2').classList.add('btn-desactive');
    document.querySelector('.btn3').classList.add('btn-desactive');
    document.querySelector('.btn4').classList.add('btn-desactive');
}
function btn2(){
    document.querySelector('.btn2').classList.remove('btn-desactive');
    document.querySelector('.btn2').classList.add('btn-active');
    document.querySelector('.image2').classList.remove('image-desactive');
    document.querySelector('.image2').classList.add('image-active');

    document.querySelector('.image1').classList.add('image-desactive');
    document.querySelector('.image3').classList.add('image-desactive');
    document.querySelector('.image4').classList.add('image-desactive');
    document.querySelector('.btn1').classList.add('btn-desactive');
    document.querySelector('.btn3').classList.add('btn-desactive');
    document.querySelector('.btn4').classList.add('btn-desactive');
}
function btn3(){
    document.querySelector('.btn3').classList.remove('btn-desactive');
    document.querySelector('.btn3').classList.add('btn-active');
    document.querySelector('.image3').classList.remove('image-desactive');
    document.querySelector('.image3').classList.add('image-active');

    document.querySelector('.image1').classList.add('image-desactive');
    document.querySelector('.image2').classList.add('image-desactive');
    document.querySelector('.image4').classList.add('image-desactive');
    document.querySelector('.btn1').classList.add('btn-desactive');
    document.querySelector('.btn2').classList.add('btn-desactive');
    document.querySelector('.btn4').classList.add('btn-desactive');
}
function btn4(){
    document.querySelector('.btn4').classList.remove('btn-desactive');
    document.querySelector('.btn4').classList.add('btn-active');
    document.querySelector('.image4').classList.remove('image-desactive');
    document.querySelector('.image4').classList.add('image-active');

    document.querySelector('.image1').classList.add('image-desactive');
    document.querySelector('.image2').classList.add('image-desactive');
    document.querySelector('.image3').classList.add('image-desactive');
    document.querySelector('.btn1').classList.add('btn-desactive');
    document.querySelector('.btn2').classList.add('btn-desactive');
    document.querySelector('.btn3').classList.add('btn-desactive');
}


// AUTO SCROLL
const menuLinks = document.querySelectorAll('.menu a[href^="#"]')

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 80;
    nativeScroll(distanceFromTheTop);
}

function al(){
    alert('vcx')
}

menuLinks.forEach((link) => {
   link.addEventListener("click", scrollToSection);
});


//ACTIVE ON SCROLL
var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});