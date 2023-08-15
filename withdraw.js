// withdraw
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("input-withdraw");
  const withdrawAmount = withdrawField.value;
  const withdrawTotal = document.getElementById("withdraw-box");
  withdrawTotal.innerText = withdrawAmount;
});
