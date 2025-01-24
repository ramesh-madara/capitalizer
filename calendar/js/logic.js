let yearProgess = true;

const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
// let year = 2026;
// getPoyaDays(year);

let lastYear = year;
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
// console.log(dates);

const markSpecialDates = (month, date, cell) => {
  const specialDaySpan = cell.querySelector(".special-day");

  specialDates.forEach((specialDate) => {
    const specialDayUI = cell.parentElement.querySelector(".special-day");
    if (
      specialDate.month === month &&
      specialDate.date === date &&
      (specialDate.year ? specialDate.year === year : true)
    ) {
      if (
        cell.parentElement.classList.contains("saturday") ||
        cell.parentElement.classList.contains("sunday")
      ) {
        cell.parentElement.classList.remove("saturday");
        cell.parentElement.classList.remove("sunday");
      }
      if (specialDate.holiday == true) {
        // console.log(cell.parentElement.querySelector(".isHoliday"));
        cell.parentElement.querySelector(".isHoliday").style.display = "block";
      }
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
    cell.style.color = "initial";
    specialDayUI.innerHTML = ``;
    cell.parentElement.querySelector(".isHoliday").style.display = "none";

    // if cell.parentElement has day-5 class add saturdaay class
    if (cell.parentElement.classList.contains("day-6")) {
      cell.parentElement.style.backgroundColor = "white";

      cell.parentElement.classList.add("saturday");
    } else if (cell.parentElement.classList.contains("day-0")) {
      cell.parentElement.style.backgroundColor = "white";

      cell.parentElement.classList.add("sunday");
    } else {
      cell.parentElement.style.backgroundColor = "white";
    }
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
      // console.log("first day reached");
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
    lastYear = year;
    year++;
    yearProgess = true;
    getPoyaDays(year);
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
    lastYear = year;
    year--;
    yearProgess = false;
    getPoyaDays(year);
  } else {
    month--;
  }
  dates = getDates();
  populateDates();
};

const incrementYear = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  lastYear = year;
  year++;
  yearProgess = true;
  getPoyaDays(year);
  dates = getDates();
  populateDates();
};
const decrementYear = () => {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  lastYear = year;
  year--;
  yearProgess = false;
  getPoyaDays(year);
  dates = getDates();
  populateDates();
};

const getPoyaDays = (year) => {
  console.log(year);

  let lastKnowPoya;
  let firstKnownPoya;
  if (year != 2025) {
    if (year == 2024 || year == 2026) {
      lastKnowPoya = "2025-12-04";
      firstKnownPoya = "2025-01-13";
    } else {
      const dynamicsDates = specialDates.filter(
        (date) => date.type == "dynamic"
      );
      if (yearProgess == true) {
        lastPoyaDates = dynamicsDates.filter((date) => date.year == year - 1);
      } else {
        lastPoyaDates = dynamicsDates.filter((date) => date.year == year + 1);
      }
      console.log(lastPoyaDates);

      let fpd = lastPoyaDates.filter((date) => date.month == 0)[0];
      let lpd = lastPoyaDates.filter((date) => date.month == 11)[0];
      console.log(lpd);
      console.log(fpd);
      firstKnownPoya = `${fpd.year}-${fpd.month + 1}-${fpd.date}`;
      lastKnowPoya = `${lpd.year}-${lpd.month + 1}-${lpd.date}`;
      console.log(lastKnowPoya);
      console.log(firstKnownPoya);
    }
    removeOldPoyaDays();

    let poyaDays = [];
    if (yearProgess == true) {
      poyaDays = calculateFullMoonPoyaDays(lastKnowPoya, 15, yearProgess);
    } else {
      poyaDays = calculateFullMoonPoyaDays(firstKnownPoya, 15, yearProgess);
    }
    console.log(poyaDays);

    poyaDays.forEach((date, index) => {
      const thisMonth = date.getMonth();
      const thisDate = date.getDate();
      let event = monthNames[thisMonth] + " Full Moon Poya Day";
      if (index != 0) {
        if (specialDates[specialDates.length - 1].month == thisMonth) {
          event = `Extra ${monthNames[thisMonth]} Poya Day`;
        }
      }
      const poyaDay = {
        year: date.getFullYear(),
        type: "dynamic",
        month: thisMonth,
        date: thisDate,
        event: event,
        bgcolor: "#66FF00",
        color: "black",
        holiday: true,
      };
      specialDates.push(poyaDay);
      console.log(`Poya ${index + 1}: ${date.toDateString()}`);
    });
    console.log(specialDates);
  }
};

const removeOldPoyaDays = () => {
  specialDates = specialDates.filter((date) => date.type !== "dynamic");
};
