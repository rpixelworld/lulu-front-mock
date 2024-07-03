import * as CartIndexedDBHelper from "../../IndexedDBHelper";
import Constants from "../../Constants";

export const dispatchShoppingCart = (shoppingCart) => {
    return {
        type: Constants.ACTION_DISPATCH_SHOPPING_CART,
        payload: shoppingCart
    }
}
