import { useCallback, useContext, useState } from "react";

import axios from "axios";
import { API_SERVER } from "../config/constant";
import AuthContext from "../store/auth-context";
//R2m2642i@

const HTTPRequestAPI = axios.create({
    baseURL: API_SERVER,
    headers: {
        "Content-type": "application/json",
    },
});

const useAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const auth = useContext(AuthContext);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        try {
            setIsLoading(true);
            const AUTH_TOKEN = auth.token != "" ? `Bearer ${auth.token}` : "";
            HTTPRequestAPI.defaults.headers.common["Authorization"] =
                AUTH_TOKEN;

            const response = await HTTPRequestAPI({
                method: requestConfig.method,
                url: requestConfig.url,
                data: requestConfig.data,
            });

            const { data } = response;
            if (+response.status != 201 && +response.status != 200) {
                throw new Error("Request Failed");
            }

            // console.log("header:",data.token);

            // if(data.hasOwnProperty('token')){

            // }

            // if (response.headers["auth-token"] != null) {
            //     data.token = response.headers["auth-token"];
            // }

            // const newResponseData = [...data, response.headers["auth-token"]];

            // const newResponseData = Object.assign(data, response.headers["auth-token"]);
            //console.log(data);
            applyData(data);
        } catch (err) {
            setError(err || "Something went wrong!");
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};
export default useAxios;
