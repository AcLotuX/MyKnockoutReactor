var Product = function(id, name, price, stock){
    "use strict";
    var _id = id,
        _name = name,
        _price = price,
        _stock = stock;
    
    return {
        id:_id,
        name:_name,
        price:_price,
        stock:_stock
    }
}