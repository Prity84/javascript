// const object = {
//     rocket:'🎇',
//     home:'💒'
// }

// for(k in object){
//     console.log(k);
// }
// string, number, bigint, boolean, null, undefined, symbol these all are not an object apart from this everything is object in js

// object include object.
// it is defined as const but we can modify the valuen
// part1
// const obj1={
//     rocket:'🎇',
//     fuel:2,
//     config:{
//         name:'mars'
//     }
// }
// onj1.fuel=200
// obj1['year'] = 2000

//part2

// const obj2=new object()    //constructor
// obj2.redbook='📕'
// obj2.myvalue='1 blue book'
// obj2.1bluebook='📘'   

// console.log(obj2);

// Part 3
// very rare case to use  this property when u wann fetch from the existing value then we use this property.

const powers = {
    fly: true,
    cordinate: Math.random() + 2
}
const obj3 = Object.create(powers)
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

// part 4

const obj4 = Object.create({})

// it is common method to add it is working fine then why we need another method , defineproperty is thing the property you want to control more then we add this method.
// obj4.name = "prity",
// obj4.home = "Bihar",
Object.defineProperty(obj4, 'book', {
    // icon:'📘'
    // get:()=>'📘'
    // set  =how it works
    enumerable: true
})
// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

// for(k in obj4){
//     console.log("value is :", k);
// }


//let pen = 'hitesh'
// part 5

const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function () {      //function
        this.pen += '🖋️📘'
        console.log(this);
    },
}
//     printacomic:()=>  {
//     // this.pen+= '🖋️📘'   the design of arrow fun does not have access of this property. it will not work
//     console.log(this);
//     },
// }

// console.log(obj5.prinComic);
// console.log(obj5.printComic().printComic().printComic());   chaining of object is js.

// console.log(obj5.printacomic);