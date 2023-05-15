import { SafeAreaView, StatusBar } from "react-native";
import theme from "./src/global/styles/theme";
import styles from "./src/global/styles/app";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColor} />
      <Home />
    </SafeAreaView>
  );
}
