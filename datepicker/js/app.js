const datepicker = (function(){

  let date = new Date();

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

  const MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Starting on Sunday
  const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  function render(date = new Date(), highlight = null){

    const year = date.getFullYear();
    const month = date.getMonth();
    const monthText = MONTHS[month];

    const $monthTable = document.getElementsByClassName('month')[0];
    $monthTable.innerHTML = generateCalendarTable(month, year, highlight);

    const $monthName = document.getElementsByClassName('month-name')[0];
    $monthName.innerHTML = `${monthText} ${year}`;
  }

  function back(e){
    date.setMonth(date.getMonth() - 1);
    render(date, new Date());
    e.preventDefault();
  }

  function forward(e){
    date.setMonth(date.getMonth() + 1);
    render(date, new Date());
    e.preventDefault();
  }

  function handleClick(e) {
    if (e.target.classList.contains('back')) {
      back(e);
    }
    if (e.target.classList.contains('forward')) {
      forward(e);
    }
    if (e.target.classList.contains('day')) {
      const newHighlight = new Date();
      newHighlight.setFullYear(date.getFullYear());
      newHighlight.setMonth(date.getMonth());
      newHighlight.setDate(e.target.innerHTML);
      render(date, newHighlight);
      //alert(`You selected the ${e.target.innerHTML} day`);
    }
  }

  function generateCalendarTable(month, year, highlight = null){
    let cal = [[]];
    const isHighlight = (day) => (
      year === highlight.getFullYear() &&
      month === highlight.getMonth() &&
      day === highlight.getDate()
    )
    // figure out first day of the Month
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
    return cal.map((row) => `<tr>${row.map((day) =>
      `<td class="day day-${day-1} ${isHighlight(day) ? 'highlight' : ''}">${day}</td>`
    ).join('')}</tr>`).join('');
  }

  function init() {
    // setup eventListener
    const $datepicker = document.getElementsByClassName('datepicker')[0];
    $datepicker.addEventListener('click', handleClick);
    render(date, new Date());
  }

  return {
    init
  }

})();



window.onload = () => {
  datepicker.init();
};
