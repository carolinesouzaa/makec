import React from "react";
import { StatusBar, SafeAreaView, ScrollView } from "react-native";
import Sacola from "./src/pages/Sacola";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    MontserratItalic: Montserrat_400Regular_Italic,
  });

  if (!fontCarregada) {
    return null;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Sacola />
      </ScrollView>
    </SafeAreaView>
  );
}
