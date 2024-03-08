// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    } else {
        return false;
    }
}

const isHerYearLeapYear = isLeapYear(2025);
console.log('my year', isHerYearLeapYear)

const isMyYearLeapYear = isLeapYear(2024);
console.log('My Year ', isMyYearLeapYear)