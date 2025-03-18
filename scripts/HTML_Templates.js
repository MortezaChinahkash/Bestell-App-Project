function renderDishesHTMLTemplate(i, priceRefReplace){
    return  `
    <div class="dish_selection margin_lr">
        <div class="title_addbtn">
            <h3 class="dish_title">${dishes[i].name}</h3>
            <img onclick="addToCart(${i})" class="add_button" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <p class="dish_text margin_lr">${dishes[i].description}</p>
        <p class="dish_price margin_lr">${priceRefReplace}€</p>
    </div>
    `;
}
function renderSideDishesHTMLTemplate(i, priceRefReplace){
    return  `
    <div class="dish_selection margin_lr">
        <div class="title_addbtn">
            <h3 class="dish_title">${dishes[i].name}</h3>
            <img onclick="addToCart(${i})" class="add_button" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <p class="dish_text margin_lr">${dishes[i].description}</p>
        <p class="dish_price margin_lr">${priceRefReplace}€</p>
    </div>
    `;
}
function printCartHTMLTemplate(i, calculatedPriceReplace){
    return  `
    <h3 class="margin_lr">${dishes[i].name}</h3>
    <div class="price_amount margin_lr">
        <div class="amount">
            <img class="add_rmv_btn" onclick="removeOneDish(${i})" src="./assets/png/remove_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
            <p class="margin_lr">${dishes[i].amount}x</p>
            <img class="add_rmv_btn" onclick="addToCart(${i})" src="./assets/png/add_2_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
        <div class="price">
            <p id="calculateTotal${i}">${calculatedPriceReplace}</p><p>€</p>
            <img class="add_rmv_btn" onclick="deleteDishFromCart(${i})" src="./assets/png/delete_24dp_FF8000_FILL0_wght400_GRAD0_opsz24.png">
        </div>
    </div>
    `;
}
function totalSumHTMLTemplate(totalPriceReplace, totalWDeliveryReplace){
    return `
      <hr>
      <p class="checkout_summary">Zwischensumme: ${totalPriceReplace}€</p>
      <p class="checkout_summary">Lieferkosten: 5,00€ </p>
      <p class="checkout_summary_total">Gesamt: ${totalWDeliveryReplace}€</p>
      <div class="flex">
        <button id="placeOrder" class="order_button">Bestellen</button>
    </div>
      `;
}