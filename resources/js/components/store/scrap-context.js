import _ from "lodash";
import React, { useState } from "react";
import { useReducer } from "react";
//Context
const ScrapContext = React.createContext({
    products: [],
    userPickUps: (data) => {},
    updatePickUp: (data) => {},
});

const defaultProductState = {
    items: [],
};

const productReducer = (state, action) => {

    if (action.type === "showProducts") {
       
        //const product_items = action.products.map((product)=>product);
        //const product_items = state.items.concat(action.products);
        // return {
        //     items: product_items,
        // };
        return {
            items: action.products,
        };
    }

    if (action.type === "updateProduct") {

        const product_items = state.items;

        const index = _.findIndex(product_items, {
            pick_id: action.product.pick_id,
        });

        product_items[index] = action.product;

        return {
            items:product_items,
        };
    }
    return defaultProductState;
};

//Provider
export const ScrapContextProvider = (props) => {
    const [productState, dispatchProductsAction] = useReducer(
        productReducer,
        defaultProductState
    );
    const pickUpHandler = (data) => {
        dispatchProductsAction({ type: "showProducts", products: data });
    };

    const updatePickUp = (data) => {
        dispatchProductsAction({ type: "updateProduct", product: data });
    };

    const contextValue = {
        products: productState.items,
        userPickUps: pickUpHandler,
        updatePickUp: updatePickUp,
    };
   
    return (
        <ScrapContext.Provider value={contextValue}>
            {props.children}
        </ScrapContext.Provider>
    );
};

export default ScrapContext;
