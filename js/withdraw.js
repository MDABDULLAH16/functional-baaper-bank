document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please input valid amount");
    return;
  }
  const previousWithdrawAmount = getElementValueById("total-withdraw");

  // add withdraw total
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  //call balance total for update total
  const previousMainTotal = getElementValueById("balance");
  //minus withdraw to update main balance
  if (newWithdrawAmount > previousMainTotal) {
    alert("Baaper Bank a ato taka nai");
    return;
  }
  const mainTotalBalance = previousMainTotal - newWithdrawAmount;
  //
  setTextElementValueById("total-withdraw", newWithdrawTotal);
  setTextElementValueById("balance", mainTotalBalance);
});
