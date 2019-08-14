
function createShoeCatalogue() {  
   let color = "";
   let size = "";
   let brand = "";
   let price = 0.00;
   let in_stock = 0;
   let obj = {};
   let colorsAdded = {};
   let sizesAdded = {};
   let brandsAdded = {};
   let shoesList = [];
   let cartItems = [];
   let cartTotal = 0;

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

   function setCatalogueObj() {
      obj = {
         color,
         size,
         brand,
         price,
         in_stock
      }
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





   function getColorsAdded() {
      return colorsAdded;
   }

   function getSizesAdded() {
      return sizesAdded;
   }

   function getBrandsAdded() {
      return brandsAdded;
   }

   function getCatalogueObj() {
      return obj;
   }

   function getShoesList() {
      return shoesList;
   }

   function checkColor(theShoes) {
      let isRepeated = false;
      for(let i = 0; i < theShoes.length; i++) {
         let elem = theShoes[i];
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

   function checkSize(theShoes) {
      let isRepeated = false;
      for(let i = 0; i < theShoes.length; i++) {
         let elem = theShoes[i];
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

   function checkBrand(theShoes) {
      let isRepeated = false;
      for(let i = 0; i < theShoes.length; i++) {
         let elem = theShoes[i];
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

   function addToCart(shoeData) {
      cartItems.push(shoeData);
   }

   function getCartItems() {
      return cartItems;
   }

   function calculateCartTotal(items) {
      for(let i = 0; i < items.length; i++) {
         let currentCartItem = items[i];
         cartTotal += Number(currentCartItem.price);
         break;
      }
   }

   function getCartTotal() {
      return cartTotal.toFixed(2);
   }

   return {
      setColor,
      setSize,
      setBrand,
      setPrice,
      setCatalogueObj,
      getColor,
      getSize,
      getBrand,
      getPrice,
      getCatalogueObj,
      getColorsAdded,
      getSizesAdded,
      getBrandsAdded,
      checkColor,
      checkSize,
      checkBrand,
      getShoesList,
      addToCart,
      getCartItems,
      calculateCartTotal,
      getCartTotal

   }
}


//let shoeCatalogueInstance = createShoeCatalogue();
// shoeCatalogueInstance.setColor('red');
// shoeCatalogueInstance.setSize(8);
// shoeCatalogueInstance.setBrand('Thando');
// shoeCatalogueInstance.setPrice(2.50);
// shoeCatalogueInstance.setCatalogueObj();

// //alert(shoeCatalogueInstance.getColor());

// console.log(shoeCatalogueInstance.getCatalogueObj());



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

   // shoeCatalogueInstance.addToCart(obj1)
   // shoeCatalogueInstance.addToCart(obj2)

   // console.log("Testing Testing ");
   // console.log(shoeCatalogueInstance.getCartItems());

   // let obj1 = {color: 'blue', size: '45', brand: 'me', price: 170, in_stock: 5}
   // let obj2 = {color: 'red', size: '10', brand: 'Puma', price: 200.00, in_stock: 20}

   // shoeCatalogueInstance.addToCart(obj1)
   // shoeCatalogueInstance.addToCart(obj2)

   // console.log("Calculating cart total ");
   // console.log(shoeCatalogueInstance.getCartItems());

   