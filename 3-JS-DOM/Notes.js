// Find Elements By [ID, Class, Tag, Selector]
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelectorAll();

// Find Elements By Objects
document.title;
document.images;
document.forms;
document.body;
document.anchors; // Deprecated
document.links;

/*
element.classList           => Get List of Classes
    .Length                 => Get Length of ClassList
    .item(index)            => Get Class of this index
    .contains(class)        => Check if it contains this class or not
    .add(class1, class2)    => Add class or more to the classList
    .remove(class1, class2) => Remove class or more to the classList
    .toggle(class)          => Toggle class
*/

// children | childeNodes | parentElement | parentNode
/*
element.children            => Get List of Element Nodes
    .Length                 => Get Length of Children
    [index]                 => Get Element of this index

element.childElementCount   => Equivalent to element.children.length

element.childNodes          => Get List of Element & Text Nodes (Considering Spaces & Comments as children)
    .Length                 => Get Length of Children
    [index]                 => Get Element of this index

element.[first/last]Child           => Get the first/last Element (Whatever Text or element Node) 
element.[first/last]ElementChild    => Get the first/lsat Element Node

document.createElement(tagName)     => Creates Element with tagName
document.createTextNode(myText)     => Creates the Text Node

parentE.appendChild(myNewChild)     => Appends myVar to the element
parentE.insertBefore(new, childE)   => Inserts 'new' before childE (parentE is the parent of them)
parentE.remove(childE)              => Removes childE from parentE

using element.childNodes[index]
    .tagName        => Returns tagName of the node (If it is a HTML tag)
    .nodeName       => Returns nodeName (text, comment, tagName)
    .nodeType       => Returns nodeType (1 > tag, 2 > attribute, 3 > text, 8 > Comment)
    .nodeValue      => Returns the content of the node

let myVar = element.childNodes[index].cloneNode(true);  => Clone the Node and Save it in myVar

ele.parentElement   => Returns parentElement of ele
ele.parentNode      => Returns parentNode of ele

ele.[next/previous]Sibling          => Returns next/previous sibling(text, comment, element)
ele.[next/previous]ElementSibling   => Returns next/previous sibling(element onlyyy)

element.focus()     => Focus on element(like input)
element.blur()      => Blur on element
element.click()     => Click on element

parentE.contains(childE)    => Returns true if parentElement contains childElement

element.client[Top/Left]
    Return Only Border Size from [Top/Left]
    *If scroll bar direction is left, It will return with the border left

element.client[Height/Width]
    Visible Area, Including Padding Only, Excluding(Scroll, Border, Margin)

element.scroll[Height/Width]
    Invisible Area, Including Padding & Scroll, Excluding(Border, Margin)

element.offset[Height/Width]
    Invisible Area, Including Padding, Scroll & Border, Excluding(Margin)


document.documentElement.scrollTop;

document.inputEncoding  => Same as (document.characterSet) but Deprecated
document.characterSet   => Returns charset of the HTML Page
document.lastModified   => Returns Date and Time of last Modify in HTML Page
document.URL            => Return the Page URL

*/

// Events
window.onload;
window.onscroll;
window.onresize;

element.onclick;
element.ondblclick;
element.oncontextmenu;
element.onmouseenter;
element.onmouseleave;
element.onkey[up / down];
element.onkeypress; // Deprecated
element.onfocus;
element.onblur;
element.onsubmit;
