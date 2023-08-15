/**
 1. add event handler with the draw button.
 2. get the withdraw amount form the input field.
 2-5. make sure to convert input to number using parsefloat
 3. get previous withdraw total
 4. calculate total amount
 4-5. set total withdraw amount
 5. get the previous balance
 6. calculate new total
 7. clear the input field
 */
// withdraw
// step1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step2
  const withdrawField = document.getElementById("input-withdraw");
  const withdrawAmountString = withdrawField.value;
  const withdrawAmount = parseFloat(withdrawAmountString);
  // step3
  const withdrawTotal = document.getElementById("withdraw-box");
  const withdrawAmountStringPrevious = withdrawTotal.innerText;
  const withdrawAmountPrevious = parseFloat(withdrawAmountStringPrevious);
  // step4
  const currentWithdrawTotal = withdrawAmountPrevious + withdrawAmount;
  withdrawTotal.innerText = currentWithdrawTotal;
  // step5
  const balanceTotal = document.getElementById("balance-box");
  const balancePreviousTotalString = balanceTotal.innerText;
  const balancePreviousTotal = parseFloat(balancePreviousTotalString);
  //  step6
  const newBalanceTotal = balancePreviousTotal - withdrawAmount;
  balanceTotal.innerText = newBalanceTotal;
  //step 7
  withdrawField.value = "";
});
