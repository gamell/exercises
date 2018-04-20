import React from 'react';

export default ({ adults, children, infants, shown, updateGuests, onBlur }) => (
  <ul
    className={ `guest-panel ${shown ? 'guest-panel--shown' : ''}` }
    onBlur={onBlur}
  >
    <li className="guest-panel__setting">
      <div className="guest-panel__setting-name">
        Adults
      </div>
      <div className="guest-panel__setting-controls">
        <button onClick={() => updateGuests({ adults: Math.max(adults - 1, 0)})}>
          -
        </button>
        {adults}
        <button onClick={() => updateGuests({ adults: adults + 1 })}>
          +
        </button>
      </div>
    </li>
  </ul>
);
