import { SafeAreaView, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  });

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-[#00CCBB] flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/tenor.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-80 h-80 rounded-lg"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
