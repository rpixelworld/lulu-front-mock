import * as CartIndexedDBHelper from "../../IndexedDBHelper";
import Constants from "../../Constants";

export const dispatchShoppingCart = (shoppingCart) => {
    return {
        type: Constants.ACTION_DISPATCH_SHOPPING_CART,
        payload: shoppingCart
    }
}

export const dispatchShippingFee = (fee) => {
    return {
        type: Constants.ACTION_DISPATCH_SHIPPING_FEE,
        payload: fee
    }
}

export const dispatchOrderInfo = (orderInfo) => {
    return {
        type: Constants.ACTION_DISPATCH_ORDER_INFO,
        payload: orderInfo
    }
}

export const dispatchClearShoppingCart = ()=> {
    return {
        type: Constants.ACTION_CLEAR_SHOPPING_CART,
        payload: null
    }
}
