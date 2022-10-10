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
