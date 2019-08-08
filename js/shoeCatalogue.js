
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

   function setQuantity(val) {
      in_stock = val;
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
   function getQuantity() {
      return in_stock;
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

   function incrementQuantity() {
      in_stock++;
   }

   function decrementQuantity() {
      in_stock--;
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

   return {
      setColor,
      setSize,
      setBrand,
      setPrice,
      setQuantity,
      setCatalogueObj,
      getColor,
      getSize,
      getBrand,
      getPrice,
      getQuantity,
      getCatalogueObj,
      getColorsAdded,
      getSizesAdded,
      getBrandsAdded,
      checkColor,
      incrementQuantity,
      decrementQuantity,
      checkSize,
      checkBrand,
      getShoesList

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