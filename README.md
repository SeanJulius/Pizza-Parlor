# Pizza-Parlor

by Sean Julius

This webpage is designed to give an introduction to Sean Julius's beginnings in coding.
Technologies Used
* _Java Script_
* _HTML_
* _CSS_

## Application Setup Instructions

Clone this repository to your desktop.
Navigate to the top level of the directory.
Open Portfolio-Landing-Page
Open Index.html

## Known Bugs

No known bugs


Copyright (c) 2022 Sean Julius
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Specifications

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

Describe: Pizza.prototype.calculator()

Test: "It should return the siza and toppings with a price."
Code: let pizza = new Pizza("foal",["cotton candy","sprinkles","rainbow sherbet"]); pizzaCost = pizza.calculator();
Expect: pizzaCost === 13;


