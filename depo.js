// deposit
1; // add event listener to the button that will be clicked.
document.getElementById("btn-depo").addEventListener("click", function () {
  //2 get the amount from the deposit input field
  //3 for input field use .value
  const depoField = document.getElementById("input-depo");
  const newDepoAmount = depoField.value;
  //3 get the deposit total amount
  //for non-input (element other than input, textarea) use innertext
  const depoTotal = document.getElementById("depo-box");
  const previousDepoAmount = depoTotal.innerText;
  depoTotal.innerText = newDepoAmount;
  // 4 add numbers
  const currentDepoAmount =
    parseFloat(previousDepoAmount) + parseFloat(newDepoAmount);
  depoTotal.innerText = currentDepoAmount;
  //5- balance total
  const balanceTotal = document.getElementById("balance-box");
  const balancePreviousTotalString = balanceTotal.innerText;
  balancePreviousTotal = parseFloat(balancePreviousTotalString);
  //6 calculate current total

  const balanceCurrentTotal = balancePreviousTotal + parseFloat(newDepoAmount);
  balanceTotal.innerText = balanceCurrentTotal;
  //   7 clear the deposit field
  depoField.value = "";
});
