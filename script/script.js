const rating = document.querySelector(".ratingStart");

const thankYou = document.querySelector(".thankyouStart");

const thankYouMarkUp = document.querySelector(".thankyouStart__phone--img");

const ratingsCircle = document.querySelectorAll(
  ".ratingStart__ratings--circle"
);

const btn = document.querySelector(".ratingStart__button--submit");

const reset = function () {
  ratingsCircle.forEach((ratingCircle) => {
    ratingCircle.classList.remove(`change-color`);
  });
};

ratingsCircle.forEach((ratingCircle, i) => {
  ratingCircle.addEventListener(`click`, function () {
    const currentRating = i + 1;

    const markUp = `
      <div class="thankyouStart__rating--text">You selected ${currentRating} out of 5</div>
    `;

    reset();
    ratingCircle.classList.add(`change-color`);

    btn.addEventListener("click", function () {
      thankYou.classList.remove("hidden");

      thankYouMarkUp.insertAdjacentHTML("afterend", markUp);
    });
  });
});
