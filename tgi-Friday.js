log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 2020// it ("returns 1 when 1991"
let endYear = undefined





function lastDayIsFriday(initialYear) {

    let lastday = function(y, m) {
      //getDay() -> 0 for Sunday, 1 for Monday, 2 for Tuesday, 3 for Wednesday, 4 for Thursday, 5 for Friday, 6 for Saturday.
      let date = new Date(y, m , 0);
      // log(date.getDay())
      return date.getDay()
    }
    let dayNum = lastday(initialYear, 10)

    switch (dayNum) {
      case 1:
        dayNum = "Monday"
        break;
      default:
      case 2:
        dayNum ="Tuesday"
        break;
      case 3:
        dayNum ="Wednesday"
        break;
      case 4:
        dayNum ="Thursday"
        break;
      case 5:
        dayNum ="Friday"
        break;
      case 6:
        dayNum ="Saturday"
        break;

    }

    console.log(dayNum);
}


lastDayIsFriday(initialYear)
