let slideLeft = document.querySelector(".slider__button-left");
let slideRight = document.querySelector(".slider__button-right");
let slider = document.querySelector(".slider-main");
let sliderItems = document.querySelectorAll(".slider-item");

let intervalSlide = setInterval(slideRightFunction, 3000);

function slideRightFunction() {
  slider.firstElementChild.style.opacity = 0.6;
  document.querySelectorAll(".slider-item")[1].style.opacity = 0.6;
  setTimeout(() => {
    slider.insertBefore(
      slider.firstElementChild,
      sliderItems[sliderItems.length]
    );
    requestAnimationFrame(() => {
      slider.firstElementChild.style.opacity = 1;
    });
  }, 250);
}

slideLeft.addEventListener("click", () => {
  clearInterval(intervalSlide);
  slider.firstElementChild.style.opacity = 0.6;
  slider.lastElementChild.style.opacity = 0.6;
  setTimeout(() => {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    requestAnimationFrame(() => {
      slider.firstElementChild.style.opacity = 1;
    });
  }, 250);

  intervalSlide = setInterval(slideRightFunction, 3000);
});

slideRight.addEventListener("click", () => {
  clearInterval(intervalSlide);

  slider.firstElementChild.style.opacity = 0.6;
  document.querySelectorAll(".slider-item")[1].style.opacity = 0.6;
  setTimeout(() => {
    slider.insertBefore(
      slider.firstElementChild,
      sliderItems[sliderItems.length]
    );
    requestAnimationFrame(() => {
      slider.firstElementChild.style.opacity = 1;
    });
  }, 250);

  intervalSlide = setInterval(slideRightFunction, 3000);
});
