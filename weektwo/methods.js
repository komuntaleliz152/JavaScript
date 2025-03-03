let person ={
    name:"Marcus",
    age :4,
    laugh :function(){
        console.log("Hello my name is"+ this.name +"I am"+ this.age +"years old")
    }
}
console.log(person.name)
person.laugh()

let store={
    name:"Karibu groceries",
    location:"Manganjo",
    stock:{
        cowpeas:100,
        soybeans:300,
        beans:400,
    },
    saleProduce: function(){
        console.log("sold successfully")

    }
}
store. saleProduce()

let calculator={
    add:function(a,b){
       return a+b 
    },
       
    subtract:function(a,b){
        return a-b
    }
}
console.log(calculator.add(5,4))
console.log(calculator.subtract(10,5))