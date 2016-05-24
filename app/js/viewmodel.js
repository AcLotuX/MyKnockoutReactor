//var vm = {
//    product: Product(1, 'T-Shirt', 10, 20)
//};
//ko.applyBindings(vm);//This how knockout is activated

var vm = (function(){
    var product = Product(1, 'T-Shirt', 10, 20);
    var catalog = ko.observableArray([
        Product(1, "T-Shirt", 10.00, 20),    
        Product(2, "Trousers", 20.00, 10),    
        Product(3, "Shirt", 15.00, 20),    
        Product(4, "Shorts", 5.00, 10)
    ]);
    
    // Adding new Product --------------------------
    var newProduct = Product("","","","");
    
    var addProduct = function(context){
        var id = new Date().valueOf;//random id from time
        
        var newProduct = Product(id,context.name(),context.price(),context.stock());
        catalog.push(newProduct);
        newProduct.clear();
    };
    
    var clearNewProduct = function(){
        newProduct.name("");
        newProduct.price("");
        newProduct.stock("");        
    };
    
    return {
        product: product,
        catalog: catalog,//List of products
        newProduct: newProduct,//New product
        addProduct: addProduct//Fuction Add Product
    };
})();
ko.applyBindings(vm);    