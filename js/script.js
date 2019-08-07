let addNewBtnElem = document.querySelector('.addNewBtn');
let addBtnElem = document.querySelector('#addBtn');
let cancelAddNewBtn = document.querySelector('#cancelAddNew');
let cancelCartBtn = document.querySelector('#cancelCart');
let showCartBtn = document.querySelector('.showCart');


let shoeCatalogueInstance = createShoeCatalogue();

let shoesList = [];
function storeShoe() {
    //Get user input values
    let colorVal = document.querySelector('#color').value;
    let sizeVal = document.querySelector('#size').value;
    let brandVal = document.querySelector('#brand').value;
    let priceVal = Number(document.querySelector('#price').value);
    
    let obj = {}

    shoeCatalogueInstance.setColor(colorVal);
    shoeCatalogueInstance.setSize(sizeVal);
    shoeCatalogueInstance.setBrand(brandVal);
    shoeCatalogueInstance.setPrice(priceVal);
    shoeCatalogueInstance.setCatalogueObj();

    let isColorRepeated = shoeCatalogueInstance.checkColor(shoesList)
    let isSizeRepeated = shoeCatalogueInstance.checkSize(shoesList)
    let isBrandRepeated = shoeCatalogueInstance.checkBrand(shoesList)

    //shoesList.push(shoeCatalogueInstance.getCatalogueObj());

   

    if(isColorRepeated && isSizeRepeated && isBrandRepeated) {
        shoeCatalogueInstance.incrementQuantity();
        alert(shoeCatalogueInstance.getQuantity())
    } 
    else {
        alert("no repeat");
        shoesList.push(shoeCatalogueInstance.getCatalogueObj());
    }

    console.log(shoesList);
    // if(localStorage.getItem('shoesCatalogue')) {
    //     data = JSON.parse(localStorage.getItem('shoesCatalogue'));
    //     let isColorRepeated = shoeCatalogueInstance.checkColor(data)
    //     let isSizeRepeated = shoeCatalogueInstance.checkSize(data)
    //     let isBrandRepeated = shoeCatalogueInstance.checkBrand(data)

    //     if(isColorRepeated && isSizeRepeated && isBrandRepeated) {
    //         shoeCatalogueInstance.incrementQuantity();
    //         // obj = {
    //         //     color: shoeCatalogueInstance.getColor(),
    //         //     size: shoeCatalogueInstance.getSize(),
    //         //     brand: shoeCatalogueInstance.getBrand(),
    //         //     price: shoeCatalogueInstance.getPrice(),
    //         //     in_stock: shoeCatalogueInstance.getQuantity()
    //         // }
           
    //         //shoeCatalogueInstance.setQuantity(shoeCatalogueInstance.getQuantity());
    //         alert(shoeCatalogueInstance.getQuantity())
    //         //localStorage.setItem( 'shoesCatalogue', JSON.stringify(obj) );
    //     } 
    //     else {
    //         alert("no repeat");
    //         shoesList = data;
    //         shoesList.push(shoeCatalogueInstance.getCatalogueObj());
    //         localStorage.setItem( 'shoesCatalogue', JSON.stringify(shoesList) );
    //     }

    //     // shoesList = data;
    //     // shoesList.push(shoeCatalogueInstance.getCatalogueObj());
    //     // localStorage.setItem( 'shoesCatalogue', JSON.stringify(shoesList) );
    // } else {
    //     shoesList.push(shoeCatalogueInstance.getCatalogueObj());
    //     localStorage.setItem( 'shoesCatalogue', JSON.stringify(shoesList) );
    // }
    
    // alert(shoeCatalogueInstance.getQuantity())
    
}


addNewBtnElem.addEventListener('click', addNewShoe);

addBtnElem.addEventListener('click', storeShoe);

function addNewShoe() {
    document.querySelector('.addNew-wrapper').style.display = "block";
}

cancelAddNewBtn.addEventListener('click', () => {
    document.querySelector('.addNew-wrapper').style.display = "none";
});

showCartBtn.addEventListener('click', () => {
    let wrapper = document.querySelector('.cartItemsWrapper');
    if(wrapper.style.display == "none") {
        wrapper.style.display = "block";
    } else {
        wrapper.style.display = "none";
    }
});

cancelCartBtn.addEventListener('click', () => {
    //alert("Cancelling cart")
    document.querySelector('.cartItemsWrapper').style.display = "none"
    
});




//Setting up and testing handlebars template