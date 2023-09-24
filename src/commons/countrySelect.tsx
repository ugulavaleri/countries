import { Dispatch, SetStateAction, useEffect } from "react";
import { useGlobalContext } from "../store/useGlobalContext";

interface CountrySelectProps {
    getValue: Dispatch<SetStateAction<string>>;
    className: string;
}

function CountrySelect({ getValue, className }: CountrySelectProps) {
    const { countries } = useGlobalContext();

    //     console.log(countries[0].name.common);

    //     useEffect(() => {
    //         //   if (countries) {
    //         getValue(countries[0].name.common);
    //         //   }
    //     }, []);

    return (
        <select
            onChange={(e) => getValue(e.target.value)}
            className={className}
        >
            {countries?.map((country) => (
                <option value={country?.name.common} key={country?.name.common}>
                    {country?.name.common}
                </option>
            ))}
        </select>
    );
}

export default CountrySelect;
