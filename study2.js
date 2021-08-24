//SPREAD OPERATOR IN FUNCTION CALL

//example 1
const arr = [1, 2, 3];

function add(a, b, c) {
    return a + b + c ;
}

add(...arr); 
//=> 6

//example 2
const arr2 = ['Bitcoin', '21 million', 'a hedge against inflation']

function sentence(a, b, c) {
    return `Unlike fiat currencies, ${a} has the limited supply of ${b} and is ${c}`
}

sentence(...arr2);
//=> Unlike fiat currencies, Bitcoin has the limited supply of 21 million and is a hedge against inflation
