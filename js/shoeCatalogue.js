
function createShoeCatalogue() {  
   let color = "";
   let size = "";
   let brand = "";
   let price = 0.00;
   let in_stock = 0;
   let imgUrl = "";

   let colorsAdded = {};
   let sizesAdded = {};
   let brandsAdded = {};
   let shoesList = [];
   let cartItems = [];

   let selectedColor = "";
   let selectedSize = "";
   let selectedBrand = "";

   function setColor(theColor) {
      color = theColor;
   }
   function setSize(theSize) {
      size = theSize;
   }
   function setBrand(theBrand) {
      brand = theBrand;
   }
   function setPrice(thePrice) {
      price = thePrice.toFixed(2);
   }
   function setInStock(quantity) {
      in_stock = quantity;
   }
   function setImage(imgVal) {
      imgUrl = imgVal;
   }
   
   function getColor() {
      return color;
   }
   function getSize() {
      return size;
   }
   function getBrand() {
      return brand;
   }
   function getPrice() {
      return price;
   }
   function getInStock() {
      return in_stock;
   }

   function getImage() {
      return imgUrl;
   }

   function getSelectedColor() {
      return selectedColor;
   }

   function getSelectedSize() {
      return selectedSize;
   }

   function getSelectedBrand() {
      return selectedBrand;
   }

   function setShoesList() {
      shoesList.push({
         color,
         size,
         brand,
         price,
         in_stock,
         imgUrl
      });
   }

   function getShoesList() {
      return shoesList;
   }

   function getColorsAdded() {
      return colorsAdded;
   }

   function getSizesAdded() {
      return sizesAdded;
   }

   function getBrandsAdded() {
      return brandsAdded;
   }
  
   function addStock(listItems) {
      for(let i = 0; i < listItems.length; i++) {
         let currentShoe = listItems[i];
         if(currentShoe.color === color && currentShoe.size === size && currentShoe.brand === brand) {
               //update the current element quantity
               currentShoe.in_stock = currentShoe.in_stock + in_stock;
         }
      }
   }

   function checkColor(list) {
      let isRepeated = false;
      for(let i = 0; i < list.length; i++) {
         let elem = list[i];
         let color = elem.color;

         if (colorsAdded[color] === undefined){
             //add an entry for the color in the Object Map
             colorsAdded[color] = 0;
         } else {
            colorsAdded[color]++;
         }
      }
      let newColor = getColor();
      for(let key in colorsAdded) {
        if(colorsAdded.hasOwnProperty(newColor)) {
            //alert(newColor + " already exists");
            isRepeated  = true;
            break;
        } 
      }   
      return isRepeated;
   }

   function checkSize(list) {
      let isRepeated = false;
      for(let i = 0; i < list.length; i++) {
         let elem = list[i];
         let size = elem.size;

         if (sizesAdded[size] === undefined){
             //add an entry for the size in the Object Map
             sizesAdded[size] = 0;
         } else {
            sizesAdded[size]++;
         }
      }
      let newsize = getSize();
      for(let key in sizesAdded) {
        if(sizesAdded.hasOwnProperty(newsize)) {
            //alert(newsize + " already exists");
            isRepeated  = true;
            break;
        } 
      }
      return isRepeated;
   }

   function checkBrand(list) {
      let isRepeated = false;
      for(let i = 0; i < list.length; i++) {
         let elem = list[i];
         let brand = elem.brand;

         if (brandsAdded[brand] === undefined){
             //add an entry for the brand in the Object Map
             brandsAdded[brand] = 0;
         } else {
            brandsAdded[brand]++;
         }
      }
      let newBrand = getBrand();
      for(let key in brandsAdded) {
        if(brandsAdded.hasOwnProperty(newBrand)) {
            //alert(newBrand + " already exists");
            isRepeated  = true;
            break;
        } 
      }
      return isRepeated;
   }

   function calculateCartTotal(items) {
      let total = 0;
      for(let i = 0; i < items.length; i++) {
         let currentCartItem = items[i];
         total += Number(currentCartItem.price);
      }

      return total.toFixed(2);
   }

   function clearBasket(basketList) {
      basketList.length = 0;
   }

   function cancelCart(basketList, shoesList) { 
      for(let i = 0; i < basketList.length; i++) {
         let currentBasketItem = basketList[i];
         
         for(let j = 0; j < shoesList.length; j++) {
            let currentShoeItem = shoesList[j];
           
            if(currentBasketItem.color == currentShoeItem.color && currentBasketItem.size == currentShoeItem.size && currentBasketItem.brand == currentShoeItem.brand) {
               currentShoeItem.in_stock++;
            }
         }
      }
   }


   return {
      setColor,
      setSize,
      setBrand,
      setPrice,
      setInStock,
      setShoesList,
      setImage,
     
      getColor,
      getSize,
      getBrand,
      getPrice,
      getInStock,
      getShoesList,
      getImage,

      getColorsAdded,
      getSizesAdded,
      getBrandsAdded,
      checkColor,
      checkSize,
      checkBrand,
     
      calculateCartTotal,
      clearBasket,
      getSelectedColor,
      getSelectedSize,
      getSelectedBrand,
      addStock,

      cancelCart,
   }
}


//let shoeCatalogueInstance = createShoeCatalogue();
// shoeCatalogueInstance.setColor('red');
// shoeCatalogueInstance.setSize(8);
// shoeCatalogueInstance.setBrand('Thando');
// shoeCatalogueInstance.setPrice(2.50);
// shoeCatalogueInstance.setCatalogueObj();

// //alert(shoeCatalogueInstance.getColor());



//shoeCatalogueInstance.setColor('green');
// shoeCatalogueInstance.setColor('yellow');

//  let arr = [
//    {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5},
//    {color: 'yellow', size: '12', brand: 'mike', price: 300, in_stock: 2},
//    {color: 'red', size: '45', brand: 'me', price: 170, in_stock: 5},
//    {color: 'pink', size: '45', brand: 'me', price: 170, in_stock: 5}
// ]

// shoeCatalogueInstance.checkColor(arr);
// let array = [];
// let colors = shoeCatalogueInstance.getColorsAdded()
// array.push(colors)
// console.log(array)



//shoeCatalogueInstance.setSize(45);
//shoeCatalogueInstance.setSize(51);

//  let arr = [
//    {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5},
//    {color: 'red', size: '45', brand: 'me', price: 170, in_stock: 5}
// ]
// alert( shoeCatalogueInstance.checkSize(arr) );



// shoeCatalogueInstance.setBrand("mine");
// shoeCatalogueInstance.setBrand("me");

// let arr = [
//    {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5},
//    {color: 'red', size: '45', brand: 'me', price: 170, in_stock: 5}
// ]
// alert( shoeCatalogueInstance.checkBrand(arr) );



   // let obj1 = {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5}
   // let obj2 = {color: 'red', size: '10', brand: 'Puma', price: 200.00, in_stock: 20}

   // shoeCatalogueInstance.addToBasket(obj1)
   // shoeCatalogueInstance.addToBasket(obj2)

   // console.log("Testing Testing ");
   // console.log(shoeCatalogueInstance.getCartItems());

   // let obj1 = {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5}
   // let obj2 = {color: 'red', size: '10', brand: 'Puma', price: 200.00, in_stock: 20}

   // shoeCatalogueInstance.addToBasket(obj1)
   // shoeCatalogueInstance.addToBasket(obj2)

   // console.log("Calculating cart total ");
   // console.log(shoeCatalogueInstance.getCartItems());

   // shoeCatalogueInstance.findColor();
   // alert("wewewe");

   