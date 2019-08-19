const addNewBtnElem = document.querySelector('.addNewBtn');
const addBtnElem = document.querySelector('#addBtn');
const cancelAddNewBtn = document.querySelector('#cancelAddNew');
const cancelCartBtn = document.querySelector('#cancelCart');
const showCartBtn = document.querySelector('.showCart');
const searchBtn = document.querySelector('#searchBtn');
const addToCartBtn = document.querySelector('#addToCart');
const checkoutBtn = document.querySelector('#checkoutBtn');

const colorSelectOptions = document.querySelector('.colorOption');
const sizeSelectOptions = document.querySelector('.sizeOption');
const brandSelectOptions = document.querySelector('.brandOption');

const shoeCatalogueInstance = createShoeCatalogue();

function storeShoe() {
   let shoesList = shoeCatalogueInstance.getShoesList();
    
   //Get user input values
   let colorVal = document.querySelector('#color').value;
   let sizeVal = document.querySelector('#size').value;
   let brandVal = document.querySelector('#brand').value;
   let priceVal = Number(document.querySelector('#price').value);
   let quantityVal = Number(document.querySelector('#quantity').value);
   let imageVal = document.querySelector('#imageUrl').value;

   //Set user inputs
   shoeCatalogueInstance.setColor(colorVal);
   shoeCatalogueInstance.setSize(sizeVal);
   shoeCatalogueInstance.setBrand(brandVal);
   shoeCatalogueInstance.setPrice(priceVal);
   shoeCatalogueInstance.setInStock(quantityVal);
   shoeCatalogueInstance.setImage(imageVal);

   //Check if color, size, and brand is repeated
   let isColorRepeated = shoeCatalogueInstance.checkColor(shoesList)
   let isSizeRepeated = shoeCatalogueInstance.checkSize(shoesList)
   let isBrandRepeated = shoeCatalogueInstance.checkBrand(shoesList)

   //Increase currrent element stock by one if element already exist in my storage
   if(isColorRepeated && isSizeRepeated && isBrandRepeated) {
      shoeCatalogueInstance.addStock(shoesList);
   } 
   else {
      //alert("no repeat");
      shoeCatalogueInstance.setShoesList(shoesList);

      // shoesListData.push(shoesList);

      shoeCatalogueInstance.checkColor(shoesList);
      shoeCatalogueInstance.checkSize(shoesList);
      shoeCatalogueInstance.checkBrand(shoesList);

      let colors = shoeCatalogueInstance.getColorsAdded()
      let sizes = shoeCatalogueInstance.getSizesAdded()
      let brands = shoeCatalogueInstance.getBrandsAdded()

      let colorsOptionElem = document.querySelector('.colorOptions');
      let sizesOptionElem = document.querySelector('.sizeOptions');
      let brandsOptionElem = document.querySelector('.brandOptions');
     
      if(!isColorRepeated) {
         for(let key in colors) {
            colorsOptionElem.innerHTML += `<option class='colorOption' value='${key}'> ${key} </option>`;
         }
         localStorage.setItem('shoeColors', JSON.stringify(colors))
      }
      if(!isSizeRepeated) {
         for(let key in sizes) {
            sizesOptionElem.innerHTML += `<option class='sizeOption' value='${key}'> ${key} </option>`;
         }
         localStorage.setItem('shoeSizes', JSON.stringify(sizes))
      }
      if(!isBrandRepeated) {
         for(let key in brands) {
            brandsOptionElem.innerHTML += `<option class='brandOption' value='${key}'> ${key} </option>`;
         }
         localStorage.setItem('shoeBrands', JSON.stringify(brands))
      }
   }
   localStorage.setItem('shoesCatalogue', JSON.stringify(shoesList))
}

