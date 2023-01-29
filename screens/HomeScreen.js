import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="bg-white"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        marginTop: 50,
      }}
    >
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <AntDesign name="down" size={20} color="#00CCBB" />
          </Text>
        </View>
        <AntDesign name="user" size={24} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <EvilIcons name="search" size={30} color="gray" />
          <TextInput
            placeholder="Resturants and cuisines"
            keyboardType="default"
          />
        </View>
        <Ionicons name="ios-filter" size={30} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}

        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's has been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Why not support your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
