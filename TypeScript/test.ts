
//Standard JavaScript DataTypes
// number
// string
// boolean
// null
// undefined
// object

//Additonal DataTypes for TypeScript
// any
// unknown
// never
// enum
// tuple


interface User {
    name : string,
    age : number
};

const user: User = {
    name: 'Jason',
    age: 38
};

console.log(user);


//no need to annotate these variables because we initalize them.
const string = 'Jason';
//In TS you can seperate large numbers with _
const bigAssNum = 999_999_999;
const is_true = true;

console.log(bigAssNum);

//if we do not initialize a variable with a type
let dumJS;
//this sets the variable to type 'any'
//so then we can do plain ole JS dum stuff like
dumJS = 'Hey';
dumJS = 12;
//and that's just dum, go back to JS.
//try not to use any

//this parameter will throw an error since it is not annotated. We can make it work by implicitly giving it : any
// function render(doc) {
//     console.log(doc);
// }

function render(doc : any) {
    console.log(doc);
};

//using a arrays
const jsNumArr = [1, 2, "3", "four"];
//pretty dum because we are mixing strings and arrays

const numArr: number[] = [1, 2, 3, 4]; //however no need for annotation

const correctNumArr = [1, 2, 3, 4]; //TS can tell this is a number array.

//if we are declaring an empty array we do have to annotate otherwise it will give it the 'any' type which again is something that we don't want.

const emptyNumArr: number[] = [];

//TS has tuples which is a fixed length array which we declare the types, the len of the values most match the length of the types and be of those types. Tuples should really only have two values, like key value pairs
const exampleTuple: [number, string] = [1 , 'Todd'];

// do not use push with tuples
//exampleTuple.push('should not be here');

//TS also has Enums, which are a list of related types 
//if we use const with out enum it will generate more optimized js code

const enum Size { Small = 1, Medium, Large };
const mySize: Size = Size.Medium;
//variable dec^^^^    Type     value
// here is the pattern you need to remember
console.log(mySize);

//functions
function doCalc(sumNum : number) {//since we are not returning anything this function is set to void
    console.log(sumNum);
};

function doCalc2(sumNum : number) {//since we are returning and our parameter is a number TS infers we will return a number
    return sumNum;
};
// however we should always declare if a function is returning something or not for clarity's sake
function doCalc3(sumNum : number): void {
    console.log(sumNum);
};

// function doCalc4(sumNum : number): number {//throwing error because we enabled noUnusedParameters in tsconfig
//     let x; //this is showing an error because it is unused and we turned on noUnusedLocals in tsconfig
//     return 0;
// }

//type alis Objects
type SumObject = {
    readonly id: number,
    name: string,
    age : number
    ageFromDate: (age: number) => number
};

const dudeBro: SumObject = {
    id : 1,
    name : 'Brodude',
    age : 23,
    ageFromDate: (age) => {
        return age - 1985;
    }
};

//union types - we can give a varible or function type more then one parameter

function stringOrNumber(strNum: number | string): number {
    //narrowing
    if (typeof strNum === 'number') return strNum + 5;
    else return parseInt(strNum) + 10;
};

console.log(stringOrNumber(10));
console.log(stringOrNumber('10'));

//intersection types we are going to use & instead of |

type DraggingBalls = {
    drag: () => void
};

type RaggingBalls = {
    resize: () => void
};

//drag and resize
type UIWadgit = DraggingBalls & RaggingBalls;

const textBox: UIWadgit = {
    drag: () => {},
    resize: () => {}
};

//literal types
//this makes it so the variable can only be assigned to that value;
let cannotChange: 50 | 101;

//throws error
// cannotChange = 100;

cannotChange = 101;//this works because cannotChange can be either 50 or 101 because of the union type

//somehow you may find this useful at some point

type Athing = 50 | 100;

let theThing: Athing = 100; //this somehow might be more useable, maybe for switching between local and cloud server work

//optional Chaining

type Customer =  {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
};

const customer = getCustomer(0);
//optional property access operator with ?
console.log(customer?.birthday?.getFullYear()); // this means if customer is not null or undefined

//optional element access operator
//array of customers. If the first element or an element is going to be null or undefined we can use ? to print null or undefined unless it has a value
//customers?.[0]

//optional call operator
let log: any = null;
log?.('a');//this is going to give undefined because we are trying to call a function that isn't a function.
