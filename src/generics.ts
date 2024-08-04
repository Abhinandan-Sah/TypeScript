//problem-1 This was a problem that we cannot use toUpperCase in this scanrio
/*type Input = (number | string)

function firstEl(arr: Input []){
    return arr[0];
}

const value = firstEl(["avi", "singh"]);
console.log(value.toUpperCase( ));
*/

//We Introduce Generics
/* function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>("myName")
let output2 = identity<number>(100);
console.log(output1.toUpperCase); */

//Solution of problem-1
function firstEl<T>(arr: T[]){
    return arr[0];
}

const value = firstEl<string>(["avi", "singh"]);
const value1 = firstEl<boolean>([false, true]);
console.log(value.toUpperCase( ));