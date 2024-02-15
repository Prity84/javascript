//Function & Object

//normal function
// function sum()
// {
//     let num1=20;
//     let num2=30;
//     console.log('Addition of two numbers are',num1+num2);
// }
// sum();

//function with parameter
// function sum(value1, value2)
// {
//     console.log('Addition of two numbers are',value1+value2);
// }
// sum(2,5);
// sum(6,8);
// sum(10,20);
// sum(20,30);
// sum(66,4);

//function with return type
// function sum(value1, value2) {
//     let result = value1 + value2;
//     return result;
// }
// let add=sum(10,25);
// console.log(add);

// let add = sum(3, 4);
// console.log(add);

//string

// function URL(url,domain)
// {
//     let con="radha";
//     let result= con+url+domain;
//     return result;

// }
// console.log(result);    problem here


//n number of parameters        [ Pass Array]
// function sum(arr){
//     let sum=0;
//     for(let i=0; i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// let summary=[1, 3, 4, 5, 6];
// let arresult=sum(summary)
// console.log(arresult);

// function nihal()
// {
//     //arguments
//     let sum=0;
//     for(let i=0; i<arguments.length; i++) {
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(nihal(4, 5, 6, 2, 1));

// function prity()
// {
//     //arguments    =>  predefined
//     let sum=0;
//     for(let i=0; i<arguments.length; i++){
//         sum=sum+arguments[i];
//     }
//     return sum;
// }
// console.log(prity(3, 2, 1, 6, 7))


// Arrow function
// let shiva=() => {}

// let jaimin=(value1)=>
// {
//     console.log('me prity', var1,var2);
// };
// jaimin();

// Arrow function
// let jaimin=(var1, var2)=>
// {
//     console.log('me prity', var1, var2);
// };
// jaimin(1,2);

// let manas = (val1, val2) => {
//     console.log('me shaam', val1, val2);
// };
// manas(3, 4);

//objects
// let userName={
//     firstname:'prity',
//     lastname:'kumari',
//     role:'admin',
//     logiccount:25,

//  }
// console.log(userName);
// console.log(userName.role);
// userName.logiccount=20;
// console.log(userName);

// for(let x in userName) {
//     console.log(userName[x]);
// }