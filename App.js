import React from "react"
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import theme from "./src/global/styles/theme";
import styles from "./src/global/styles/app";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColor} />
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
