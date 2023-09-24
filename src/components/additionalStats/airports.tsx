import { useEffect, useState } from "react";
import Api from "../../api/api";
import { airportType, countryType } from "../../types/globaltTypes";

interface AirportsProps {
    currentCountry: countryType[];
}

function Airports({ currentCountry }: AirportsProps) {
    const [airports, setAirports] = useState<airportType[]>();

    const sendAirportRequest = async () => {
        await Api.sendAirportRequest(
            "GET",
            setAirports,
            currentCountry[0].altSpellings[0]
        );
    };

    useEffect(() => {
        sendAirportRequest();
    }, [currentCountry]);

    const airportsList = airports?.map(
        (airport) =>
            airport.iata && (
                <div>
                    <p>
                        {airport.iata} - {airport.name} ({airport.region})
                    </p>
                </div>
            )
    );

    return (
        <div className="airportContainer">
            {airportsList?.length !== 0 ? (
                airportsList
            ) : (
                <h4>There are no airports found!</h4>
            )}
        </div>
    );
}

export default Airports;
