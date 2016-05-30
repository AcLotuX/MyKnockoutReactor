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
    var newProduct = Product('','','','');
    
    var addProduct = function(context){
        if(emptyValidation){
            alert("All fields are required!");
            clearNewProduct();
            return;
        }
        var id = new Date().valueOf;//random id from time
        
        var newProduct = Product(id,context.name(),context.price(),context.stock());
        catalog.push(newProduct);
        clearNewProduct();
    };
    
    var clearNewProduct = function(){
        newProduct.name('');
        newProduct.price('');
        newProduct.stock('');
    };
    
    // Search --------------------------------------
    var searchTerm = ko.observable('');
    var filteredCatalog = ko.computed(function(){
        //if catalog is empty return empty array
        if(!catalog()){
            return [];
        }
        var filter = searchTerm().toLowerCase();

        //if filter is empty return all the catalog
        if(!filter){
            return catalog();
        }

        //filter data
        var filtered = ko.utils.arrayFilter(catalog(),function(item){
            /*var fields = ["name"];// we can filter several properties
            debugger;
            var l = fields.length;
            while(l--){
                var prop = fields[l];
                var strProp = ko.unwrap(item[prop]).toLocaleLowerCase();
                if(strProp.indexOf(filter) !== -1){
                    return true;
                };
            }
            return false;*/
            var strProp = ko.unwrap(item["name"]).toLocaleLowerCase();
            return (strProp.indexOf(filter)>-1);
        });
        return filtered;
    });

    var emptyValidation = ko.computed(function(){
        if(newProduct.name() == "")
            return true;
        if(newProduct.price() == "")
            return true;
        if(newProduct.stock() == "")
            return true;
        return false
    });

    return {
        searchTerm: searchTerm,
        product: product,
        //catalog: catalog,//List of products
        catalog: filteredCatalog, // List of products with filter apply
        newProduct: newProduct,//New product
        addProduct: addProduct//Fuction Add Product
    };
})();
ko.applyBindings(vm);
