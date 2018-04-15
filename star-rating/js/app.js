const starRating = (function(){

  let RATINGS = [5, 4, 3, 2, 1];

  let currRating = 0;
  let onRating = (_) => {};

  function handleClick(e) {
    const rating = parseInt(e.target.dataset.rating, 10);
    if (rating) {
      // clicking on the same star resets rating to 0
      currRating = (rating === currRating) ? 0 : rating;
      onRating(currRating);
      render($container, currRating);
    }
    e.preventDefault();
  }

  function setEventHandler($container) {
    $container.addEventListener('click', handleClick);
  }

  function render($container, rating) {
    $container.innerHTML = RATINGS.map((currRating) =>
      `<li class="star star-${currRating <= rating ? 'full' : 'empty'}" data-rating="${currRating}"></li>`
    ).join('');
  }

  function init(containerId, initRating = 0) {
    currRating = initRating;
    $container = document.getElementById(containerId);
    render($container);
    setEventHandler($container)
  }

  function setOnRating(f) {
    onRating = f;
  }

  return {
    init,
    setOnRating
  }

})();

function onRating(rating) {
  $message = document.getElementById('message');
  $message.innerHTML = `Thank you for your ${rating}-star rating!`;
}

starRating.setOnRating(onRating);
window.onload = () => starRating.init('star-rating');
