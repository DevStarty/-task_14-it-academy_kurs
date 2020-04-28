function addNumbers(x) {
    console.log(2 * x + 4);
    return 2 * x + 4;
}



function addNumbers2(x) {
    console.log(x * x);
    return x * x;
}




function addNumbers3(x) {
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
function allNumbers(addNumbers, addNumbers2, addNumbers3, ConvertsNumbers, ConvertsNumbers2) {
    console.log(addNumbers);
    console.log(addNumbers2);
    console.log(addNumbers3);
    console.log(ConvertsNumbers, ConvertsNumbers2);



}




addNumbers(10);
addNumbers2(10);
addNumbers3(10);
ConvertsNumbers(true, 2, '33');
ConvertsNumbers2(-2, '5', false);






allNumbers(addNumbers(10), addNumbers2(10), addNumbers3(10), ConvertsNumbers(true, 2, '33'), ConvertsNumbers2(-2, '5', false));


















