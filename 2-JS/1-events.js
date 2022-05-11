window.onload = function () {
  document.getElementById("test").innerHTML = "Hello World!";
};

function greeting(name) {
  document.getElementById("test").innerHTML =
    "Hello " + name.value + ", I hope you are fine :)";
}

function reset(name) {
  name.value = "";
}

let amount = document.getElementById("amount"),
  currency = document.getElementById("currency"),
  result = document.getElementById("result");

currency.onchange = function () {
  if (amount.value > 0) {
    result.innerHTML = `Your amount is ${(
      amount.value * currency.value
    ).toFixed(2)} in EGP`;
  } else result.innerHTML = "Your amount should be a positive number";
};
