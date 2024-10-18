document.addEventListener('DOMContentLoaded', () => {

    /* initialising the cart total to 0 */
    let cartTotal = 0;


    /* update cart total */
    const cartTotalElement = document.getElementById('cart-total');
    cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;



    /* function to add price to the cart total */
    function addToCart(price) {
        cartTotal += price;
        cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }


    /* getting all add to cart buttons */
    const addToCartButtons = document.querySelectorAll('.add-to-cart');


    /* adding a click event to each button */
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {


    /* get the price from the product listing card */
    const priceText = button.previousElementSibling.textContent;
    const price = parseFloat(priceText.replace('$', ''));


    /* add the item price to the cart */
    addToCart(price);
    
        });
    });
});        