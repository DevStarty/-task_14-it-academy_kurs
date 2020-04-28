function addArguments(x) {
    console.log(2 * x + 4);
    return 2 * x + 4;
}



function addArguments2(x) {
    console.log(x * x);
    return x * x;
}




function addArguments3(x) {
    console.log(2 * (x * x) + 4);
    return 2 * (x * x) + 4;
}






function ConvertsNumbers(a, b, c) {

    console.log(Number(a) + Number(b) + Number(c));
    return (Number(a) + Number(b) + Number(c));
}


function ConvertsNumbers2(a, b, c) {

    console.log(Number(a) + Number(b) + Number(c));
    return (Number(a) + Number(b) + Number(c));
}


// 5 funkcja
function allNumbers(addArguments, addArguments2, addArguments3, ConvertsNumbers, ConvertsNumbers2) {
    console.log(addArguments);
    console.log(addArguments2);
    console.log(addArguments3);
    console.log(ConvertsNumbers, ConvertsNumbers2);



}


addArguments(10);
addArguments2(10);
addArguments3(10);
ConvertsNumbers(true, 2, '33');
ConvertsNumbers2(-2, '5', false);






allNumbers(addArguments(10), addArguments2(10), addArguments3(10), ConvertsNumbers(true, 2, '33'), ConvertsNumbers2(-2, '5', false));