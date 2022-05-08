// Business logic

function Pizza (size, topping){
  this.size = size;
  this.topping = topping;
  }
  
  Pizza.prototype.calculate = function(){
    let total = 0;
    if (this.size === "foal") {
      total += 10;
    } else if (this.size === "mare") {
      total += 15;
    } else if (this.size === "stallion") {
      total += 20;
    }
    if (this.topping === "cotton candy") {
      total = total + 1;
    } else if (this.topping === "sprinkles") {
      total = total + 2;
    } else if (this.topping === "rainbow sherbet") {
      total = total + 8;
    }
    return total;
  };
  
//   // UI logic
  $(document).ready(function(){
    $(".pizzaOption").submit(function(event){
    event.preventDefault();
  
    let inputtedSize = $("#size").val();
    let inputtedTopping = $("#topping").val();
  
    let newPizza = new Pizza(inputtedSize, inputtedTopping);
    let total = newPizza.calculate();
  
    $(".results").show();
    $(".totalPrice").show();

    $(".temporary").hide();
    $("#sizeResult").text("Size: " + inputtedSize);
    $("#toppingResult").text("Topping: " + inputtedTopping);
    $("#total").text("Total: " + total);
    });
  });