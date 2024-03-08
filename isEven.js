// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(516/2); 


function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);
