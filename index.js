// Add answers here 
//1. Los or New?
function _nameOfCity_(str){
    if (str.length >= 3 && ((str.substring(0,3) == "Los")||
        (str.substring(0,3) == "New")))
{
return str;  
}
return "_The city name does not begin with Los or New_";
}

console.log(_nameOfCity_("New York"))
console.log(_nameOfCity_("Newark"))
console.log(_nameOfCity_("Los Angeles"))
console.log(_nameOfCity_("Buxtehude"))


//2. isDivisible?
function _isDivisible_(Number){
    return (Number % 100 === 0)
}
console.log(_isDivisible_(1))
console.log(_isDivisible_(1000))
console.log(_isDivisible_(100))

//4. What's the weather?
function _isRaining_ (){
    if(_isRaining_ = true)
{
return "_wet day - you need an umbrella_";  
}
return "_dry day - leave your umbrella at home_";
}


console.log(_isRaining_(false));
// console.log(_isRaining_(true));


//1. Sequence
for(i=1;i<=256;i*=2) { console.log(i); }

//.2 Multiples 

for (i=1;i<6;i++){
    console.log(i*3+" ")
}

// cant figure out how to make it a string atm

//1. You've got the power



// 1. How many? 

function _vowelCount_(str){
    const vowels = str.match(/[aeiou]/gi).length;
    return vowels
}
console.log(_vowelCount_("Hello"))
console.log(_vowelCount_("test"));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

