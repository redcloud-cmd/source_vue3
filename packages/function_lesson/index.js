// function now(){
//     return 21
// }
// function later(){
//     answer = answer * 2
//     console.log("xxx",answer)
// }
// var answer = now()
// setTimeout(later,1000)
const obj = Object.create({})
Object.defineProperties(obj,{
    name:{
        configurable:true,
        enumerable:true,
        writable:true,
        value:'hy'
    },
    age:{
        configurable:false,
        enumerable:false,
        get:function(){
            return this._age
        },
        set:function(value){
            this._age = value
        }
    }
})
console.log(obj)