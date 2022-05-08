document.getElementById("object-test").innerHTML =
  document.forms[0].number.value;

function changeTitle(name) {
  document.title = name;
}

function checkClass() {
  let className = this.innerText;
  if (document.getElementById("p-test").classList.contains(className)) {
    document.getElementById(
      "element-test"
    ).textContent = `Paragraph contains ${className} in the list of classes`;
  } else {
    document.getElementById(
      "element-test"
    ).textContent = `${className} isn't in the list of classes`;
  }
}

let testClasses = document.getElementsByClassName("test-class");
for (let i = 0; i < testClasses.length; i++) {
  testClasses[i].addEventListener("click", checkClass);
}

let form = document.querySelectorAll("form")[1],
  heading = document.createElement("h2"),
  headingTxt = document.createTextNode("Hello World!");

heading.appendChild(headingTxt);

form.insertBefore(heading, form.firstChild);

let myHeading = form.children[0].cloneNode(true);

myHeading.setAttribute("class", "navbar");

document.body.insertBefore(myHeading, document.body.firstElementChild);

// Add afterNav Class to the first element after Navbar
document.body.children[1].classList.add("afterNav");

if (form.parentElement.tagName === "BODY") console.log(form.parentElement);

window.onload = function () {
  form.children[1].focus();
};

function removeFocus() {
  this.style.color = "red";
  console.log(this);
  form.children[1].blur();
}

document.getElementById("remove-focus").onclick = removeFocus;

let monsters = document.getElementById("monsters"),
  eatBtn = document.getElementById("eat-monster");

function eatMonster(index) {
  monsters.children[index].style.display = "none";
}

function eatAllMonsters() {
  for (let i = 0; i < monsters.children.length - 1; i++) {
    eatMonster(i);
  }
}

eatBtn.onclick = function () {
  eatMonster(0);
};

document.getElementById("power-up").onclick = function () {
  eatBtn.addEventListener("click", eatAllMonsters);
};

document.getElementById("power-down").onclick = function () {
  eatBtn.removeEventListener("click", eatAllMonsters);
};

window.onscroll = function () {
  if (document.documentElement.scrollTop > 40) {
    // console.log(document.body.firstElementChild);
    document.body.firstElementChild.style.backgroundColor = "cyan";
  } else {
    document.body.firstElementChild.style.backgroundColor = "bisque";
  }
};

let ul = document.getElementById("js-ul"),
  ulComment = document.createComment("This comment created by JS");

ul.appendChild(ulComment);

for (let i = 0; i < 20; i++) {
  addElement("li", `Element created by JS ${i + 1}`, ul);
}

function addElement(elementName, textContent, parentElement) {
  let element = document.createElement(elementName),
    textNode = document.createTextNode(textContent);

  element.appendChild(textNode);
  parentElement.appendChild(element);
}

ul.firstElementChild.setAttribute("class", "first");
