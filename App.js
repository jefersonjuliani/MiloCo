import React from "react";
import { StatusBar } from "react-native";
import { Store } from "./src/redux/store";
import { Provider } from "react-redux";

import Routes from "./src/routes/routes";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <StatusBar backgroundColor="#515151" barStyle="white-content" />

        <Routes />
      </Provider>
    </>
  );
}
