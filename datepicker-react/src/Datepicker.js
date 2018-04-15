import React, { Component } from 'react';
import CalendarTable from './CalendarTable';
import './Datepicker.css';

const getYearAndMonth = (date) => ({
  month: date.getMonth(),
  year: date.getFullYear()
});

const WEEKDAYS = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'Sa'
];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const isHighlightMonth = (date, highlight) =>
  date.getFullYear() === highlight.getFullYear() &&
  date.getMonth() === highlight.getMonth();

const calculateState= (date = new Date(), highlight = new Date()) => ({
  date,
  highlight,
  year: date.getFullYear(),
  month: date.getMonth(),
  day: isHighlightMonth(date, highlight) ? highlight.getDate() : null,
  monthName: MONTHS[date.getMonth()]
})

class Datepicker extends Component {

  constructor(props) {
    super(props);
    this.state = calculateState(props.date);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.highlightDay = this.highlightDay.bind(this);
  }

  goBack(e) {
    const nextDate = this.state.date;
    nextDate.setMonth(this.state.month - 1);
    this.setState(calculateState(nextDate));
    e.preventDefault();
  }

  goForward(e) {
    const nextDate = this.state.date;
    nextDate.setMonth(this.state.month + 1);
    this.setState(calculateState(nextDate));
    e.preventDefault();
  }

  highlightDay(e) {
    const newHighlight = new Date();
    newHighlight.setFullYear(this.state.year);
    newHighlight.setMonth(this.state.month);
    newHighlight.setDate(e.target.innerHTML);
    this.setState(calculateState(this.state.date, newHighlight));
    e.preventDefault();
  }

  render() {
    return (
      <div className="datepicker">
        <header className="header">
          <div className="button" onClick={this.goBack} >
            &lt;
          </div>
          <div className="month-name">
            {this.state.monthName}
          </div>
          <div className="button" onClick={this.goForward} >
            &gt;
          </div>
        </header>
        <table>
          <thead>
            <tr>
              {WEEKDAYS.map((weekday, i) =>
                <td key={'weekday-' + i}>
                  {weekday}
                </td>
              )}
            </tr>
          </thead>
          <tbody className="month">
            <CalendarTable
              month={this.state.month}
              year={this.state.year}
              day={this.state.day}
              clickDay={this.highlightDay}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Datepicker;
