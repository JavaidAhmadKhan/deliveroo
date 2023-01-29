import { View, Text, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ResturantCard from "../components/ResturantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant Cards */}
        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="You Momos"
          rating={4.7}
          genre="Nepali"
          address="5th block kormangla"
          short_description="best momos in bangalore"
          dishes={[]}
          long={20}
          lat={10}
        />

        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="You Momos"
          rating={4.7}
          genre="Nepali"
          address="5th block kormangla"
          short_description="best momos in bangalore"
          dishes={[]}
          long={20}
          lat={10}
        />

        <ResturantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="You Momos"
          rating={4.7}
          genre="Nepali"
          address="5th block kormangla"
          short_description="best momos in bangalore"
          dishes={[]}
          long={20}
          lat={10}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
