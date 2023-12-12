export const cartDynamicValue = (cartItems) =>{

let totalQuantity = cartItems.length;
let totalCost = 0;
cartItems.forEach((element) => {
    // console.log(element.amount);
    let priceInNum = parseInt(element.price)
    let actualPrice = priceInNum*element.amount
    
    totalCost +=actualPrice
});

return {totalQuantity,totalCost}

}