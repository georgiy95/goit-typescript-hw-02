/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfTheWeek { 
   Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
};
function isWeekend(day: DaysOfTheWeek): boolean {

   return   day === DaysOfTheWeek.Saturday || day === DaysOfTheWeek.Sunday
}

let isDay: boolean  = isWeekend(DaysOfTheWeek.Saturday)
// let isDay: boolean  = isWeekend(DaysOfTheWeek.Sunday)

// console.log(isDay)