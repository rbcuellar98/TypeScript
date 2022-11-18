function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // if(typeof typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error ('Incorrect input!');
    // }
    const result = n1 + n2; // so it does add them has a string value
    if(showResult){
        console.log(phrase + result);
    }else{
        return n1 + n2;
    }
   
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

