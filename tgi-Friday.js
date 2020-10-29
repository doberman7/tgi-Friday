log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 2020// it ("returns 1 when 1991"
let endYear = undefined





function lastDayIsFriday(initialYear) {
    let count = 0
    let lastday = (y, m) =>new Date(y, m , 0).getDay()

    let dayNum = lastday(initialYear, 10)

    switch (dayNum) {
      case 1:
        dayNum = "Monday"
        count ++
        break;
      default:
      case 2:
        dayNum ="Tuesday"
        count ++
        break;
      case 3:
        dayNum ="Wednesday"
        count ++
        break;
      case 4:
        dayNum ="Thursday"
        count ++
        break;
      case 5:
        dayNum ="Friday"
        count ++
        break;
      case 6:
        dayNum ="Saturday"
        count ++
        break;

    }



    console.log(dayNum);
}


lastDayIsFriday(initialYear)
