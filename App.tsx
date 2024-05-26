import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View,StyleSheet, Platform,StatusBar, ScrollView } from "react-native";
import fonts from "./config/fonts";

import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider style={styles.AndroidSafeArea}>
      <StatusBar/>
      <Navigation />
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})