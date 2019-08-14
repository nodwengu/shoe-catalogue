describe("shoeCatalogue Function", function() {
    const shoeCatalogueInstance = createShoeCatalogue();

    it('should return the value that was provided as  input', function(){
        shoeCatalogueInstance.setColor('red');
        shoeCatalogueInstance.setSize(8);
        shoeCatalogueInstance.setBrand('Puma');
        shoeCatalogueInstance.setPrice(100);
        
        assert.equal(shoeCatalogueInstance.getColor(), 'red');
        assert.equal(shoeCatalogueInstance.getSize(), 8);
        assert.equal(shoeCatalogueInstance.getBrand(), 'Puma');
        assert.equal(shoeCatalogueInstance.getPrice(), 100.00);
    });

    it('should return false when the color, size , or brand input value is not in the list', function(){
        shoeCatalogueInstance.setColor('yellow');
        shoeCatalogueInstance.setBrand('Lacoste');
        shoeCatalogueInstance.setSize(10);

        let arr = [
           {color: 'blue', size: '6', brand: 'Adidas', price: 170, in_stock: 5},
           {color: 'red', size: '7', brand: 'Nike', price: 200, in_stock: 5}
        ]
       
        assert.equal(shoeCatalogueInstance.checkColor(arr), false);
        assert.equal(shoeCatalogueInstance.checkSize(arr), false);
        assert.equal(shoeCatalogueInstance.checkBrand(arr), false);
    });
    

    it('should return true when the color, size , or brand input value is in the list', function(){
        shoeCatalogueInstance.setColor('red');
        shoeCatalogueInstance.setBrand('Adidas');
        shoeCatalogueInstance.setSize(7);

        let arr = [
           {color: 'blue', size: '6', brand: 'Adidas', price: 170, in_stock: 5},
           {color: 'red', size: '7', brand: 'Nike', price: 200, in_stock: 5}
        ]
       
        assert.equal(shoeCatalogueInstance.checkColor(arr), true);
        assert.equal(shoeCatalogueInstance.checkSize(arr), true);
        assert.equal(shoeCatalogueInstance.checkBrand(arr), true);
    });

    it('should be able to add items to the cart', function(){
        let data = {color:"red", size:8, brand:"Puma", price:"100", in_stock:0};
        let result = [{color:"red", size:8, brand:"Puma", price:"100", in_stock:0}]

        shoeCatalogueInstance.addToCart(data)

        assert.deepEqual(shoeCatalogueInstance.getCartItems(), result);
    });

    it('should be able to calculate and return cart total', function(){
        let data1 = {color:"red", size:8, brand:"Puma", price:100, in_stock:10};
        let data2 = {color: 'blue', size: '10', brand: 'Nike', price: 200, in_stock: 20}
        
        let result = [{color:"red", size:8, brand:"Puma", price:"100", in_stock:0}]

        shoeCatalogueInstance.addToCart(data1)
        shoeCatalogueInstance.addToCart(data2)

        assert.deepEqual(shoeCatalogueInstance.getCartItems(), result);
    });
    
    
});