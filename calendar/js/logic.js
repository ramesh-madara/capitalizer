const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
const cells = document.querySelectorAll(".cell .date-number");

const getDates = () => {
  const dates = [];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    const day = {
      month: month,
      date: new Date(year, month, i).getDate(),
      day: new Date(year, month, i).getDay(),
    };
    dates.push(day);
  }
  return dates;
};
let dates = getDates();
console.log(dates);

const markSpecialDates = (month, date, cell) => {
  const specialDaySpan = cell.querySelector(".special-day");

  specialDates.forEach((specialDate) => {
    const specialDayUI = cell.parentElement.querySelector(".special-day");
    if (specialDate.month === month && specialDate.date === date) {
      cell.parentElement.style.backgroundColor = specialDate.bgcolor;
      cell.style.color = specialDate.color;
      specialDayUI.style.color = specialDate.color;
      specialDayUI.innerHTML = ` <span class="event">${specialDate.event}</span>`;
    }
  });

  specialDayUI = cell.querySelector(".special-day");
};

const resetSpecialDayStyles = () => {
  cells.forEach((cell) => {
    const specialDayUI = cell.parentElement.querySelector(".special-day");
    console.log(specialDayUI);
    cell.parentElement.style.backgroundColor = "initial";
    cell.style.color = "initial";
    specialDayUI.innerHTML = ``;
  });
};

const populateDates = () => {
  resetSpecialDayStyles();
  const monthUI = document.querySelector(".month-heading");
  const yearUI = document.querySelector(".year-heading");
  //show month.name in month UI
  monthUI.innerHTML = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  yearUI.innerHTML = year;
  firstday = dates[0].day;

  const firstDayCell = document.querySelector(
    `.cell:nth-child(${firstday + 1}) .date-number`
  );
  const lastCell = document.querySelector(".cell:last-child .date-number");

  let firstDayReached = false;
  let dateIndex = 0;
  cells.forEach((cell) => {
    if (cell === firstDayCell) {
      firstDayReached = true;
      console.log("first day reached");
    }
    if (firstDayReached && dateIndex < dates.length) {
      cell.innerHTML = dates[dateIndex].date;
      markSpecialDates(dates[dateIndex].month, dates[dateIndex].date, cell);

      dateIndex++;
    }
    if (cell === lastCell && dateIndex < dates.length) {
      //start filling dates from first cell using a loop
      let i = 0;
      while (dateIndex < dates.length) {
        cells[i].innerHTML = dates[dateIndex].date;
        dateIndex++;
        i++;
      }
    }
  });
};
populateDates();

const incrementMonth = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  dates = getDates();
  populateDates();
};
const decrementMonth = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  if (month === 0) {
    month = 11;
    year--;
  } else {
    month--;
  }
  dates = getDates();
  populateDates();
};
