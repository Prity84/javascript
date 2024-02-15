// alert("hello")
let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "black adam", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyhitesh = function(){
    console.log(`hitesh says hello`);
}
myHeros.hitesh()

//inheritence

const User = {
    name: "top name",
    email: "topuser@gmail.com"
}


const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

//goal is we want to add all the teachingsupport property into tsassistent simply use __proto__

const TSAssistant = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__: TeachingSupport //old method
}

//teacher binded with user
Teacher.__proto__ = User   //old syntax

//modern based syntax
// all the property of teacher binded with teaching support

Object.setPrototypeOf(TeachingSupport, Teacher)

//Goal: is get true length of string

String.prototype.truelength = function() {
    console.log(`true length is: ${this.trim().length}`);
}

let myname = "hitesh     "

//myname is not an object bcz there is no dropdown but this string has property of prototype that's why it is an object.