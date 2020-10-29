log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 2020// it ("returns 1 when 1991"
let endYear = undefined





function lastDayIsFriday(initialYear) {

    let lastday = (y, m) =>new Date(y, m , 0).getDay()

    let dayNum = lastday(initialYear, 11)

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
