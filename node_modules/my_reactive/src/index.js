let testObj = {
    name:'HY'
}
const effectFn = ()=>{
    document.body.innerText = testObj.name
}

const bucket = new Set()
const proxyObj = new Proxy(testObj,{
    get(target,key){
        bucket.add(effectFn)
        return target[key]
    },
    set(target,key,newValue){
        target[key] = newValue
        bucket.forEach(fn=>fn())
        return true
    }
})
effectFn()
setTimeout(()=>{
    testObj.name = 'Vue3'
},1000)
