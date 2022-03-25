import _ from "lodash";
import React, { useState } from "react";
import { useReducer } from "react";
import { BOOKING_STATUS } from "../config/constant";
//Context
const AdminPickupsContext = React.createContext({
    products: [],
    userPickUps: (data) => {},
    updatePickUp: (data) => {},
    searchPickup: (data) => {},
});

const defaultProductState = {
    items: [],
    filteredData: [],
};

let filters = {
    material_type: -1,
    status: -1,
    agents: -1,
};

const productReducer = (state, action) => {
    if (action.type === "filterProducts") {
        const product_items = state.items.filter(
            (product) =>
                (action.filters.material_type != -1
                    ? product.material_type_id == action.filters.material_type
                    : true) &&
                (action.filters.status != -1
                    ? product.status == BOOKING_STATUS[action.filters.status]
                    : true) &&
                (action.filters.agents != -1
                    ? product.agent && product.agent.id == action.filters.agents
                    : true)
        );

        return {
            items: state.items,
            filteredData: product_items,
        };
    }

    if (action.type === "showProducts") {
        return {
            items: action.products,
            filteredData: action.products,
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
            filteredData: product_items,
        };
    }
    return defaultProductState;
};

//Provider
export const AdminPickupsContextProvider = (props) => {
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
        filters = { ...filters, ...data };

        dispatchProductsAction({
            type: "filterProducts",
            filters: filters,
        });
    };

    const contextValue = {
        products: productState.filteredData,
        userPickUps: pickUpHandler,
        updatePickUp: updatePickUp,
        searchPickup: searchPickup,
    };

    return (
        <AdminPickupsContext.Provider value={contextValue}>
            {props.children}
        </AdminPickupsContext.Provider>
    );
};

export default AdminPickupsContext;
