
let counter = 0;
let timer = setInterval(() => {
    if (counter<=20) { 
console.log("AutomobilesLyon")
counter ++
}
}, 200)





setTimeout(() => {
    clearInterval(timer)
}, 1000)