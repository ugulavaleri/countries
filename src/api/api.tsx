import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import { countryType } from "../types/globaltTypes";

export interface apiResponse {
    error: boolean;
    response: { message: string; data: string | countryType[] };
}

const Api = {
    sendCountryRequest: async (
        method: "GET" | "POST",
        setData: Dispatch<SetStateAction<any>>
    ) => {
        const response: apiResponse = {
            error: false,
            response: { message: "", data: "" },
        };
        try {
            const apiResponse = await axios({
                method: method,
                url: "https://restcountries.com/v3.1/all",
            });

            response.error = false;
            response.response = apiResponse.data;
            setData(response.response);
        } catch (e: any) {
            response.error = true;
            console.log(e);
        }

        return response;
    },
    sendCountryRequestForOne: async (
        method: "GET" | "POST",
        setData: Dispatch<SetStateAction<any>>,
        country: string
    ) => {
        const response: apiResponse = {
            error: false,
            response: { message: "", data: "" },
        };
        try {
            const apiResponse = await axios({
                method: method,
                url: `https://restcountries.com/v3.1/name/${country}?fullText=true`,
            });

            response.error = false;
            response.response = apiResponse.data;
            setData(response.response);
        } catch (e: any) {
            response.error = true;
            console.log(e);
        }

        return response;
    },
    sendAirportRequest: async (
        method: "GET" | "POST",
        setData: Dispatch<SetStateAction<any>>,
        country: string
    ) => {
        const response: apiResponse = {
            error: false,
            response: { message: "", data: "" },
        };
        try {
            const apiResponse = await axios({
                method: method,
                url:
                    "https://api.api-ninjas.com/v1/airports?country=" + country,
                headers: {
                    "X-Api-Key": "JNni8o++OLTccjbwdrr/Zw==pfv826CEsnuwUaAp",
                },
            });

            response.error = false;
            response.response = apiResponse.data;
            setData(response.response);
        } catch (e: any) {
            response.error = true;
            console.log(e);
        }

        return response;
    },
    sendCurrencyRequest: async (
        setData: Dispatch<SetStateAction<any>>,
        from: string,
        to: string
    ) => {
        const response: apiResponse = {
            error: false,
            response: { message: "", data: "" },
        };
        try {
            const apiResponse = await axios.get(
                `https://api.exchangerate.host/convert?from=${from}&to=${to}`
            );

            response.error = false;
            response.response = apiResponse.data;
            setData(response.response);
        } catch (e: any) {
            response.error = true;
            console.log(e);
        }

        return response;
    },
};

export default Api;
