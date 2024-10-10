//price of each item
const HOTDOG_PRICE = 4.80;
const FRIES_PRICE = 3.95;
const DRINK_PRICE = 1.99;
const DISCOUNT_THRESHOLD = 25.00;
const DISCOUNT_RATE = 0.10;
const TAX_RATE = 0.0625;

function initializePage() {
    document.getElementById('thankYouImage').style.visibility = 'hidden'; // Hide thank you image initially
}

function validateInput(element) {
    let value = parseInt(element.value);
    if (isNaN(value) || value < 0) {
        alert("Please enter a valid positive number");
        element.value = 0;
    }
}

function showMoney(amount) {
    return Math.round(amount * 100) / 100;
}

function processOrder(event) {
    event.preventDefault(); 

    let numDogs = parseInt(document.getElementById('hotdogs').value);
    let numFries = parseInt(document.getElementById('fries').value);
    let numSoda = parseInt(document.getElementById('sodas').value);

    let items = ['Hotdogs', 'Fries', 'Sodas'];
    let quantities = [numDogs, numFries, numSoda];
    let prices = [HOTDOG_PRICE, FRIES_PRICE, DRINK_PRICE];

    let subtotal = 0;
    let itemDetails = '';
    for (let i = 0; i < items.length; i++) {
        let total = quantities[i] * prices[i];
        itemDetails += `${items[i]}: ${quantities[i]} x $${showMoney(prices[i])} = $${showMoney(total)}<br>`;
        subtotal += total;
    }

    let discount = 0;
    if (subtotal >= DISCOUNT_THRESHOLD) {
        discount = subtotal * DISCOUNT_RATE;
    }
    let subtotalAfterDiscount = subtotal - discount;

    let taxAmount = subtotalAfterDiscount * TAX_RATE;
    let finalTotal = subtotalAfterDiscount + taxAmount;

    document.getElementById("orderSummary").innerHTML = `
        <strong>Order Details:</strong><br>
        ${itemDetails}<br>
        Subtotal before discount: $${showMoney(subtotal)}<br>
        Discount: $${showMoney(discount)}<br>
        Subtotal after discount: $${showMoney(subtotalAfterDiscount)}<br>
        Tax: $${showMoney(taxAmount)}<br>
        <strong>Final Total: $${showMoney(finalTotal)}</strong>
    `;

    document.getElementById('thankYouImage').src = 'thankyou.jpg'; // Change image source
    document.getElementById('thankYouImage').style.visibility = 'visible'; // Make the image visible
}

