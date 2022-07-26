// Variables
let people = Number(peopleCount.innerText);

// HTML Elements
billTotal = document.getElementById("billTotalInput");
tipAmount = document.getElementById("tipInput");
peopleCount = document.getElementById("peopleCount");
perPersonTotal = document.getElementById("perPersonTotal");

function calculateBill() {
  // converts the tip percentage into a decimal ( 10 / 100 = 0.1)
  const tipPercent = Number(tipAmount.value) / 100;
  const bill = Number(billTotal.value);
  const totalTip = bill * tipPercent;
  // Final value of the bill per person
  const displayTotalPerPerson = (bill + totalTip) / people;
  perPersonTotal.innerText = `$${displayTotalPerPerson.toFixed(2)}`;
}

function addPeople() {
  people++;
  peopleCount.innerHTML = people;
  calculateBill();
}

function subPeople() {
  if (people <= 1) {
    alert("You cannot have less than 1 person!");
    return;
  }
  people--;
  peopleCount.innerText = people;
  calculateBill();
}
