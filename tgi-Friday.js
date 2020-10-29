log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 2017 // Not the correct number of Fridays in 2017 - Expected: 2, instead got: 1
let endYear = undefined



function lastDayIsFriday(initialYear) {
  let count = 0
  let date = null
  let dayNum = null
  let dateObjOfMonth = null
  //funcionio q obtiene el ulttimo dia en un objDate
  let lastday = (y, m) => {
    date = new Date(y, m, 0)
    return date
  }

  for (mes = 1; mes < 13; mes++) {
    dateObjOfMonth = lastday(initialYear, mes)
    console.log(dateObjOfMonth);
    dayNum = dateObjOfMonth.getDay()
  }

  switch (dayNum) {
    case 1:
      // console.log(dateObjOfMonth);
      dayNum = "Monday"
      log(dayNum)

      count++
      break;
    default:
    case 2:
      // console.log(dateObjOfMonth);
      dayNum = "Tuesday"
      log(dayNum)

      count++
      break;
    case 3:
      // console.log(dateObjOfMonth);
      dayNum = "Wednesday"
      log(dayNum)

      count++
      break;
    case 4:
      // console.log(dateObjOfMonth);
      dayNum = "Thursday"
      log(dayNum)

      count++
      break;
    case 5:
      // console.log(dateObjOfMonth);
      dayNum = "Friday"
      log(dayNum)
      count++
      break;
    case 6:
      // console.log(dateObjOfMonth);
      dayNum = "Saturday"
      log(dayNum)


      count++
      break;

  }



  console.log("count", count)
  return count
}


lastDayIsFriday(initialYear)
