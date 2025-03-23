function renderDishesHTMLTemplate(i, priceRefReplace) {
    return `
    <div class="dish_selection margin_lr">
        <div class="title_addbtn">
            <h3 class="dish_title">${dishes[i].name}</h3>
            <img onclick="addToCart(${i})" class="add_button" src="./assets/PNG/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <p class="dish_text margin_lr">${dishes[i].description}</p>
        <p class="dish_price margin_lr">${priceRefReplace}€</p>
    </div>
    `;
}

function renderSideDishesHTMLTemplate(i, priceRef) {
    return `
    <div class="dish_selection margin_lr">
        <div class="title_addbtn">
            <h3 class="dish_title">${dishes[i].name}</h3>
            <img onclick="addToCart(${i})" class="add_button" src="./assets/PNG/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <p class="dish_text margin_lr">${dishes[i].description}</p>
        <p class="dish_price margin_lr">${priceRef}€</p>
    </div>
    `;
}

function printCartHTMLTemplate(i, calculatedPriceEnd) {
    return `
    <h3 class="margin_lr">${dishes[i].name}</h3>
    <div class="price_amount margin_lr">
        <div class="amount">
            <img class="add_rmv_btn" onclick="removeOneDish(${i})" src="./assets/PNG/remove_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            <p class="margin_lr">${dishes[i].amount}x</p>
            <img class="add_rmv_btn" onclick="addToCart(${i})" src="./assets/PNG/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <div class="price">
            <p id="calculateTotal${i}">${calculatedPriceEnd}</p><p>€</p>
            <img class="add_rmv_btn" onclick="deleteDishFromCart(${i})" src="./assets/PNG/delete_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
    </div>
    `;
}
function printCartToRespMenuHTMLTemplate(i, calculatedPriceEnd) {
    return `
    <button onclick="openCloseRespMenu()">Close Cart</button>
    <h3 class="margin_lr">${dishes[i].name}</h3>
    <div class="price_amount margin_lr">
        <div class="amount">
            <img class="add_rmv_btn" onclick="removeOneDish(${i})" src="./assets/PNG/remove_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            <p class="margin_lr">${dishes[i].amount}x</p>
            <img class="add_rmv_btn" onclick="addToCart(${i})" src="./assets/PNG/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <div class="price">
            <p id="calculateTotal${i}">${calculatedPriceEnd}</p><p>€</p>
            <img class="add_rmv_btn" onclick="deleteDishFromCart(${i})" src="./assets/PNG/delete_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
    </div>
    `;
}

function totalSumHTMLTemplate(totalPrices, totalWDelivery) {
    return `
    <hr>
    <p class="checkout_summary">Zwischensumme: ${totalPrices}€</p>
    <p class="checkout_summary">Lieferkosten: 5,00€ </p>
    <p class="checkout_summary_total">Gesamt: ${totalWDelivery}€</p>
    <div class="flex">
        <button id="placeOrder" onclick="orderRecieved()" class="order_button">Bestellen</button>
    </div>
    `;
}

function printCartLogoPriceHTMLTemplate(totalWDelivery){
return `
  <p class="price_next_to_logo">${totalWDelivery}€</p>
  <img onclick="openCloseRespMenu()" class="shopping_bag"src="./assets/PNG/shopping_bag_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png">
  `
}