//Q1
    //A
    function twoPowerByFor(intArray) {
        let powArray = []
        for (let i = 0; i < intArray.length; i++) {
            powArray[i] = Math.pow(2,intArray[i]);
        }
        return powArray;
    }
    //B
    function twoPowerByForEach(intArray) {
        let powArray = [];
        intArray.forEach((num, index) => {
            powArray[index] = Math.pow(2, num);
        });
        return powArray;
    }    
    //C
    function twoPowerByMap(intArray) {
        return intArray.map(num => Math.pow(2, num));
    }
    
    console.log(`For:                 ${twoPowerByFor    ([1,2,3])}`);
    console.log(`ForEach:             ${twoPowerByForEach([1,2,3])}`);
    console.log(`Map:                 ${twoPowerByMap    ([1,2,3])}`);

//Q2
    function classifyNumbers(numbersArray) {
        return numbersArray.map((element) => {
            if (typeof element !== "number") {
                return "N/A";
            } else if (element % 2 == 0) {
                return "Even";
            } else {
                return "Odd";
            }
        });
    }

    console.log(`classifyNumbers:     ${classifyNumbers    ([1,2,3,"Hasan"])}`);

//Q3
    function getAllNames(namesArray) {
        let result = [];
        namesArray.forEach((name) => {
            result.push(name);
        });
        return result;
    }

    console.log(`Return Names:        ${getAllNames(["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"])}`);

//Q4
    function fizzbuzz(numbersArray) {
        return numbersArray.map((number) => {
            if (number % 3 === 0 && number % 5 === 0) {
                return "Fizz Buzz";
            } 
            else if (number % 3 === 0) {
                return "Fizz";
            } 
            else if (number % 5 === 0) {
                return "Buzz";
            } 
            else {
                return number;
            }
        });
    }

    console.log(`FizzBuzz:            ${fizzbuzz([1, 3, 5, 15, 7, 10])}`);