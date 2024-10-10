// Prices of Items
const HOTDOG_$ = 4.80;
const FRIES_$ = 3.95;
const DRINK_$ = 1.99;
const DISCOUNT_THRESHOLD = 25.00;
const DISCOUNT = 0.10;
const TAX = 0.0625;

// showMoney function as spec requests
function showMoney(amount) {
    return Math.round(amount * 100) / 100;
}

// Using Prompt()
let numDogs = parseInt(prompt("How many hotdogs would you like?"), 10) || 0;
let numFries = parseInt(prompt("How many fries would you like?"), 10) || 0;
let numSoda = parseInt(prompt("How many sodas would you like?"), 10) || 0;

let hotdogTotal = numDogs * HOTDOG_$;
let friesTotal = numFries * FRIES_$;
let sodaTotal = numSoda * DRINK_$;

// Calculate subtotal
let subtotal = hotdogTotal + friesTotal + sodaTotal;

// Calculate subtotal with distcount if needed
let discount = subtotal >= DISCOUNT_THRESHOLD ? subtotal * DISCOUNT : 0;
let subtotalAfterDiscount = subtotal - discount;

// Calculate tax and final total
let taxAmount = subtotalAfterDiscount * TAX;
let finalTotal = subtotalAfterDiscount + taxAmount;

// Display order summary on the page
let orderSummary = `
    <p>Hotdogs: ${numDogs} x $${showMoney(HOTDOG_PRICE)} = $${showMoney(hotdogTotal)}</p>
    <p>Fries: ${numFries} x $${showMoney(FRIES_PRICE)} = $${showMoney(friesTotal)}</p>
    <p>Sodas: ${numSoda} x $${showMoney(DRINK_PRICE)} = $${showMoney(sodaTotal)}</p>
    <br>
    <p>Subtotal before discount: $${showMoney(subtotal)}</p>
    <p>Discount: $${showMoney(discount)}</p>
    <p>Subtotal after discount: $${showMoney(subtotalAfterDiscount)}</p>
    <p>Tax: $${showMoney(taxAmount)}</p>
    <strong>Total: $${showMoney(finalTotal)}</strong>
`;

document.getElementById("orderSummary").innerHTML = orderSummary;
