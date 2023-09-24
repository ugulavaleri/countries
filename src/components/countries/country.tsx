import { countryType } from "../../types/globaltTypes";

interface countryProps {
    country: countryType[];
}

function Country({ country }: countryProps) {
    const chosenCountry = country[0];
    const getCountryISO2 = require("country-iso-3-to-2");

    // convert alpha-3 country code into alpha-2
    function convertCountryCodesToNames(countryCodes: string[]) {
        if (!countryCodes) {
            return [];
        }
        const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
        const countryNames = countryCodes.map((code) => {
            try {
                const rame = getCountryISO2(code);
                return regionNames.of(rame);
            } catch (error) {
                return "Unknown";
            }
        });
        return countryNames.join(", ");
    }
    const countryNames = convertCountryCodesToNames(chosenCountry.borders);

    return (
        <div>
            <div className="countryWrapper">
                <h1>{chosenCountry?.name.common}</h1>
                <span>{chosenCountry?.flag}</span>
            </div>
            <div className="countryStatsWrapper">
                <div>
                    <h3>Capital</h3>
                    <p>{chosenCountry?.capital}</p>
                </div>
                <div>
                    <h3>Continent</h3>
                    <p>{chosenCountry?.continents}</p>
                </div>
                <div>
                    <h3>Currency</h3>
                    <p>
                        {Object.entries(chosenCountry.currencies)[0][1].name}{" "}
                        <span>
                            (
                            {
                                Object.entries(chosenCountry.currencies)[0][1]
                                    .symbol
                            }
                            )
                        </span>
                    </p>
                </div>
                <div>
                    <h3>Population</h3>
                    <p>{chosenCountry?.population.toLocaleString()}</p>
                </div>
                <div>
                    <h3>Region</h3>
                    <p>{chosenCountry?.region}</p>
                </div>

                <div>
                    <h3>Borders</h3>
                    <p>{countryNames}</p>
                </div>
            </div>
        </div>
    );
}

export default Country;
