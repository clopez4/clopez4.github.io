/* define your functions here */

function calculateTotal(quantity, price) {
    return quantity * price;
}
function outputCartRow(item, quantity, total) {
    document.write('<tr>');
    document.write('<td><img src="images/' + item.filename + '"></td>');
    document.write('<td>' + item.title + '</td>');
    document.write('<td>' + quantity + '</td>');
    document.write('<td>$' + item.price.toFixed(2) +'</td>');
    document.write('<td>$' + total.toFixed(2) + '</td>');
    document.write('</tr>');
}