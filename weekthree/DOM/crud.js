 console.log("am connected")
//we want to create a function  an element in the dom
function create(){
    const button=document.createElement("button")
    console.log("button clicked")
}

// we want to create a function to read an element in the dom
function read(){
    const readqn=document.getElementById("readQn")
    console.log("file read")
}
//we want to create a function to update an element in the dom
function update(){
    const updateQn=document.getElementById("updateQn")
}
//we want to create a function to delete an element in the dom
function clear(){
    const deleteQn=document.getElementById("deleteQn")
}