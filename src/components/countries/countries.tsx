import { useEffect, useState } from "react";
import Api from "../../api/api";
import CountrySelect from "../../commons/countrySelect";
import { useGlobalContext } from "../../store/useGlobalContext";
import Country from "./country";

function Countries() {
    const {
        currentCountry,
        setCurrentCountry,
        chosenCountry,
        setChosenCountry,
        setCountries,
    } = useGlobalContext();

    // const allCountryRequest = async () => {
    //     await Api.sendCountryRequest("GET", setCountries);
    // };

    const chosenCountryRequest = async () => {
        await Api.sendCountryRequestForOne(
            "GET",
            setCurrentCountry,
            chosenCountry
        );
    };

    // useEffect(() => {
    //     allCountryRequest();
    // }, []);

    useEffect(() => {
        chosenCountryRequest();
    }, [chosenCountry]);

    if (!currentCountry) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <CountrySelect
                getValue={setChosenCountry}
                className={"mainSelectStyles"}
            />
            <Country country={currentCountry} />
        </div>
    );
}

export default Countries;
