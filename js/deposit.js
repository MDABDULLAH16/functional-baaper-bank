//     //get input field value by id
// function getInputValueById(inputId) {
//   const getInputValue = document.getElementById(inputId);
//   const inputvalueString = getInputValue.value;
//   const inputFieldValue = parseFloat(inputvalueString);
//   getInputValue.value = "";
//   return inputFieldValue;
// }

// //get previous total on depost/ withdraw
// function getElementValueById(elementId) {
//   const getTextElementById = document.getElementById(elementId);
//   const getTextElementString = getTextElementById.innerText;
//   const textElementValue = parseFloat(getTextElementString);
//   return textElementValue;
// }

// // set total
// function setTextElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.innerText = newValue;
// }

document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputValueById("deposit-field");
  if (isNaN(newDepositAmount)) {
    alert("Please input valid number");
    return;
  }
  const previousDepositTotal = getElementValueById("total-deposit");
  const previousMainTotal = getElementValueById("balance");
  const totalDeposit = newDepositAmount + previousDepositTotal;
  const totalBalance = previousMainTotal + newDepositAmount;

  setTextElementValueById("total-deposit", totalDeposit);
  setTextElementValueById("balance", totalBalance);
});
