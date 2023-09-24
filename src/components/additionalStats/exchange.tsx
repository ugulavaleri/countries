import { useEffect, useState } from "react";
import Api from "../../api/api";
import CountrySelect from "../../commons/countrySelect";
import { useGlobalContext } from "../../store/useGlobalContext";

function Exchange() {
    const [exchangeCountry, setExchangeCountry] = useState("");
    const [inputExchange, setInputExchange] = useState(0);
    const [outputExchange, setOutputExchange] = useState<any>();
    const [rame, setRame] = useState("");
    const { countries, currentCountry } = useGlobalContext();

    let currencySymbol1 = null;
    let currencySymbol2 = null;

    const checkCurrencyCountry = countries.find(
        (country) => country.name.common === exchangeCountry
    );

    if (checkCurrencyCountry) {
        currencySymbol2 = Object.entries(checkCurrencyCountry.currencies)[0][1]
            .symbol;
    }

    if (currentCountry) {
        currencySymbol1 = Object.entries(currentCountry[0].currencies)[0][1]
            .symbol;
    } else {
        currencySymbol1 = "";
    }

    const getCurrency = async () => {
        if (checkCurrencyCountry && currentCountry) {
            Api.sendCurrencyRequest(
                setOutputExchange,
                Object.entries(currentCountry[0].currencies)[0][0],
                Object.entries(checkCurrencyCountry.currencies)[0][0]
            );
        }
    };

    useEffect(() => {
        getCurrency();
    }, [exchangeCountry]);

    return (
        <div>
            <CountrySelect
                getValue={setExchangeCountry}
                className={"exchangeStyles"}
            />
            <div className="inputWrapper">
                <div className="exchangeInput">
                    <input
                        type="number"
                        value={inputExchange}
                        onChange={(e) =>
                            setInputExchange(parseFloat(e.target.value))
                        }
                    />
                    <span className="currencySymbol">{currencySymbol1}</span>
                </div>
                <h2 className="equalityIcon">=</h2>
                <div className="exchangeInput">
                    <input
                        type="text"
                        disabled
                        value={
                            outputExchange
                                ? (
                                      inputExchange * outputExchange.result
                                  ).toFixed(2)
                                : 0
                        }
                    />
                    <span className="currencySymbol">{currencySymbol2}</span>
                </div>
            </div>
        </div>
    );
}

export default Exchange;