if(localStorage.getItem('shoeColors')) {
   let data = JSON.parse(localStorage.getItem('shoeColors'));
   let colorsOptionElem = document.querySelector('.colorOptions');
   for(let key in data) {
      colorsOptionElem.innerHTML += `<option class='colorOption' value='${key}'> ${key} </option>`;
   }
} 
if(localStorage.getItem('shoeSizes')) {
   let data = JSON.parse(localStorage.getItem('shoeSizes'));
   let sizesOptionElem = document.querySelector('.sizeOptions');  
   for(let key in data) {
      sizesOptionElem.innerHTML += `<option class='sizeOption' value='${key}'> ${key} </option>`;
   }
} 
if(localStorage.getItem('shoeBrands')) {
   let data = JSON.parse(localStorage.getItem('shoeBrands'));
   let brandsOptionElem = document.querySelector('.brandOptions');   
   for(let key in data) {
      brandsOptionElem.innerHTML += `<option class='brandOption' value='${key}'> ${key} </option>`;
   }
} 

let selectedColor = shoeCatalogueInstance.getSelectedColor();
let selectedSize = shoeCatalogueInstance.getSelectedSize();
let selectedBrand = shoeCatalogueInstance.getSelectedBrand();

function searchShoes() {
   let colorOptions = document.querySelectorAll('.colorOption');
   let sizeOptions = document.querySelectorAll('.sizeOption');
   let brandOptions = document.querySelectorAll('.brandOption');

   let isColorOptionFound = findColor(colorOptions);
   let isSizeOptionFound = findSize(sizeOptions);
   let isBrandOptionFound = findBrand(brandOptions);

   if(isColorOptionFound && isSizeOptionFound && isBrandOptionFound) {
      for(let i = 0; i < shoesListData.length; i++) {
         let currentShoe = shoesListData[i];

         for(let key in currentShoe) {
            let isColorSelected = Object.values(currentShoe).indexOf(selectedColor) > -1;
            let isSizeSelected = Object.values(currentShoe).indexOf(selectedSize) > -1;
            let isBrandSelected = Object.values(currentShoe).indexOf(selectedBrand) > -1;

            if (isColorSelected && isSizeSelected && isBrandSelected) {
               let data = {
                  color: currentShoe.color,
                  size: currentShoe.size,
                  brand: currentShoe.brand,
                  price: currentShoe.price,
                  in_stock: currentShoe.in_stock,
                  imgUrl: currentShoe.imgUrl
               }
               
               document.querySelector('.errorMsg').style.display = "none";
               // document.querySelector('.errorMsg').classList.add('animated', 'fadeOutDown');
               shoeInfoHTML(data)
               return
            } else {
               document.querySelector('.errorMsg').style.display = "block";
               document.querySelector('.errorMsg').innerHTML = "Item: OUT OF STOCK";
               document.querySelector('#shoeInfo').classList.add('animated', 'fadeInUp', 'warning');
               document.querySelector('#shoeInfo').innerHTML = "No Data Found...";
            }
         }
      }
   }
}

function findColor(colors) {
   let isColorFound = false;

   for(let i = 0; i < colors.length; i++) {
      let currentColor = colors[i];
      if(currentColor.selected) {
         for(let i = 0; i < shoesListData.length; i++) {
            let currentItem = shoesListData[i];
         
            for(let key in currentItem) {
               if (Object.values(currentItem).indexOf(currentColor.value) > -1) {
                  isColorFound = true;
                  selectedColor = currentItem.color
               }
            }
         }
      }
   }
   return isColorFound;  
}

function findSize(sizes) {
   let isSizeFound = false;

   for(let i = 0; i < sizes.length; i++) {
      let currentSize = sizes[i];
      if(currentSize.selected) {
         for(let i = 0; i < shoesListData.length; i++) {
            let currentItem = shoesListData[i];
         
            for(let key in currentItem) {
               if (Object.values(currentItem).indexOf(currentSize.value) > -1) {
                  isSizeFound = true;
                  selectedSize = currentItem.size;
               }
            }
         }
      }
   }
   return isSizeFound;
}

