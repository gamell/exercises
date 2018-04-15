import React from 'react';

const MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const getCalendarMatrix = (month, year) => {
  let cal = [[]];
  const auxDate = (new Date())
  auxDate.setMonth(month)
  auxDate.setDate(1);
  const firstWeekDay = auxDate.getDay(); // 0 = Sunday
  // fill in initial empty days, if any
  if (firstWeekDay > 0) {
    cal[0] = (new Array(firstWeekDay).fill(''));
  }
  let row = 0;
  const offset = cal[0].length;
  for (let day = 0; day < MONTH_LENGTH[month]; day++ ) {
    if (cal[row].length === 7) {
      cal.push([]);
      row++;
    }
    cal[row][(offset + day) % 7] = day + 1;
  }
  return cal;
}

const CalendarTable = ({year, month, day = null, clickDay}) => (
  getCalendarMatrix(month, year).map((row, i) =>
    <tr key={'row-'+i}>
    {row.map((currDay, j) =>
      <td
        className={`day ${currDay === day ? 'highlight' : ''}`}
        key={'day-' + (currDay ? currDay : `empty-${j}`)}
        onClick={clickDay}
      >
        {currDay}
      </td>
    )}
    </tr>
  )
)

export default CalendarTable;
