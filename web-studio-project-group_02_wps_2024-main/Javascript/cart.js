/* SELECT ALL AND UNSELECT ALL BUTTON */

const selectAllButton = document.getElementById('select-all');
const checkboxes = document.querySelectorAll('.item-checkbox');

selectAllButton.addEventListener('click', function() {
const isChecked = this.dataset.checked === 'true';

checkboxes.forEach(checkbox => checkbox.checked = !isChecked);
this.dataset.checked = !isChecked;

/* update the button based on all checkboxes being selected or not */
if (!isChecked) {
  this.textContent = 'Unselect all';
} else {
  this.textContent = 'Select all';
}
});

/* makes sure the button changes if user manually selects/unselects checkboxes */
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    if (allChecked) {
      selectAllButton.textContent = 'Unselect all';
      selectAllButton.dataset.checked = 'true';
    } else {
      selectAllButton.textContent = 'Select all';
      selectAllButton.dataset.checked = 'false';
    }
  });
});



/* DELETE SELECTED BUTTON */

  document.getElementById('delete-selected').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.item-checkbox:checked');
    if (checkboxes.length > 0) {
      document.getElementById('delete-confirmation').style.display = 'block';
    }
  });


/* FUNCTION TO CHECK IF CART IS EMPTY AND DISPLAY THAT TO USER */

function checkIfCartIsEmpty() {
    const cartSection = document.querySelector('.cart-section');
    const cartItems = document.querySelectorAll('.cart-item');

/* if cart is empty, display a message */
if (cartItems.length === 0) {
    const emptyCartMessage = document.createElement('p');
    emptyCartMessage.classList.add('empty-cart-message');
    emptyCartMessage.textContent = 'Your cart is empty. No items to show.';
    cartSection.appendChild(emptyCartMessage);

/* option to hide the select all and delete selected buttons when cart is empty */
selectAllButton.style.display = 'none';
document.getElementById('delete-selected').style.display = 'none';
}
}



/* ERROR PREVENTION */

/* Error prevention for confirm delete button */
document.getElementById('confirm-delete').addEventListener('click', function() {
  const checkboxes = document.querySelectorAll('.item-checkbox:checked');
  checkboxes.forEach(checkbox => checkbox.closest('.cart-item').remove());
  document.getElementById('delete-confirmation').style.display = 'none';



/* check if cart is empty after deletion */
checkIfCartIsEmpty();
});


/* check if cart is empty when page is loaded */
document.addEventListener('DOMContentLoaded', function() {
checkIfCartIsEmpty();
});


/* Error prevention for cancel delete button */
document.getElementById('cancel-delete').addEventListener('click', function() {
  document.getElementById('delete-confirmation').style.display = 'none';
});