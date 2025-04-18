let x: number = 1;
let y: number = 2;

let z: undefined = undefined;
let w: bigint = 12343243432n;
let v: null = null;

const n:number=1234;

// non-premetive
let arr: number[] = [1, 2, 3, 4, 5];

let arr1 = ["avi", 1, true, null, undefined, 1234, 12343243432n];
let arr2:(string | number | null | bigint | undefined)[] = ["avi", 1, null, undefined, 1234, 12343243432n];

let tuple: [string, boolean, number] = ["avi", true, 1234];

let obj1: {name: string, age: number, gender: string} = {
    name: "Avi",
    age: 22, 
    gender: "Male"
}

type customer = {
    name: string, 
    id: string,
    phone: number,
    email: string,
}

let cust1: customer = {
    name: "Avi",
    id: "1234",
    phone: 1234567890,
    email: "avi@gmail.com"
}

interface admin{
    name: string, 
    id: string,
    phone: number,
    email: string,
    role: string,
}

let emp1: admin = {
    name: "Avi",
    id: "1234",
    phone: 1234567890,
    email: "avi@gmail.com",
    role: "admin"
}