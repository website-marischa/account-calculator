const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault(); //команда, чтобы страница не перезагружалась
const bill = document.querySelector("#bill").value;
const people = document.querySelector("#people").value;
const tip = document.querySelector("#tip").value;
    
if (bill === "" || people === ""  || people < 1) {
    Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'Please enter your information!',
        
      })
}

let amountPerPerson = bill / people; //сколько заплатит один человек
let tipPerPerson = (bill * tip) / people;  //сколько чаевых заплатит один человек
let totalSum = amountPerPerson + tipPerPerson;  //сумма счета и чаевых

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector("#dividedBill").textContent = amountPerPerson;
document.querySelector("#dividedTip").textContent = tipPerPerson;
document.querySelector("#billAndTip").textContent = totalSum;



}