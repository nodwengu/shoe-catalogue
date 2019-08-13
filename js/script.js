let addNewBtnElem = document.querySelector('.addNewBtn');
let addBtnElem = document.querySelector('#addBtn');
let cancelAddNewBtn = document.querySelector('#cancelAddNew');
let cancelCartBtn = document.querySelector('#cancelCart');
let showCartBtn = document.querySelector('.showCart');
let searchBtn = document.querySelector('#searchBtn');
let addToCartBtn = document.querySelector('#addToCart');

let colorSelectOptions = document.querySelector('.colorOption');
let sizeSelectOptions = document.querySelector('.sizeOption');
let brandSelectOptions = document.querySelector('.brandOption');

let shoeCatalogueInstance = createShoeCatalogue();


// if(localStorage.getItem('shoesCatalogue')) {
//    let shoesListData = JSON.parse(localStorage.getItem('shoesCatalogue'));
//    for(let i = 0; i < shoesListData.length; i++) {
//       let elem = shoesListData[i];
//       console.log(elem);
//       for(let key in elem) {
//          alert(key);
//       }
//    }
//    console.log(shoesListData);
// } 

//let shoesList = shoeCatalogueInstance.getShoesList();

function storeShoe() {
   //let shoesList = [];
   let shoesList = shoeCatalogueInstance.getShoesList();
    
   //Get user input values
   let colorVal = document.querySelector('#color').value;
   let sizeVal = document.querySelector('#size').value;
   let brandVal = document.querySelector('#brand').value;
   let priceVal = Number(document.querySelector('#price').value);

   shoeCatalogueInstance.setColor(colorVal);
   shoeCatalogueInstance.setSize(sizeVal);
   shoeCatalogueInstance.setBrand(brandVal);
   shoeCatalogueInstance.setPrice(priceVal);
   shoeCatalogueInstance.setCatalogueObj();

   let isColorRepeated = shoeCatalogueInstance.checkColor(shoesList)
   let isSizeRepeated = shoeCatalogueInstance.checkSize(shoesList)
   let isBrandRepeated = shoeCatalogueInstance.checkBrand(shoesList)

   let color = shoeCatalogueInstance.getColor();
   let size = shoeCatalogueInstance.getSize();
   let brand =  shoeCatalogueInstance.getBrand();

   if(isColorRepeated && isSizeRepeated && isBrandRepeated) {
      for(let i = 0; i < shoesList.length; i++) {
         let elem = shoesList[i];
         
         if(elem.color === color && elem.size === size && elem.brand === brand) {
               //update the current element quantity
               elem.in_stock++;
               //This is where we need to set our image
         }
      }
   } 
   else {
      //alert("no repeat");
      shoesList.push(shoeCatalogueInstance.getCatalogueObj())

      // shoeCatalogueInstance.checkColor(shoesList);
      // shoeCatalogueInstance.checkSize(shoesList);
      // shoeCatalogueInstance.checkBrand(shoesList);

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
//console.log(shoesList)


// function createHTML(shoesItems) {
//     console.log(shoesItems);
//     let rawTemplate = document.querySelector('.shoesTemplate').innerHTML;
//     //console.log(rawTemplate);
//     let compiledTemplate = Handlebars.compile(rawTemplate);
//     let ourGeneratedHTML = compiledTemplate(shoesItems);

//     let colorsOptionElem = document.querySelector('.selectOptions');
//     colorsOptionElem.innerHTML = ourGeneratedHTML;
// }

if(localStorage.getItem('shoesCatalogue')) {
   let shoesListData = JSON.parse(localStorage.getItem('shoesCatalogue'));
   for(let i = 0; i < shoesListData.length; i++) {
      let elem = shoesListData[i];
      //console.log(elem);
      for(let key in elem) {
         //alert(key);
      }
   }
   console.log(shoesListData);
} 

let shoesListData = JSON.parse(localStorage.getItem('shoesCatalogue'));

function searchShoes() {
   let colorOptions = document.querySelectorAll('.colorOption');
   let sizeOptions = document.querySelectorAll('.sizeOption');
   let brandOptions = document.querySelectorAll('.brandOption');

   let isColorOptionFound = findColor(colorOptions);
   let isSizeOptionFound = findSize(sizeOptions);
   let isBrandOptionFound = findBrand(brandOptions);

   let result = "";

   if(isColorOptionFound && isSizeOptionFound && isBrandOptionFound) {
      for(let i = 0; i < shoesListData.length; i++) {
         let currentShoe = shoesListData[i];

         for(let key in currentShoe) {
            let isColorSelected = Object.values(currentShoe).indexOf(selectedColor) > -1;
            let isSizeSelected = Object.values(currentShoe).indexOf(selectedSize) > -1;
            let isBrandSelected = Object.values(currentShoe).indexOf(selectedBrand) > -1;

            if (isColorSelected && isSizeSelected && isBrandSelected) {
              result += `We have <span style="font-weight: 800; margin: 0 0px 0 0;">${currentShoe.in_stock} ${currentShoe.color} ${currentShoe.brand} </span>  
              shoes in stock at a price of <span style="font-weight: 800;">R${currentShoe.price}</span> each`
              document.querySelector('.shoeMessage').innerHTML = result;
              document.querySelector('.errorMsg').innerHTML ="";
              return
            } else {
               document.querySelector('.errorMsg').innerHTML ="Item: OUT OF STOCK";
            }
         }
      }
   }
}
let selectedColor = "";
let selectedSize = "";
let selectedBrand = "";

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
   alert("Add to cart button clicked");
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


searchBtn.addEventListener('click',searchShoes);

addToCartBtn.addEventListener('click', addToCart);
            

