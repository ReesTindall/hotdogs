// Constants for item prices
const HOTDOG_PRICE = 4.80;
const FRIES_PRICE = 3.95;
const DRINK_PRICE = 1.99;
const DISCOUNT_THRESHOLD = 25.00;
const DISCOUNT_RATE = 0.10;
const TAX_RATE = 0.0625;

// Function to round numbers to 2 decimal places
function showMoney(amount) {
    return Math.round(amount * 100) / 100;
}

// Prompt the user for quantities of each item
let numDogs = parseInt(prompt("How many hotdogs would you like?"), 10);
let numFries = parseInt(prompt("How many fries would you like?"), 10);
let numSoda = parseInt(prompt("How many sodas would you like?"), 10);

// Calculate total cost for each item
let hotdogTotal = numDogs * HOTDOG_PRICE;
let friesTotal = numFries * FRIES_PRICE;
let sodaTotal = numSoda * DRINK_PRICE;

// Calculate subtotal
let subtotal = hotdogTotal + friesTotal + sodaTotal;

// Apply discount if eligible
let discount = 0;
if (subtotal >= DISCOUNT_THRESHOLD) {
    discount = subtotal * DISCOUNT_RATE;
}
let subtotalAfterDiscount = subtotal - discount;

// Calculate tax and final total
let taxAmount = subtotalAfterDiscount * TAX_RATE;
let finalTotal = subtotalAfterDiscount + taxAmount;

// Display the order summary
document.getElementById("orderSummary").innerHTML = `
    <strong>Order Details:</strong><br>
    Hotdogs: ${numDogs} x $${HOTDOG_PRICE} = $${showMoney(hotdogTotal)}<br>
    Fries: ${numFries} x $${FRIES_PRICE} = $${showMoney(friesTotal)}<br>
    Sodas: ${numSoda} x $${DRINK_PRICE} = $${showMoney(sodaTotal)}<br>
    <br>
    Subtotal before discount: $${showMoney(subtotal)}<br>
    Discount: $${showMoney(discount)}<br>
    Subtotal after discount: $${showMoney(subtotalAfterDiscount)}<br>
    Tax: $${showMoney(taxAmount)}<br>
    <strong>Final Total: $${showMoney(finalTotal)}</strong>
`;
