//Business Logic

function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.calculator = function() {
  let cost = 0;
  if (this.size === "foal") {
    cost = 10;
  }
  else if (this.size === "mare") {
    cost = 15;
  }
  else if (this.size === "stallion") {
    cost = 20;
  }
  this.topping.forEach(function() {
    cost++;
  });
  return cost;
}

// let pizza = new Pizza("foal",["cotton candy","sprinkles","rainbow sherbet"]);
// let pizzaCost = pizza.calculator();
// console.log(pizza.size);
// console.log(pizza.topping);
// console.log(pizzaCost);

//User Logic

$(document).ready(function() {
  $("#menu").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("#pizzaSize").val();
    let arrayOfToppings = document.querySelectorAll("input[name = 'topping']:checked");
    let arrayTopping = [];
    arrayOfToppings.forEach(function(toppingCheck) {
      arrayTopping.push(toppingCheck.value);
    });
    let menuPizza = new Pizza(pizzaSize,arrayTopping);
    let menuCost = menuPizza.calculator();
    console.log(menuCost);
    $("#menuShown").toggle();
    $("#costReturn").toggle();
    $("#putCostHere").html("$" + menuCost);
  });
});

