var items = [
  {all:"all",genre:"Biography",title:"Bossypants" ,author:"Tina Fey"},
  {all:"all",genre:"Biography",title:"Becoming" ,author:"Michelle Obama"},
  {all:"all",genre:"Biography",title:"Steave Jobs" ,author:"Walter Isaccson"},
  {all:"all",genre:"Fiction",title:"Tweet Cute" ,author:"Emma Lord"},
  {all:"all",genre:"Fiction",title:"Flipped",author:"Wendelin Van Drannen"},
  {all:"all",genre:"Fiction",title:"Turtles All The Way Down" ,author:"John Green"},
  {all:"all",genre:"Poetry",title:"Milk And Honey" ,author:"Rupi Kaur"},
  {all:"all",genre:"Poetry",title:"Deeper Than The Ocean",author:"Emma Rose"},
  {all:"all",genre:"Poetry",title:"Pillow Thoughts" ,author:"Courtney Peppernell"},
];

//grabbing the values
var bio = items
.filter(item => item.genre == "Biography")

var fic = items
.filter(item => item.genre == "Fiction")

var poe = items
.filter(item => item.genre == "Poetry")

var all = items
.filter(item => item.all == "all")


//onclick event for buttons and displaying in HTML div
function allbtn() {

document.getElementById("All").addEventListener("click", all);
document.getElementById("display").innerHTML = (`${all.map(item => item.title).join(', ')}`);

//console.log(all);
}
allbtn();

//gets all the elements with biography genre
function biobtn() {

document.getElementById("Biography").addEventListener("click", bio);
document.getElementById("display").innerHTML = (`${bio.map(item => item.title).join(', ')}`);

//console.log(bio);
}
biobtn();

//gets all the elements with fiction genre
function ficbtn() {
document.getElementById("Fiction").addEventListener("click", fic);
document.getElementById("display").innerHTML = (`${fic.map(item => item.title).join(', ')}`);

//console.log(fic);
}
ficbtn();

//gets all the elemnts with poetry genre
function poebtn() {
document.getElementById("Poetry").addEventListener("click", poe)
document.getElementById("display").innerHTML = (`${poe.map(item => item.title).join(', ')}`);
//document.getElementById("display").innerHTML = poe;
//console.log(poe);
}
poebtn();