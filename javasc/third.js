// let rating = 5;
// if (rating = 5) {
//     console.log('excellent');
//     else if (ratting = 4) {
//         console.log('good');
// else {
//             console.log('i am other');
//         }
//     }
// }
// Problem here

//Ternary Operator: "?"

// Condition ?true: false

// let raining=true;
// raining?console.log("it is raining"):console.log("it is not raining")                    ;

const object = {
    rocket: '🎇',
    home : '💒',
}
for (k in object){
    // console.log(k);
}

const obj1={
    rocket:'🎇',
    fuel:2,
    config:{
        name:'mars'
    }
}
obj1.fuel=10
obj1['year']=2000
// console.log(obj1);

// constructor based syntax

const obj2=new object()
obj2.redbook='📕',
// obj2.1bluebook='📘',
obj2.myvalue='1 redbook',
console.log(obj2);