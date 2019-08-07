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

    it('should return the value "2" when the quantity is incremented two times', function(){
        shoeCatalogueInstance.incrementQuantity();
        shoeCatalogueInstance.incrementQuantity();
        
        assert.equal(shoeCatalogueInstance.getQuantity(), 2);
    });

    it('should return the value "1" when the quantity is decremented once', function(){ 
        shoeCatalogueInstance.decrementQuantity();
        
        assert.equal(shoeCatalogueInstance.getQuantity(), 1);
    });

    it('should', function(){
        shoeCatalogueInstance.setColor('red');
        shoeCatalogueInstance.setSize(8);
        shoeCatalogueInstance.setBrand('Puma');
        shoeCatalogueInstance.setPrice(100);
        shoeCatalogueInstance.setCatalogueObj();
        
        let result = {color:"red", size:8, brand:"Puma", price:"100", in_stock:0};

        assert.deepEqual(shoeCatalogueInstance.getCatalogueObj(), result);
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
    
});