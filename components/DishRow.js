import { View, Text, TouchableOpacity } from "react-native";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
