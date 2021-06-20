let slideLeft = document.querySelector(".slider__button-left");
let slideRight = document.querySelector(".slider__button-right");
let slider = document.querySelector(".slider-main");
let sliderItems = document.querySelectorAll(".slider-item");

slideLeft.addEventListener("click", () => {
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
});

slideRight.addEventListener("click", () => {
  slider.insertBefore(
    slider.firstElementChild,
    sliderItems[sliderItems.length]
  );
});
