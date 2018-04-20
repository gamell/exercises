import React, { Component } from 'react';
import GuestPanel from './GuestPanel.js'
import './GuestInput.css';

const DEFAULT_SELECTION = {
  adults: 0,
  children: 0,
  infants: 0
};

const DEFAULT_LIMITS = {
  adults: 4,
  children: 2,
  infants: 1
}

const DEFAULTS = {
  selection: DEFAULT_SELECTION,
  limits: DEFAULT_LIMITS,
  showPanel: false
};

const isValid = (guests, limits) =>
  Object.entries(guests).reduce(( prev, [ type, number ] ) =>
    prev ?
      number <= limits[type] :
      prev
  , true);

class GuestInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULTS,
      ...props
    };
    this.updateGuests = this.updateGuests.bind(this);
    this.hidePanel = this.hidePanel.bind(this);
    this.showPanel = this.showPanel.bind(this);
  }

  updateGuests(nextSelection) {
    if (isValid(nextSelection, this.state.limits)) {
      this.setState({
        selection: {
          ...this.state.selection,
          ...nextSelection
        }
      });
    } else {
      this.setState({ error: "Sorry, the number of guests is too high" });
    }
  }

  showPanel(e) {
    this.setState({ showPanel: true });
  }

  hidePanel(e) {
    var currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ showPanel: false });
      }
    }, 0);
  }

  render() {
    return (
      <div
        className="guest-input"
        onBlur={this.hidePanel}
      >
        <input
          type="text"
          placeholder="hola"
          size="35"
          onFocus={this.showPanel}
        />

        <GuestPanel
          adults={this.state.selection.adults}
          children={this.state.selection.children}
          infants={this.state.selection.infants}
          shown={this.state.showPanel}
          updateGuests={this.updateGuests}
          onBlur={this.hidePanel}
        />
      </div>
    );
  }
}

export default GuestInput;
