log = console.log
//return the number of times a month ends with a Friday.

let initialYear = 2017 //2017 - Expected: 2, instead got: 1
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
    // console.log(dateObjOfMonth);
    dayNum = dateObjOfMonth.getDay()
    // log(dayNum)
    if (dayNum == 5) {
      dayNum = "Friday"
      count++
    }
  }

  return count
}


lastDayIsFriday(initialYear)
