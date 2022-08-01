const rating = document.querySelector(".ratingStart");

const thankYou = document.querySelector(".thankyouStart");

const thankYouMarkUp = document.querySelector(".thankyouStart__phone--img");

const ratingsCircle = document.querySelectorAll(
  ".ratingStart__ratings--circle"
);

const submitBtn = document.querySelector(`input[disabled]`);

const btn = document.querySelector(".ratingStart__button--submit");

let currentRating;

const reset = function () {
  ratingsCircle.forEach((ratingCircle) => {
    ratingCircle.classList.remove(`change-color`);
  });
};

ratingsCircle.forEach((ratingCircle, i) => {
  ratingCircle.addEventListener(`click`, function () {
    currentRating = i + 1;

    reset();
    ratingCircle.classList.add(`change-color`);
    // submitBtn.removeAttribute("disabled");
  });
});

btn.addEventListener("click", function () {
  thankYou.classList.remove("hidden");

  thankYouMarkUp.insertAdjacentHTML(
    "afterend",
    `
  <div class="thankyouStart__rating--text">You selected ${currentRating} out of 5</div>
`
  );
});
