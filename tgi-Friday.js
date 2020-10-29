log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 1991// it ("returns 1 when 1991"
let endYear = undefined





function lastDayIsFriday(initialYear) {
    let count = 0
    let lastday = (y, m) =>new Date(y, m , 0).getDay()
    let dayNum = null
    for ( mes = 1; mes < 13; mes++) {
       dayNum = lastday(initialYear, mes)
      // console.log(mes);
    }

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



    console.log(count);
}


lastDayIsFriday(initialYear)
