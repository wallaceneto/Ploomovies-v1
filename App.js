import { View, StatusBar } from 'react-native';
import theme from './src/global/styles/theme';
import styles from './src/global/styles/app';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColor} />
      <Home />
    </View>
  );
}
