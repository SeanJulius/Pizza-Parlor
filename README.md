Describe: Pizza()

Test: "it should return pizza size."
Code: let pizza = new Pizza ("foal");
Expect: pizza.size === "foal";

Test: "It should return size and topping."
Code: let pizza = new Pizza("foal", "cotton candy");
Expect: pizza.size === "foal" & pizza.topping === "cotton candy";

Test: "It should return size and different toppings."
Code: let pizza = new Pizza("foal",["cotton candy","sprinkles","rainbow sherbet"]);
Expect: pizza.size === "foal" & pizza.topping === ["cotton candy","sprinkles","rainbow sherbet"];


