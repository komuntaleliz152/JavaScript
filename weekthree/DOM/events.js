//eventListener vs eventHandler
let button=document.getElementById("btn")
button.onclick=function(){
    console.log("button clicked")
}
//element.onClick= function
button.onclick=function (){
    console.log("overWritten")
}
//event listener
let button= document.getElementById("btn")
button.addEventListener("click", function (){
     console.log("button clicked")
})
button.addEventListener("click", function (){
    console.log("second eventIistener")
})

// Element.addEventListener(event, function)
//you can delete one or the entire listeners
function sayHey(){
    console.log("Hey");
}
button.addEventListener("click", sayHey)
button.removeEventListener("click", sayHey)