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


/* Donate-amount */


const amount = document.querySelector(".paf__amount");
amount.value = 100;

amount.oninput = function(){
    this.value = this.value.substr(0, 4);
  };

const sum = document.getElementsByName("dollars");
sum.forEach((item) => {
  item.addEventListener("click", function () {
    amount.value = item.id;
  });
});

const min = +amount.min;
const max = +amount.max;

amount.addEventListener("input", function () {
    if (amount.value > max) {
      amount.value = max;
    } else if (amount.value < min) {
      amount.value = min;
    }
  
    if (amount.value === "5000") {
      sum[0].checked = true;
    } else if (amount.value === "2000") {
      sum[1].checked = true;
    } else if (amount.value === "1000") {
      sum[2].checked = true;
    } else if (amount.value === "500") {
      sum[3].checked = true;
    } else if (amount.value === "250") {
      sum[4].checked = true;
    } else if (amount.value === "100") {
      sum[5].checked = true;
    } else if (amount.value === "50") {
      sum[6].checked = true;
    } else if (amount.value === "25") {
      sum[7].checked = true;
    } else {
      sum[0].checked = false;
      sum[1].checked = false;
      sum[2].checked = false;
      sum[3].checked = false;
      sum[4].checked = false;
      sum[5].checked = false;
      sum[6].checked = false;
      sum[7].checked = false;
    }
  });
