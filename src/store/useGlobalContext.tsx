import { createContext, useContext, useEffect, useState } from "react";
import Api from "../api/api";
import { countryType } from "../types/globaltTypes";

interface ContextValue {
    countries: countryType[];
    setCountries: React.Dispatch<React.SetStateAction<countryType[]>>;
    currentCountry: countryType[] | undefined;
    setCurrentCountry: React.Dispatch<
        React.SetStateAction<countryType[] | undefined>
    >;
    chosenCountry: string;
    setChosenCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const store = createContext<ContextValue>({
    countries: [],
    setCountries: () => {},
    currentCountry: undefined,
    setCurrentCountry: () => {},
    chosenCountry: "",
    setChosenCountry: () => {},
});

function GlobalContext({ children }: any) {
    const [countries, setCountries] = useState<countryType[]>([]);
    const [currentCountry, setCurrentCountry] = useState<countryType[]>();
    const [chosenCountry, setChosenCountry] = useState<string>("georgia");

    const allCountryRequest = async () => {
        await Api.sendCountryRequest("GET", setCountries);
    };

    useEffect(() => {
        allCountryRequest();
    }, []);

    return (
        <store.Provider
            value={{
                countries,
                setCountries,
                currentCountry,
                setCurrentCountry,
                chosenCountry,
                setChosenCountry,
            }}
        >
            {children}
        </store.Provider>
    );
}

export const useGlobalContext = () => useContext(store);

export default GlobalContext;
