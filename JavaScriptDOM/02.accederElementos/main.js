//Métodos para acceder a los elementos del documento
/* const myH1 = document.getElementById("title");
console.log(myH1);

const myListItems = document.getElementsByClassName("list-item");
console.log(myListItems); */

//Por nombre de elemento
const myH1 = document.querySelector("h1");
console.log(myH1);
//Por id
const myH2 = document.querySelector("#subtitle");
console.log(myH2);
//Por clase
const myP = document.querySelector(".paragraph");
console.log(myP);

//Varios elementos
const myLis = document.querySelectorAll(".list-item");
console.log(myLis);
