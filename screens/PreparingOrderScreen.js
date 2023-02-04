import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-[#00CCBB] flex-1 justify-center items-center"
    >
      <Text>PreparingOrderScreen</Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
