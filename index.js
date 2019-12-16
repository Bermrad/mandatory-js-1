var link = document.createElement( "link" );
link.href = "main.css";
link.type = "text/css";
link.rel = "stylesheet";
document.getElementsByTagName( "head" )[0].appendChild( link );

let title = document.getElementsByTagName("title")[0];
title.textContent="Fruits & Vegetables Corp ";

const h1 = document.getElementsByTagName('h1')[0];
h1.textContent = "Fruits & Vegetables Corp";

var item = document.getElementsByTagName("a")[2];
item.textContent = "Vegetables";

let h2 = document.createElement("h2");
let node = document.createTextNode("About");
document.body.appendChild(h2);
h2.appendChild(node);
main.insertBefore(h2, main.childNodes[0]);


let about = document.getElementById("about");
main.insertBefore(about, main.childNodes[1]);

let h3 = document.createElement("h2");
let node2 = document.createTextNode("Contact");
document.body.appendChild(h3);
h3.appendChild(node2);
main.insertBefore(h3, main.childNodes[2]);

let th = document.createElement("th");
th.id = "test";
let test2 = document.createTextNode("Name");
th.appendChild(test2);
const td = document.getElementsByTagName('td')[0];
let parent = td.parentNode;
parent.replaceChild(th,td);

let th2 = document.createElement("th");
th2.id = "test2";
let test3 = document.createTextNode("Email");
th2.appendChild(test3);
const td2 = document.getElementsByTagName('td')[0];
let parent2 = td2.parentNode;
parent2.replaceChild(th2,td2);