function findBrand(brands) {
   let isBrandFound = false;

   for(let i = 0; i < brands.length; i++) {
      let currentBrand = brands[i];
      if(currentBrand.selected) {
         for(let i = 0; i < shoesListData.length; i++) {
            let currentItem = shoesListData[i];
         
            for(let key in currentItem) {
               if (Object.values(currentItem).indexOf(currentBrand.value) > -1) {
                  isBrandFound = true;
                  selectedBrand = currentItem.brand;
               }
            }
         }
      }
   }
   return isBrandFound;
}

function addToCart() {
   let colorOptions = document.querySelectorAll('.colorOption');
   let sizeOptions = document.querySelectorAll('.sizeOption');
   let brandOptions = document.querySelectorAll('.brandOption');

   let isColorOptionFound = findColor(colorOptions);
   let isSizeOptionFound = findSize(sizeOptions);
   let isBrandOptionFound = findBrand(brandOptions);

   if(isColorOptionFound && isSizeOptionFound && isBrandOptionFound) {
      for(let i = 0; i < shoesListData.length; i++) {
         let currentShoe = shoesListData[i];
        
         for(let key in currentShoe) {
            let isColorSelected = Object.values(currentShoe).indexOf(selectedColor) > -1;
            let isSizeSelected = Object.values(currentShoe).indexOf(selectedSize) > -1;
            let isBrandSelected = Object.values(currentShoe).indexOf(selectedBrand) > -1;
           
            if (isColorSelected && isSizeSelected && isBrandSelected) {
               currentShoe.in_stock--;
            
               cartItems.push(currentShoe);
               
               let list = { cartItems };

               createHTML(list)

               document.querySelector('.cartTotal').innerHTML = shoeCatalogueInstance.calculateCartTotal(cartItems);

               localStorage.setItem('shoesCatalogue', JSON.stringify(shoesListData))

               localStorage.setItem( 'cartItems', JSON.stringify(cartItems) )

               return
            } 
         }
      }
   }
}



function clearBasket() {
   shoeCatalogueInstance.clearBasket(cartItems);
   localStorage.setItem( 'cartItems', JSON.stringify(cartItems) )

   location.reload();
}

function cancelBasket() { 
   shoeCatalogueInstance.cancelCart(cartItems, shoesListData)
            
   clearBasket();

   localStorage.setItem('shoesCatalogue', JSON.stringify(shoesListData))
}

if(localStorage.getItem('cartItems')) {
   var shoesListData = JSON.parse(localStorage.getItem('shoesCatalogue'));
 } else {
   shoesListData = [];
   localStorage.setItem( 'shoesCatalogue', JSON.stringify(shoesListData) )
 }

 if(localStorage.getItem('cartItems')) {
   var cartItems = JSON.parse(localStorage.getItem('cartItems'));
   let cartList = { cartItems }
   createHTML(cartList);
   document.querySelector('.cartTotal').innerHTML = shoeCatalogueInstance.calculateCartTotal(cartItems);
 } else {
   cartItems = [];
   localStorage.setItem( 'cartItems', JSON.stringify(cartItems) )
 }


Handlebars.registerHelper('calcCartTotal', function() {

   return shoeCatalogueInstance.calculateCartTotal(cartItems);
});

function createHTML(list) {
   let rawTemplate = document.querySelector('.shoesTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(list);

   let cartItemsElem = document.querySelector('.cartItems');
   cartItemsElem.innerHTML = ourGeneratedHTML;
}

function shoeInfoHTML(list) {
   let rawTemplate = document.querySelector('.myTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
  
   let ourGeneratedHTML = compiledTemplate(list);

   let displayDataElem = document.querySelector('#displayData');
   displayDataElem.innerHTML = ourGeneratedHTML;
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

cancelCartBtn.addEventListener('click', cancelBasket)

searchBtn.addEventListener('click',searchShoes);

addToCartBtn.addEventListener('click', addToCart);

checkoutBtn.addEventListener('click', clearBasket);
            

