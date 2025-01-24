let specialDates = [
  {
    type: "static",
    month: 0,
    date: 1,
    event: "New Year's Day",
    bgcolor: "#674dff",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 1,
    date: 4,
    event: "Independence Day",
    bgcolor: "red",
    color: "white",
    holiday: true,
  },
  {
    type: "static",
    month: 1,
    date: 14,
    event: "Valentine's Day",
    bgcolor: "Pink",
    color: "black",
    holiday: true,
  },
  {
    type: "static",
    month: 2,
    date: 17,
    event: "St. Patrick's Day",
    bgcolor: "green",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 3,
    date: 1,
    event: "April Fool's Day",
    bgcolor: "orange",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 4,
    date: 5,
    event: "Cinco de Mayo",
    bgcolor: "red",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 5,
    date: 21,
    event: "Father's Day",
    bgcolor: "blue",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 6,
    date: 1,
    event: "National Doctor's Day",
    bgcolor: "cyan",
    color: "black",
    holiday: false,
  },
  {
    type: "static",
    month: 7,
    date: 15,
    event: "Assumption of Mary",
    bgcolor: "blue",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 8,
    date: 5,
    event: "Teacher's Day",
    bgcolor: "purple",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 9,
    date: 31,
    event: "Halloween",
    bgcolor: "orange",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 10,
    date: 26,
    event: "Thanksgiving",
    bgcolor: "brown",
    color: "white",
    holiday: false,
  },
  {
    type: "static",
    month: 11,
    date: 25,
    event: "Christmas",
    bgcolor: "red",
    color: "white",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 0,
    date: 13,
    event: "Duruthu Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 1,
    date: 12,
    event: "Navam Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 2,
    date: 13,
    event: "Madin Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 3,
    date: 12,
    event: "Bak Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 4,
    date: 12,
    event: "Vesak Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 4,
    date: 13,
    event: "Day following Vesak Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 5,
    date: 10,
    event: "Poson Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 6,
    date: 10,
    event: "Esala Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 7,
    date: 8,
    event: "Nikini Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 8,
    date: 7,
    event: "Binara Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 9,
    date: 6,
    event: "Vap Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 10,
    date: 5,
    event: "Ill Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
  {
    year: 2025,
    type: "static",
    month: 11,
    date: 4,
    event: "Unduvap Full Moon Poya Day",
    bgcolor: "yellow",
    color: "black",
    holiday: true,
  },
];

const monthNames = [
  "Duruthu",
  "Navam",
  "Madin",
  "Bak",
  "Vesak",
  "Poson",
  "Esala",
  "Nikini",
  "Binara",
  "Vap",
  "Ill",
  "Unduvap",
];

function calculateFullMoonPoyaDays(startDate, numberOfPoyas, yearProgess) {
  const lunarCycle1 = 29;
  const lunarCycle2 = 30;
  const fullMoonDates = [];
  let lunarCycle;

  let currentDate = new Date(startDate);
  if (currentDate.getMonth() % 2 == 0) {
    lunarCycle = lunarCycle2;
  } else {
    lunarCycle = lunarCycle1;
  }

  for (let i = 0; i < numberOfPoyas; i++) {
    if (fullMoonDates.length > 0) {
      lastMonth = new Date(fullMoonDates[fullMoonDates.length - 1]).getMonth();
      // console.log(lastMonth);
      if (lastMonth == currentDate.getMonth() && lastMonth != 4) {
        currentDate.setMonth(currentDate.getMonth() + 1);
        currentDate.setDate(1);
      }
    }
    fullMoonDates.push(new Date(currentDate));
    if (yearProgess == true) {
      currentDate.setDate(currentDate.getDate() + lunarCycle);
    } else {
      currentDate.setDate(currentDate.getDate() - lunarCycle);
    }
    console.log(currentDate);
    if (lunarCycle == lunarCycle1) {
      lunarCycle = lunarCycle2;
    } else {
      lunarCycle = lunarCycle1;
    }
  }
  console.log(fullMoonDates);

  return fullMoonDates;
}
