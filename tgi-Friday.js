log = console.log
//return the number of times a month ends with a Friday.

// let initialYear = 2017 //2017 - Expected: 2, instead got: 1

let initialYear = 2017 //1901 and 2000 - Expected: 171
let endYear = 2018 //1901 and 2000 - Expected: 171



function lastDayIsFriday(initialYear, endYear) {
  let date = null
  let dayNum = null
  let dateObjOfMonth = null
  if (typeof endYear === "undefined") {
    let inOnYear = fridaysInAyear()
    // console.log(inOnYear);
    return inOnYear
  } else {

    let severalYears = moreThatOneYear()

    // console.log(severalYears)
    // return severalYears
  }

  function moreThatOneYear() {
    let sum = 0
    //determinar años entre initialYear y endYear
    let years = endYear - initialYear
    // console.log(years);
    //correr fridaysInAyear ese numero
    for ( i = 1; i <= years; i++) {
      // console.log("----------index",i)
      sum += fridaysInAyear()
      console.log("met",sum)
    }
    return sum
  }

  function fridaysInAyear() {
    let count = 0

    //funcion q obtiene el ulttimo dia en un objDate
    let lastday = (y, m) => {
      date = new Date(y, m, 0)
      return date
    }
    //iterara del 1 al 12
    for (mes = 1; mes < 13; mes++) {
      //obtener ulttimo día de cada mes
      dateObjOfMonth = lastday(initialYear, mes)
      // obtener numero del 0 al 6 q refleja días de domingo a lunes
      dayNum = dateObjOfMonth.getDay()
      //  si el numero es 5 es viernes y aumentar conteoo
      if (dayNum == 5) {
        console.log(dateObjOfMonth);
        dayNum = "Friday"
        count++
      }

    }
    return count

  }

}


lastDayIsFriday(initialYear,endYear)
