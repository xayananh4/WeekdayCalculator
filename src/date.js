export default class Date {

  constructor(mm, dd, yyyy) {
    this.month = mm;
    this.day = dd;
    this.year = yyyy;
  }

  checkDate(mm, dd, yyyy) {
    let month = parseInt(mm);
    let day = parseInt(dd);
    let year = parseInt(yyyy);
    let ly = 0;
    let result = '';
    let correct_year = '';
    let leap_year = '';
    let boolean;


    try {
      let x = String(Math.abs(parseInt(yyyy)));
      boolean = Number.isInteger(parseInt(x));
    }
    catch (err) {
      boolean = false;
    }
    if (Number.isInteger(month) && Number.isInteger && boolean) {

      if (year == 0) {
        return "Year 0 does not exist";
      }
      else if (year < 0) {
        year = year + 1;
      }
      if (day < 1) {
        result = "Invalid Date";
      }
      else {
        // LEAP YEAR CODE
        let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (Number.isInteger(year / 4)) {
          months[2] = 29;
        }

        let count = 0;
        for (let i = 0; i < month; i++) {
          count += months[i];
        }
        // LEAP YEAR CODE
        year -= 1;

        let days = year * 365 + Math.floor(year / 4);

        let num = (count + day + days) % 7;
        let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        if (year >= 0) {
          correct_year = String(year + 1) + "CE";
        }
        else {
          correct_year = String(Math.abs(year)) + "BCE";
        }
        if (months.includes(29)) {
          leap_year = "It is a leap year.";
          ly = 1;
        }

        else {
          leap_year = "It is not a leap year.";
        }

        if (day <= months[month]) {
          result = month_name[month - 1] + " " + String(day) + " " + correct_year + " is a " + weekday[num] + ".\nIt is week " + String(Math.ceil(day / 7)) + " of " + month_name[month - 1] + ".\nIt is day " + String(count + day) + " with " + String(365 + ly - (count + day)) + " days left in the year.\n" + leap_year;
        }
        else {
          result = "Invalid date";
        }
      }
    }
    else {
      result = "Check input value";
    }
    return result;

  }

}