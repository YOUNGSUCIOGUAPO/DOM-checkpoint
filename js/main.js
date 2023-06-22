// Retrieve elements
const plusBtn1 = document.querySelector('.plus1');
const plusBtn2 = document.querySelector('.plus2');
const minusBtn1 = document.querySelector('.minus1');
const minusBtn2 = document.querySelector('.minus2');
const input1 = document.querySelector('#form1');
const input2 = document.querySelector('#form2');
const itemPriceElement1 = document.querySelector('.price1');
const itemPriceElement2 = document.querySelector('.price2');
const totalPriceElement1 = document.querySelector('.totalPrice1');
const totalPriceElement2 = document.querySelector('.totalPrice2');
const vatElement = document.querySelector('.vat');

// Set initial quantities
let quantity1 = 1;
let quantity2 = 1;

// Set item prices
const itemPrice1 = 17.99;
const itemPrice2 = 14.99;

// Format price function
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// Update prices function
function updatePrices() {
  // Calculate dynamic item prices
  const dynamicItemPrice1 = quantity1 * itemPrice1;
  const dynamicItemPrice2 = quantity2 * itemPrice2;

  // Update the item prices
  itemPriceElement1.textContent = formatPrice(dynamicItemPrice1);
  itemPriceElement2.textContent = formatPrice(dynamicItemPrice2);

  // Calculate the total price
  let totalPrice = dynamicItemPrice1 + dynamicItemPrice2;
  
  // Adjust the total price based on deleted items
  if (quantity1 === 0) {
    totalPrice -= dynamicItemPrice1;
  }
  if (quantity2 === 0) {
    totalPrice -= dynamicItemPrice2;
  }

  // Update the total price and VAT
  totalPriceElement1.textContent = formatPrice(totalPrice);
  totalPriceElement2.textContent = formatPrice(totalPrice + 0.035 * totalPrice);
  const vat = formatPrice(0.035 * totalPrice);
  vatElement.textContent = vat;
}

// Plus button 1 event listener
plusBtn1.addEventListener('click', () => {
  // Increase the quantity of item 1 by 1
  quantity1 = Math.min(quantity1 + 1, 10);

  // Update the input element value for item 1
  input1.value = quantity1;

  // Update the prices
  updatePrices();
});

// Plus button 2 event listener
plusBtn2.addEventListener('click', () => {
  // Increase the quantity of item 2 by 1
  quantity2 = Math.min(quantity2 + 1, 10);

  // Update the input element value for item 2
  input2.value = quantity2;

  // Update the prices
  updatePrices();
});

// Minus button 1 event listener
minusBtn1.addEventListener('click', () => {
  // Decrease the quantity of item 1 by 1
  quantity1 = Math.max(quantity1 - 1, 0);

  // Update the input element value for item 1
  input1.value = quantity1;

  // Update the prices
  updatePrices();
});

// Minus button 2 event listener
minusBtn2.addEventListener('click', () => {
  // Decrease the quantity of item 2 by 1
  quantity2 = Math.max(quantity2 - 1, 0);

  // Update the input element value for item 2
  input2.value = quantity2;

  // Update the prices
  updatePrices();
});

// Initial update of prices
updatePrices();

// Get all the delete buttons
const deleteButtons = document.querySelectorAll('.delete');

// Add event listeners to each delete button
deleteButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // Get the parent element of the delete button
    const singleItem = this.closest('.row');
    
    // Remove the single item from the DOM
    singleItem.remove();
    
    // Reset the quantity and update prices
    if (singleItem.classList.contains('item1')) {
      quantity1 = 0;
    } else if (singleItem.classList.contains('item2')) {
      quantity2 = 0;
    }
    
    updatePrices();
  });
});

// Retrieve elements
const likeButtons = document.querySelectorAll('.like');

// Add event listeners to each like button
likeButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // Toggle the 'active' class on the button
    this.classList.toggle('active');
  });
});

