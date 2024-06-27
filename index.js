var exchangeForm = document.querySelector(".exchangeForm");
var users = [];
exchangeForm.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  var user = {
    element: elements[0].value,
  };
  users.push(user);
  printData();
};
function printData() {
  var currencySelect = document.querySelector(".currencySelect");
  var selectedCurrency = currencySelect.value;
  if (selectedCurrency === "dollar") {
document.querySelector('p').textContent=`from Dollar to nis is:${users[0].element * 3.5}`;
  }
 else if (selectedCurrency === "dinar") {
    console.log(users[0].element * 5);
document.querySelector('p').textContent=`from Dinar to nis is:${users[0].element * 5}`;
  }
  else if (selectedCurrency === "nis") {
    document.querySelector('p').textContent=`it still the same at:${users[0].element }`;

  }
}
