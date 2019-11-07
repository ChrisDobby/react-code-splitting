import React from "react";
import "./App.css";
import DynamicComponent from "./DynamicComponent";
import ShowUtcFromFunc from "./ShowUtcFromFunc";

const DynamicImportComponent = DynamicComponent(() => import("./ShowUtc"));
const LazyComponent = React.lazy(() => import("./ShowUtc"));

function App() {
    const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
    return (
        <div className="App container">
            <React.Suspense fallback={<div>Loading component, please wait</div>}>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            type="button"
                            className={`nav-link${selectedTabIndex === 0 ? " active" : ""}`}
                            onClick={() => setSelectedTabIndex(0)}
                        >
                            Dynamic import
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className={`nav-link${selectedTabIndex === 1 ? " active" : ""}`}
                            onClick={() => setSelectedTabIndex(1)}
                        >
                            Suspense
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className={`nav-link${selectedTabIndex === 2 ? " active" : ""}`}
                            onClick={() => setSelectedTabIndex(2)}
                        >
                            Function
                        </button>
                    </li>
                </ul>
                {selectedTabIndex === 0 && <DynamicImportComponent title="From dynamic import" />}
                {selectedTabIndex === 1 && <LazyComponent title="From suspense" />}
                {selectedTabIndex === 2 && <ShowUtcFromFunc title="From function" />}
            </React.Suspense>
        </div>
    );
}

export default App;
