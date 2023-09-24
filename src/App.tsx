import Tabs from "./components/additionalStats/tabs";
import Countries from "./components/countries/countries";
import { useGlobalContext } from "./store/useGlobalContext";

function App() {
    const { currentCountry } = useGlobalContext();
    return (
        <div className="container">
            <Countries />
            {currentCountry && <Tabs currentCountry={currentCountry} />}
        </div>
    );
}

export default App;
