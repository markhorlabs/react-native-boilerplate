import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { MainNavigator } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContextProvider } from "./context/AppContext";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Loader from "./components/Loader";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1 }}>
        <Loader />
      </View>
    );
  } else
    return (
      <AppContextProvider>
        <SafeAreaProvider>
          <MainNavigator />
        </SafeAreaProvider>
      </AppContextProvider>
    );
}
