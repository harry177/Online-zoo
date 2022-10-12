
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

const mediaDesktopBig = window.matchMedia('(min-width: 1001px)');
const mediaDesktopSmall = window.matchMedia('(max-width: 1000px) and (min-width: 641px)');
const mediaTablet = window.matchMedia('(max-width: 640px) and (min-width: 321px)');
const mediaMobile = window.matchMedia('(max-width: 320px)');

function mix(arr) {
    arr.sort(() => Math.random() - 0.5);
  }


function setSlider() {
  mix(blocks);

  leftPart.innerHTML = "";
  rightPart.innerHTML = "";


  for (let i = 0; i < 6; i++) {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add("animals__block");
    leftBlock.innerHTML = blocks[i].innerHTML;
    leftPart.append(leftBlock);

    const rightBlock = document.createElement('div');
    rightBlock.classList.add("animals__block");
    rightBlock.innerHTML = blocks[i].innerHTML;
    rightPart.append(rightBlock);
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


  const testimonials = document.querySelector(".testimonials__block");
  const test1 = document.getElementById("opinion1");
  const test2 = document.getElementById("opinion2");
  const test3 = document.getElementById("opinion3");
  const test4 = document.getElementById("opinion4");
  const test5 = document.getElementById("opinion5");
  const test6 = document.getElementById("opinion6");
  const test7 = document.getElementById("opinion7");
  const test8 = document.getElementById("opinion8");
  const test9 = document.getElementById("opinion9");
  const test10 = document.getElementById("opinion10");
  const test11 = document.getElementById("opinion11");

  const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11];
  const contents = [content1, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11];


  
  function mixOpinions() {
    mix(tests);

    if (mediaDesktopBig.matches) {
      for (i = 0; i < 11; i++) {
        tests[i].innerHTML = contents[i];
      }
    } else if  (mediaDesktopSmall.matches) {
      for (i = 0; i < 11; i++) {
        tests[i].innerHTML = contents[i];
      }
    }
  }

  window.addEventListener('load', mixOpinions());

  
  /* Testimonials progress bar */


  const progress = document.querySelector(".testimonials__slider__bar");

function moveOpinions() {
  if (mediaDesktopBig.matches) {
    switch (progress.value) {
      case "0":
        testimonials.style.left = "0";
        break;
      case "1":
        testimonials.style.left = "-18.625vw";
        break;
      case "2":
        testimonials.style.left = "-37.25vw";
        break;
      case "3":
        testimonials.style.left = "-55.875vw";
        break;
      case "4":
        testimonials.style.left = "-74.5vw";
        break;
      case "5":
        testimonials.style.left = "-93.125vw";
        break;
      case "6":
        testimonials.style.left = "-111.75vw";
        break;
      case "7":
        testimonials.style.left = "-130.375vw";
        break;
    }
  } else if (mediaDesktopSmall.matches) {
    switch (progress.value) {
      case "0":
        testimonials.style.left = "0";
        break;
      case "1":
        testimonials.style.left = "-32.4vw";
        break;
      case "2":
        testimonials.style.left = "-64.8vw";
        break;
      case "3":
        testimonials.style.left = "-97.2vw";
        break;
      case "4":
        testimonials.style.left = "-129.6vw";
        break;
      case "5":
        testimonials.style.left = "-162vw";
        break;
      case "6":
        testimonials.style.left = "-194.4vw";
        break;
      case "7":
        testimonials.style.left = "-226.8vw";
        break;
    }
  }
}

progress.addEventListener("input", moveOpinions);


/* Testimonial popup */

const popup1 = document.getElementById("opinion1");
const popup2 = document.getElementById("opinion2");
const popup3 = document.getElementById("opinion3");
const testPopup = document.querySelector(".test__popup");
const popContent = document.querySelector(".test__popup__inner");
const popButton = document.querySelector(".cross__popup__button");
const hhh = document.querySelectorAll(".opinion__body");


popup1.addEventListener('click', function() {
  hhh[0].style.height = "79%";
  testPopup.style.left = "160px";
  popContent.innerHTML = popup1.innerHTML;
  
});

popup2.addEventListener('click', function() {
  hhh[1].style.height = "78%";
  testPopup.style.left = "160px";
  popContent.innerHTML = popup2.innerHTML;
  
});

popup3.addEventListener('click', function() {
  hhh[2].style.height = "78%";
  testPopup.style.left = "160px";
  popContent.innerHTML = popup3.innerHTML;
  
});

popButton.addEventListener('click', function() {
  testPopup.style.left = "-320px";
  
})