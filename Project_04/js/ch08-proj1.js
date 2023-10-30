const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
   var subTotal = 0;

   for(let i = 0; i < cart.length; i++) {
      var item = cart[i];
      var total = calculateTotal(item.quantity, item.product.price);

      outputCartRow(item.product, item.quantity, total);
      subTotal += total;
   }
   
   var tax = subTotal * tax_rate;
   var shippingAmount = subTotal <= shipping_threshold ? 40 : 0;
   var grandTotal = subTotal + tax + shippingAmount;

document.write("<tr class='totals'><td colspan='4'>Subtotal</td><td>$" + subTotal.toFixed(2) + "</td></tr>");
document.write("<tr class='totals'><td colspan='4'>Tax</td><td>$" + tax.toFixed(2) + "</td></tr>");
document.write("<tr class='totals'><td colspan='4'>Shipping</td><td>$" + shippingAmount.toFixed(2) + "</td></tr>");
document.write("<tr class='totals focus'><td colspan='4'>Grand Total</td><td>$" + grandTotal.toFixed(2) + "</td></tr>");
