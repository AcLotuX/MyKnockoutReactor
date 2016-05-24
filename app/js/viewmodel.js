//var vm = {
//    product: Product(1, 'T-Shirt', 10, 20)
//};
//ko.applyBindings(vm);//This how knockout is activated

var vm = (function(){
    var product = Product(1, 'T-Shirt', 10, 20);
    return {
        product: product
    };
})();
ko.applyBindings(vm);