function renderDishes(){
    for (let i = 0; i < dishes.length; i++) {
        let priceRef = dishes[i].price.toFixed(2)
        let maincourseRef = document.getElementById("maincourseEntry");
        maincourseRef.innerHTML += /*html*/`
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${dishes[i].name}</h3>
                <button class="add_button">+</button>
            </div>
            <p class="dish_text margin_lr">${dishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRef}€</p>
        </div>
        `
        
    }
    for (let i = 0; i < sidedishes.length; i++) {
        let priceRef = sidedishes[i].price.toFixed(2)
        let sidecourseRef = document.getElementById("sidecourseEntry");
        sidecourseRef.innerHTML += /*html*/`
        <div class="dish_selection margin_lr">
            <div class="title_addbtn">
                <h3 class="dish_title">${sidedishes[i].name}</h3>
                <button class="add_button">+</button>
            </div>
            <p class="dish_text margin_lr">${sidedishes[i].description}</p>
            <p class="dish_price margin_lr">${priceRef}€</p>
        </div>
        `
    }
}
