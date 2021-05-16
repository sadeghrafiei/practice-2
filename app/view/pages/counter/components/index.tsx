import React from "react";
import { Provider } from "react-redux";

import store from "../index";

import Counter from "./counter";

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;
