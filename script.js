// DOM Manipulation
// Using document to dynamically change the content of HTML elements on webpage

// DOM Manipulation Properties

// textContent: "It can gets or sets the text content of an HTML element"
const heading = document.getElementById("heading");
heading.textContent = "Welcome to DOM Manipulation!";

// innerText: "It can gets or sets the text that is visible to the user"
const description = document.getElementById("description");
description.innerText = "First para is updated successfully";

// innerHTML: "It can gets or sets the HTML markup inside an element"
const container = document.getElementById("container");
container.innerHTML = "second paragraph updated";

// DOM Methods

// document.createElement(): "DOM method used to create a new HTML element dynamically"
const subHeading = document.createElement("h2");
console.log(subHeading);

// appendChild(): "Used to create element inside another HTML element"
const parentDiv = document.getElementById("parentDiv");
subHeading.textContent = "My Dynamically Created Heading";
parentDiv.appendChild(subHeading);

// removeChild(): "used to remove a specified child node from its parent element"
const spanElement = document.querySelector("span");
parentDiv.removeChild(spanElement);

// append(): "append inserts one or more nodes or strings at the end of an element's child list"
const parent = document.getElementById("parent");
const paraAtEnd = document.createElement("p");
paraAtEnd.textContent = "I'm the Last Element";
parent.append(paraAtEnd);

// prepend(): "prepend inserts one or more nodes or strings at the beginning of an element's child list"
const headingAtStart = document.createElement("h2");
headingAtStart.textContent = "I'm the First Element";
parent.prepend(headingAtStart);

// before(): "inserts one or more nodes or strings immediately before a specified element, as its sibling"
const testHeading = document.getElementById("testHeading");
const firstPara = document.createElement("p");
firstPara.textContent = "I am before the heading!";
testHeading.before(firstPara);

// after(): "inserts one or more nodes or strings immediately after a specified element, as its sibling"
const testPara = document.getElementById("testPara");
const lastPara = document.createElement("p");
lastPara.textContent = "I am after the testPara";
testPara.after(lastPara);

// remove(): "It removes an element from the DOM directly, without needing to select its parent"
const removeParent = document.getElementById("removeParent");
const removePara = document.getElementById("removePara");
console.log(removeParent);
removePara.remove();

// replaceWith(): "It replace an element with one or more nodes or strings"
const oldPara = document.getElementById("oldPara");
const newHeading = document.createElement("h2");
newHeading.innerText = "Updated heading";
oldPara.replaceWith(newHeading);

// replaceChild(): "It replace an existing child node with a new node through its parent element"
const childPara = document.getElementById("childPara");
const childHeading = document.createElement("h2");
childHeading.textContent = "Welcome to replaceChild method";
removeParent.replaceChild(childHeading, childPara);


