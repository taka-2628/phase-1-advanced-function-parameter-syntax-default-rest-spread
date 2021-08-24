//WITHOUT DEFAULT VALUE
function discountedPrice(itemPrice, discount){
    return itemPrice - (itemPrice * discount);
}

discountedPrice(100, 0.25); 
//=> 75.0


//WITH DEFAULT VALUE
function discountedPrice(itemPrice, discount = 0.25){
    return itemPrice - (itemPrice * discount);
}

discountedPrice(100); 
//=> 75.0
discountedPrice(100, 0.35)
//=> 65.0

