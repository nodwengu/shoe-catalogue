describe("shoeCatalogue Function", function() {

    it('should return the values that were provided as  input', function(){
        const shoeCatalogueInstance = createShoeCatalogue();

        shoeCatalogueInstance.setShoe('red', '10', 'nike', 100, 10, 'images/redNike.jpeg');
        
        assert.equal(shoeCatalogueInstance.getColor(), 'Red');
        assert.equal(shoeCatalogueInstance.getSize(), '10');
        assert.equal(shoeCatalogueInstance.getBrand(), 'Nike');
        assert.equal(shoeCatalogueInstance.getPrice(), 100.00);
        assert.equal(shoeCatalogueInstance.getInStock(), 10);
        assert.equal(shoeCatalogueInstance.getImgUrl(), 'images/redNike.jpeg');
    });

    it('Should be able to store and return the shoe data entered by the user in the input field', function(){
        const shoeCatalogueInstance = createShoeCatalogue();

        shoeCatalogueInstance.setShoe('red', '10', 'nike', 100, 10, 'images/redNike.jpeg');
        shoeCatalogueInstance.setShoeList()
        let result = [{"color":"Red","size":"10","brand":"Nike","price":"100.00","in_stock":10,"imgUrl":"images/redNike.jpeg"}]

        assert.deepEqual(shoeCatalogueInstance.getShoeList(), result);
    });

    it('should set and return colors, sizes , and brands added to the list of shoes items', function(){
        const shoeCatalogueInstance = createShoeCatalogue();

        shoeCatalogueInstance.setShoe('yellow', '10', 'Lacoste', 100, 10, 'images/redNike.jpeg');

        let arr = [
           {color: 'blue', size: '6', brand: 'Adidas', price: 170, in_stock: 5, imgUrl: 'images/redNike.jpeg'},
           {color: 'red', size: '7', brand: 'Nike', price: 200, in_stock: 5, imgUrl: 'images/redNike.jpeg'}
        ]

        shoeCatalogueInstance.setColorsAdded(arr);
        shoeCatalogueInstance.setSizesAdded(arr);
        shoeCatalogueInstance.setBrandsAdded(arr)
       
        assert.deepEqual(shoeCatalogueInstance.getColorsAdded(), { blue: 0, red: 0 });
        assert.deepEqual(shoeCatalogueInstance.getSizesAdded(), { '6': 0, '7': 0 });
        assert.deepEqual(shoeCatalogueInstance.getBrandsAdded(), { Adidas: 0, Nike: 0 });
    });

    it('should be able to add and return items added to the basket', function(){
        const shoeCatalogueInstance = createShoeCatalogue();

        shoeCatalogueInstance.setShoe('yellow', '10', 'Lacoste', 100, 10, 'images/redNike.jpeg');

        let obj1 =  {color: 'red', size: '7', brand: 'Nike', price: 200, in_stock: 5, imgUrl: 'images/redNike.jpeg'};
        let obj2 =  {color: 'blue', size: '10', brand: 'Adidas', price: 500, in_stock: 20, imgUrl: 'images/blueAdidas.jpeg'};
       
        shoeCatalogueInstance.setBasketList(obj1);
        shoeCatalogueInstance.setBasketList(obj2);
        let result = [
            {color: 'red', size: '7', brand: 'Nike', price: 200, in_stock: 5, imgUrl: 'images/redNike.jpeg'},
            {color: 'blue', size: '10', brand: 'Adidas', price: 500, in_stock: 20, imgUrl: 'images/blueAdidas.jpeg'}
        ]
       
        assert.deepEqual(shoeCatalogueInstance.getBasketList(), result);
    });

    it('should be able to calculate and return cart total', function(){
        const shoeCatalogueInstance = createShoeCatalogue();
        let data1 = [
            {color: 'red', size: '8', brand:"Puma", price:500, in_stock:10, imgUrl: 'images/blackAdidas.jpeg'},
            {color: 'blue', size: '10', brand: 'Nike', price: 200, in_stock: 20, imgUrl: 'images/blackAdidas.jpeg'},
            {color: 'blue', size: '5', brand: 'Nike', price: 300, in_stock: 2, imgUrl: 'images/blackAdidas.jpeg'},
        ];

        assert.deepEqual(shoeCatalogueInstance.calculateCartTotal(data1), '1000.00');
    });

    
    
    
});