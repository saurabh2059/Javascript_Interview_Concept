
"use strict"


// 1. this in global space
    console.log(this)
    // global object
    // there is always a node js environment, so this represent window object


// 2. this inside a function

function myFunc(){
    // value depends on strict / non strict mode

    console.log(this);


}



//  in strict mode ( this substitution )
//  if the value of this keyword is undefined or null this will be          replaced     with global object
// only in non strict mode




// 3. this value depend on how the function is called (window)
myFunc();
window.myFunc();


// 4. this inside object is method

const myObj = {
    name: "test",
    x: function(){
        console.log(this);
        // console.log(this.name)
    }
}

myObj.x()
// here this refer to the object which is calling the method
// function->  call / apply / bind
const myObj2={
    name: "test2",
    
}
myObj.x.call(myObj2)


// can apply bind methods



// 5. this inside arrow funciton


const myObj3 = {
    name: "arrowFunc",
    x: ()=>{
        console.log(this);
        // arrow function do not have their own this value
        // it take this value from the surrounding lexical context
    }
}

myObj3.x()

// 6. this inside nested arrow function
const obj = {
    name:"this obj",
    x:function(){
        const y = ()=>{
            console.log(this)
        }
        y()
    }
}

obj.x()



// 7. this inside dom

// value is reference to html element