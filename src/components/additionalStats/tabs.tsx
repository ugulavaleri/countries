import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { countryType } from "../../types/globaltTypes";
import Airports from "./airports";
import Exchange from "./exchange";

interface tabsProps {
    currentCountry: countryType[];
}

function Tabs({ currentCountry }: tabsProps) {
    return (
        <>
            <nav style={{ marginTop: "70px" }}>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        CURRENCY EXCHANGE
                    </button>
                    <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        AIRPORTS
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <h1 style={{ margin: "20px 0" }}>Currency Exchange</h1>
                    <Exchange />
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                >
                    <h1 style={{ margin: "20px 0" }}>Airports</h1>
                    <Airports currentCountry={currentCountry} />
                </div>
            </div>
        </>
    );
}

export default Tabs;
