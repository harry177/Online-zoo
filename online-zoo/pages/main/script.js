alert ('Слайдер по тестимониалс еще не сделал, сделаю в ближайший день:)')



/* Burger-menu */


const burgerIcon = document.querySelector(".burger__menu");
const burgerMenu = document.querySelector(".burger__menu__active");
const darkTheme = document.querySelector(".dark");
const burgerCross = document.querySelector(".cross__burger__button");


burgerIcon.addEventListener('click', function() {
    burgerMenu.classList.add("show");
    darkTheme.classList.add("dark__active");
  }
);

darkTheme.addEventListener('click', function() {
    burgerMenu.classList.remove("show");
    darkTheme.classList.remove("dark__active");
})

burgerCross.addEventListener('click', function() {
    burgerMenu.classList.remove("show");
    darkTheme.classList.remove("dark__active");
})


/* Slider animals */

const rbLeft = document.querySelector(".rb__left");
const rbRight = document.querySelector(".rb__right");
const carousel = document.querySelector(".animals__container");
const leftPart = document.querySelector(".animals__left");
const centerPart = document.querySelector(".animals__center");
const rightPart = document.querySelector(".animals__right");
const blockPanda = document.getElementById("ab__panda");
const blockEagle = document.getElementById("ab__eagle");
const blockGorilla = document.getElementById("ab__gorilla");
const blockSloth = document.getElementById("ab__sloth");
const blockCheetah = document.getElementById("ab__cheetah");
const blockPenguin = document.getElementById("ab__penguin");
const blockAlligator = document.getElementById("ab__alligator");


let blocks = [blockPanda, blockEagle, blockGorilla, blockSloth, blockCheetah, blockPenguin];
let blocks640 = []

const media640 = window.matchMedia('(max-width: 640px) and (min-width: 321px)');

function mix(arr) {
    arr.sort(() => Math.random() - 0.5);
  }


function setSlider() {
  mix(blocks);

  leftPart.innerHTML = "";
  rightPart.innerHTML = "";

  if (media640 == true) {
  for (let i = 0; i < 4; i++) {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add("animal__wrapper");
    leftBlock.innerHTML = blocks[i].innerHTML;
    leftPart.append(leftBlock);

    const rightBlock = document.createElement('div');
    rightBlock.classList.add("animal__wrapper");
    rightBlock.innerHTML = blocks[i].innerHTML;
    rightPart.append(rightBlock);
  }
} else {
  for (let i = 0; i < 6; i++) {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add("animal__wrapper");
    leftBlock.innerHTML = blocks[i].innerHTML;
    leftPart.append(leftBlock);

    const rightBlock = document.createElement('div');
    rightBlock.classList.add("animal__wrapper");
    rightBlock.innerHTML = blocks[i].innerHTML;
    rightPart.append(rightBlock);
  }
}
};

window.addEventListener('load', setSlider());

const moveLeft = () => {
    carousel.classList.add("transition-left");
    rbLeft.removeEventListener("click", moveLeft);
    rbRight.removeEventListener("click", moveRight);
  };

  rbLeft.addEventListener("click", moveLeft);

const moveRight = () => {
    carousel.classList.add("transition-right");
    rbLeft.removeEventListener("click", moveLeft);
    rbRight.removeEventListener("click", moveRight);
  };

  rbRight.addEventListener("click", moveRight);


  carousel.addEventListener("animationend", function(animationEvent) {
    const leftContent = document.querySelector(".animals__left").innerHTML;
    const rightContent = document.querySelector(".animals__right").innerHTML;
  
    if (animationEvent.animationName === "move-left") {
      carousel.classList.remove("transition-left");
      centerPart.innerHTML = leftContent;
    } else {
      carousel.classList.remove("transition-right");
      centerPart.innerHTML = rightContent;
    }
  
    rbLeft.addEventListener("click", moveLeft);
    rbRight.addEventListener("click", moveRight);
    setSlider();
  });



  /* Testimonials - slider */


  