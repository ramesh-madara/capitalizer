const date = new Date();
let month = 10;
let year = 2025;
const cells = document.querySelectorAll(".cell");

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

const populateDates = () => {
  const monthUI = document.querySelector(".month-heading");
  const yearUI = document.querySelector(".year-heading");
  //show monthname in month UI
  monthUI.innerHTML = new Date(year, month).toLocaleString("default", {
    month: "long",
  });
  yearUI.innerHTML = year;
  firstday = dates[0].day;
  const firstDayCell = document.querySelector(
    `.cell:nth-child(${firstday + 1})`
  );
  const lastCell = document.querySelector(".cell:last-child");

  console.log(firstDayCell);
  let firstDayReached = false;
  let dateIndex = 0;
  cells.forEach((cell) => {
    if (cell === firstDayCell) {
      firstDayReached = true;
      console.log("first day reached");
    }
    if (firstDayReached && dateIndex < dates.length) {
      cell.innerHTML = dates[dateIndex].date;

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
  month++;
  dates = getDates();
  populateDates();
};
const decrementMonth = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  month--;
  dates = getDates();
  populateDates();
};
