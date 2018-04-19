class Autocomplete {

  constructor(containerId, getSuggestionsFunction) {
    this._getSuggestions = _.throttle(getSuggestionsFunction, 800, { leading: true, trailing: true });
    this.$container = document.getElementById(containerId);
    const $elems = this._initRender();
    this.$suggestions = $elems.$suggestions;
    this.$input = $elems.$input;
    this.$input.addEventListener('input', (e) => this._handleInput(e));
    this.$container.addEventListener('keydown', (e) => this._handleKey(e));
    this.highlight = -1;
  }

  _handleKey(e) {
    switch (e.key) {
      case 'ArrowUp':
        this.highlight = this.highlight + -1;
        this._renderHighlight();
        break;
      case 'ArrowDown' :
        this.highlight = this.highlight + 1;
        this._renderHighlight();
        break;
      case 'Enter' :
        this.$input.value = e.target.innerHTML;
        break;
      default:
        return;
    }
  }

  _handleInput(e) {
    const input = e.target.value.toLowerCase();
    if (input.length === 0) return this._hideSuggestions();
    this._getSuggestions(input).then((matches) => {
      // input might have changed from before
      if (matches.length === 0 || input.length === 0) return this._hideSuggestions();
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
      this._renderMatches(formattedMatches);
    });
  }

  _initRender() {
    this.$container.innerHTML = `
      <div class="autocomplete">
        <input class="autocomplete-input" autocomplete="off" />
        <ul class="suggestions"></ul>
      <div>
    `;
    return {
      $suggestions: this.$container.getElementsByClassName('suggestions')[0],
      $input: this.$container.getElementsByClassName('autocomplete-input')[0]
    };
  }

  _hideSuggestions() {
    this._getSuggestions.cancel();
    this.$suggestions.classList.remove('shown');
  }

  _renderMatches(matches) {
    if (matches.length === 0 || this.$input.value.length === 0) this._hideSuggestions();
    else {
      this.$suggestions.classList.add('shown');
      this.$suggestions.innerHTML = matches.map(
        ({ name, id }, i) =>
          `<li data-destination-id="${id}" data-list-id="${i}" class="suggestion">${name}</li>`
      ).join('');
      this._getSuggestions.cancel();
    }
  }

  _removeHighlight() {
    if (this.$suggestions.hasChildNodes()) {
      const suggestions = this.$suggestions.childNodes;
      for (let elem of suggestions) {
        elem.classList.remove('highlight');
      }
    }
  }

  _renderHighlight() {
    this._removeHighlight();
    const $row = this.$suggestions.querySelector(`[data-list-id="${this.highlight}"]`);
    $row.classList.add('highlighted');
  }

  onSelect(f) {
    this.onSelectHandler = f;
  }

};
