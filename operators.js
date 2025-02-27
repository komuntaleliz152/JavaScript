//And(&)
//Addition(+)
//Squareroot
//Division(-)







































let PricePerKg =5000;
let quantity =10;
let totalCost =PricePerKg*quantity;
console.log("The Price of 10kg of gnuts is:"+totalCost)
console.log('The price of gnuts is:$(totalCost)$')

//discount
let discount =500;
let discountedPrice =totalCost-discount;
console.log(discountedPrice) 

//comparison
let buyerMoney =4000;
let PriceOfMaizePerKg =6000;
console.log(buyerMoney!==PriceOfMaizePerKg)

//logical operators
let stockIsAvailable =true;
let buyerIsLegit =false;
console.log(stockIsAvailable && buyerIsLegit)

//concatinaton
let buyerName ="Marcus";
let productName ="Beans";
let receiptMessage ="Thank you,"+buyerName +"You have just purchased"+quantity+"kgs of"+productName;
console.log(receiptMessage)

//Assigment operators
let stock =100;
let sales =20;
stock =stock-sales;
stock-=sales
console.log(stock)

let salesRevenue =0;
//salesRevenue =salesRevenue+totalCost
salesRevenue+=totalCost
console.log(salesRevenue)
//order of precedence
//let value = 3+4*5;
//console.log(value);