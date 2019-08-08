let addNewBtnElem = document.querySelector('.addNewBtn');
let addBtnElem = document.querySelector('#addBtn');
let cancelAddNewBtn = document.querySelector('#cancelAddNew');
let cancelCartBtn = document.querySelector('#cancelCart');
let showCartBtn = document.querySelector('.showCart');
let searchBtn = document.querySelector('#searchBtn');

let shoeCatalogueInstance = createShoeCatalogue();

let shoesList = [];
function storeShoe() {
   let shoesList = [];
    
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
               //console.log(elem);
         }
      }
   } 
   // else {
      //alert("no repeat");
      shoesList.push(shoeCatalogueInstance.getCatalogueObj())

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
            colorsOptionElem.innerHTML += "<option>" + key + "</option>";
         }
         localStorage.setItem('shoeColors', JSON.stringify(colors))
      }

      if(!isSizeRepeated) {
         for(let key in sizes) {
            sizesOptionElem.innerHTML += "<option>" + key + "</option>";
         }
         localStorage.setItem('shoeSizes', JSON.stringify(sizes))
      }

      if(!isBrandRepeated) {
         for(let key in brands) {
            brandsOptionElem.innerHTML += "<option>" + key + "</option>";
         }
         localStorage.setItem('shoeBrands', JSON.stringify(brands))
      }
   
   // }

}

if(localStorage.getItem('shoeColors')) {
   let data = JSON.parse(localStorage.getItem('shoeColors'));
   let colorsOptionElem = document.querySelector('.colorOptions');
   
   for(let key in data) {
      colorsOptionElem.innerHTML += "<option>" + key + "</option>";
   }
} 

if(localStorage.getItem('shoeSizes')) {
   let data = JSON.parse(localStorage.getItem('shoeSizes'));
   let sizesOptionElem = document.querySelector('.sizeOptions');
   
   for(let key in data) {
      sizesOptionElem.innerHTML += "<option>" + key + "</option>";
   }
} 

if(localStorage.getItem('shoeBrands')) {
   let data = JSON.parse(localStorage.getItem('shoeBrands'));
   let brandsOptionElem = document.querySelector('.brandOptions');
   
   for(let key in data) {
      brandsOptionElem.innerHTML += "<option>" + key + "</option>";
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


// function searchShoes() {
//     let colorOptions = document.querySelectorAll('.colorOption');
//     for(let i = 0; i < colorOptions.length; i++) {
//         let elem = colorOptions[i];
//         if(elem.value === "red") {
//             alert(elem.value);
//         } else if(elem.value === "blue") {
//             alert(elem.value);
//         } else if(elem.value === "orange") {
//             alert(elem.value);
//         } else if(elem.value === "black") {
//             alert(elem.value);
//         }
        
//     }
// }




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


//searchBtn.addEventListener('click',searchShoes);



//Setting up and testing handlebars template