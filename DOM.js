// DOM = DOCUMENT OBJECT MODEL
// object{} that represents the page you see in the web browser 
// and provides you with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// javascript can access the dOM to dynamically change the content, structure,
// style of a web page.

const username = "bro code"
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `guest` : username;

console.dir(document);

// PUT WHAT THE CODE ABOVE IS DOING IN A COMMENT