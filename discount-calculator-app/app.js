const calculate = document.querySelector(".calculate");
const discountAmount = document.getElementById("discount-amount");
const finalPay = document.getElementById("pay");
const reset = document.querySelector(".reset");
// calculate button
calculate.addEventListener("click", function (e) {
  e.preventDefault();
  const bill = document.getElementById("bill").value;
  const discountPercentage = document.getElementById(
    "discount-percentage"
  ).value;
  const calculateDiscount = bill * (discountPercentage / 100);
  discountAmount.value = calculateDiscount;

  const payAmount = bill - calculateDiscount;
  finalPay.value = payAmount;
});

//reset button
reset.addEventListener("click", function () {
  window.location.reload();
});
