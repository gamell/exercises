const starRating = (function() {

  const RATINGS = [5, 4, 3, 2, 1];

  function init(containerId, initRating = 0) {
    return (function() {

      let currRating = 0;
      let onRatingHandler = (_) => {};
      let $container = null;

      function handleClick(e) {
        const rating = parseInt(e.target.dataset.rating, 10);
        if (rating) {
          // clicking on the same star resets rating to 0
          currRating = (rating === currRating) ? 0 : rating;
          onRatingHandler(currRating);
          render($container, currRating);
        }
        e.preventDefault();
      }

      function setEventHandler($container) {
        $container.addEventListener('click', handleClick);
      }

      function render($container, rating) {
        $container.innerHTML =
        `<ul class="star-rating">` +
          RATINGS.map((currRating) =>
            `<li class="star star-${currRating <= rating ? 'full' : 'empty'}" data-rating="${currRating}"></li>`
          ).join('') +
        `</ul>`;
      }

      function onRating(f) {
        onRatingHandler = f;
        return api;
      }

      const api = {
        onRating
      }

      currRating = initRating;
      $container = document.getElementById(containerId);
      render($container);
      setEventHandler($container);

      return api;

    })();
  }

  return init;

})();

function onRating(rating) {
  $message = document.getElementById('message');
  $message.innerHTML = `Thank you for your ${rating}-star rating!`;
}

window.onload = () => {
  const starRating1 = starRating('star-rating-1');
  const starRating2 = starRating('star-rating-2');
  starRating2.onRating(onRating);
};
