const Autocomplete = (() => {

  const init = (containerId, getSuggestionsFunction) =>
    (() => {

      let onSelectHandler = (_) => {};
      let input = '';
      let highlight = -1;
      let getSuggestions = _.throttle(getSuggestionsFunction, 800, { leading: true, trailing: true });
      let $container = null;
      let $input = null;
      let $suggestions = null;

      function handleKey(e) {
        switch (e.key) {
          case 'ArrowUp':
            highlight = highlight + -1;
            renderHighlight();
            break;
          case 'ArrowDown' :
            highlight = highlight + 1;
            renderHighlight();
            break;
          case 'Enter' :
            break;
          default:
            return;
        }
      }

      function handleInput(e) {
        input = e.target.value.toLowerCase();
        if (input.length === 0) return hideSuggestions();
        getSuggestions(input).then((matches) => {
          // input might have changed from before
          if (matches.length === 0 || input.length === 0) return hideSuggestions();
          const formattedMatches = matches.map(
            ({name, id}) => {
              const i0 = name.toLowerCase().indexOf(input);
              const i1 = input.length;
              return i0 !== 0 ? // for edge case where the user changed the input before the response came back
                null :
                {
                  name: `${name.slice(0, i0)}<strong>${name.slice(i0, i1)}</strong>${name.slice(i1)}`,
                  id
                };
            }
          ).filter((m) => m !== null);
          renderMatches(formattedMatches);
        });
      }

      function initRender($container) {
        $container.innerHTML = `
          <div class="autocomplete">
            <input class="autocomplete-input" autocomplete="off" />
            <ul class="suggestions"></ul>
          <div>
        `;
        $suggestions = $container.getElementsByClassName('suggestions')[0];
        $input = $container.getElementsByClassName('autocomplete-input')[0];
      }

      function hideSuggestions() {
        getSuggestions.cancel();
        $suggestions.classList.remove('shown');
      }

      function renderMatches(matches) {
        if (matches.length === 0 || input.length === 0) hideSuggestions();
        else {
          $suggestions.classList.add('shown');
          $suggestions.innerHTML = matches.map(
            ({ name, id }, i) =>
              `<li data-destination-id="${id}" data-list-id="${i}" class="suggestion">${name}</li>`
          ).join('');
          getSuggestions.cancel();
        }
      }

      function removeHighlight() {
        if ($suggestions.hasChildNodes()) {
          debugger;
          const suggestions = $suggestions.childNodes;
          for (elem in suggestions) {
            elem.classList.remove('highlight');
          }
        }
      }

      function renderHighlight() {
        removeHighlight();
        const $row = $suggestions.querySelector(`[data-list-id="${highlight}"]`);
        $row.classList.add('highlighted');
      }

      function onSelect(f) {
        onSelectHandler = f;
        return api;
      }

      $container = document.getElementById(containerId);
      initRender($container);

      $input.addEventListener('input', handleInput);
      $container.addEventListener('keydown', handleKey);

      return {
        onSelect
      };

    })();

  return init;

})();
