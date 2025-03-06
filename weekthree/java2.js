let paragraph=document.querySelector('p');
console.log(paragraph.textContent);
//using getElementByTagname
let paragraph1=document.getElementsByTagName('p');
let firstParagraphTagName =paragraph1[3];
console.log("first paragraph(getElementByTagName):", firstParagraphTagName);

//get each paragraph using using query selector by ID
let paragraph2 = document.querySelector("#paragraph1");
let paragraph3 = document.querySelector("#paragraph2");
let paragraph4 = document.querySelector("#paragraph3");
let paragraph5 = document.querySelector("#paragraph4");
let paragraph6 = document.querySelector("#paragraph5");

console.log("paragraph2:",paragraph2.textContent);
console.log("paragraph3:",paragraph3.textContent);
console.log("paragraph4:",paragraph4.textContent);
console.log("paragraph5:",paragraph5.textContent);
console.log("paragraph6:",paragraph6.textContent);

//Get all <p> elements as NodeList using querrySelectorAll
let allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs)

//Get all <p> elements by tagName
let allparagraphsByTag = document.getElementsByTagName("p");
console.log(allParagraphs)

//Loop through the NodeList and get the text content of each paragraph
allParagraphs.forEach((p, index) =>{
    console.log(`paragraph ${index + 1}: ${p.textContent}`);
})

//set the text content of the fourth paragraph
if(allParagraphs.length >=5) {
    allParagraphs[4].textContent = "Fourth paragraph";
    console.log("Fourth paragraph");
}
//set id and class attributes for all paragraphs using different methods
allParagraphs.forEach((paragraph, index))
    //using setAttribute
    paragraph.setAttribute("id", `para-${index + 1}`);
 
//using dot notation
paragraph.className = `paragraph-class-${index+1}`;
console.log