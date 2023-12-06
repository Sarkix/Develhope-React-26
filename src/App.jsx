import React, { StrictMode } from "react";
import FocusableInput from "./FocusableInput";
import MountMessage from "./MountMessage";
import Counter from "./Counter";

function App() {
    return (
        <div>
            <h1>My React App</h1>
            <FocusableInput />
            <StrictMode>
                <MountMessage />
            </StrictMode>
            <Counter initialVal={0} incrementAmount={1} />
        </div>
    );
}

export default App;
