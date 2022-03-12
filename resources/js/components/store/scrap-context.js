import _ from "lodash";
import React, { useState } from "react";
import { useReducer } from "react";
//Context
const ScrapContext = React.createContext({
    products: [],
    userPickUps: (data) => {},
    updatePickUp: (data) => {},
    searchPickup: (data) => {},
});

const defaultProductState = {
    items: [],
    filteredData:[]
};

const productReducer = (state, action) => {
    if (action.type === "showProductByMaterialType") {
        const product_items = state.items.filter(
            (product) => product.material_type_id == action.material_id
        );
       
        return {
            items:state.items,
            filteredData:product_items
        };
    }

    if (action.type === "showProducts") {
        return {
            items: action.products,
            filteredData:action.products

        };
    }

    if (action.type === "updateProduct") {
        const product_items = state.items;
        const index = _.findIndex(product_items, {
            pick_id: action.product.pick_id,
        });
        product_items[index] = action.product;
        return {
            items: product_items,
            filteredData:product_items

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

    const searchPickup = (data) => {
        dispatchProductsAction({
            type: "showProductByMaterialType",
            material_id: data,
        });
    };

    const contextValue = {
        products: productState.filteredData,
        userPickUps: pickUpHandler,
        updatePickUp: updatePickUp,
        searchPickup: searchPickup,
    };

    return (
        <ScrapContext.Provider value={contextValue}>
            {props.children}
        </ScrapContext.Provider>
    );
};

export default ScrapContext;
