import React, { Component } from 'react';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import AppNavigator from "./router/navigators/AppNavigator";
import { configureStore } from "./store";

const appStore = configureStore();

class App extends Component {

  render() {
    return (
        <Provider store={appStore}>
            <AppNavigator />
        </Provider>
    );
  }
}

export default App;
