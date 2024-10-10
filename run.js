// Prices of stuff
const HOTDOG_$ = 4.80;
const FRIES_$ = 3.95;
const DRINK_$ = 1.99;
const DISCOUNT_THRESHOLD = 25.00;
const DISCOUNT = 0.10;
const TAX = 0.0625;

function initializePage() {
    document.getElementById('thankYouImage').style.visibility = 'hidden'; 
    processOrder(); 
}

// showMoney function as requested
function showMoney(amount) {
    return Math.round(amount * 100) / 100;
}

function processOrder() {
    //use prompt the get users order
    let numDogs = parseInt(prompt("How many hotdogs would you like?"), 10);
    let numFries = parseInt(prompt("How many fries would you like?"), 10);
    let numSoda = parseInt(prompt("How many sodas would you like?"), 10);

    if(numDogs < 0) {
        alert("Need a non-negative number");
        let numDogs = parseInt(prompt("How many hotdogs would you like?"), 10);
    } else if(isNaN(numDogs)) numDogs = 0;
     if(numFries < 0) {
        alert("Need a non-negative number");
        let numFries = parseInt(prompt("How many Fries would you like?"), 10);
    } else if(isNaN(numFries)) numFries = 0;
     if(numSoda < 0) {
        alert("Need a non-negative number");
        let numSoda = parseInt(prompt("How many Sodas would you like?"), 10);
    } else if(isNaN(numSoda)) numSoda = 0;

    let items = ['Hotdogs', 'Fries', 'Sodas'];
    let quantities = [numDogs, numFries, numSoda];
    let prices = [HOTDOG_$, FRIES_$, DRINK_$];

    let subtotal = 0;
    let orderSummary = document.getElementById('orderSummary');
    
    while (orderSummary.firstChild) {
        orderSummary.removeChild(orderSummary.firstChild);
    }

    // calculate the subtotal using the quantaties and prices
    for (let i = 0; i < items.length; i++) {
        let total = quantities[i] * prices[i];
        let itemText = `${items[i]}: ${quantities[i]} x $${showMoney(prices[i])} = $${showMoney(total)}`;
        
        let itemParagraph = document.createElement('p');
        itemParagraph.textContent = itemText;
        orderSummary.appendChild(itemParagraph);

        subtotal += total;
    }

    let discount = 0;
    if (subtotal >= DISCOUNT_THRESHOLD) {
        discount = subtotal * DISCOUNT_RATE;
    }
    // calculate the subtotal after aplying the discount
    let subtotalAfterDiscount = subtotal - discount;

    let taxAmount = subtotalAfterDiscount * TAX_RATE;

    // calculate the total the customer owes
    let finalTotal = subtotalAfterDiscount + taxAmount;

    // display the output
    addSummaryDetail(orderSummary, `Subtotal before discount: $${showMoney(subtotal)}`);
    addSummaryDetail(orderSummary, `Discount: $${showMoney(discount)}`);
    addSummaryDetail(orderSummary, `Subtotal after discount: $${showMoney(subtotalAfterDiscount)}`);
    addSummaryDetail(orderSummary, `Tax: $${showMoney(taxAmount)}`);
    addSummaryDetail(orderSummary, `Final Total: $${showMoney(finalTotal)}`, true);

    document.getElementById('thankYouImage').src = 'istockphoto-12153'; 
    document.getElementById('thankYouImage').style.visibility = 'visible';
}

function addSummaryDetail(parent, text, isFinal = false) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    if (isFinal) {
        paragraph.style.fontWeight = 'bold';
    }
    parent.appendChild(paragraph);
}
