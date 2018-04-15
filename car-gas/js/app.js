(function(){
  window.onload = () => {

    const $car = document.getElementById('car');
    const phrase = 'The car is running out of gas.';
    let nextChar = 0;
    let margin = 1;

    function parseKey(e) {
      if (nextChar < phrase.length && e.key === phrase[nextChar]) {
        margin = margin + 1;
        $car.style = `margin-left: ${margin}em;`;
        nextChar = nextChar + 1;
      }
    }

    document.addEventListener('keypress', parseKey);
  };
})();
