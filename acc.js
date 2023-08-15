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
  //   7 clear the deposit field
  depoField.value = "";
});
// withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("input-withdraw");
  const withdrawAmount = withdrawField.value;
  const withdrawTotal = document.getElementById("withdraw-box");
  withdrawTotal.innerText = withdrawAmount;
});
//balance total
const balanceTotal = document.getElementById("balance-box");
