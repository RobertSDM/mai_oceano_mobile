import { Text, View } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigator = useNavigation();

  return (
    <View className="w-full h-20 flex justify-center items-center">
      <View
        onTouchStart={() => {
          navigator.navigate("AboutProj");
        }}
      >
        <MaterialCommunityIcons name="jellyfish" size={24} color="black" />
      </View>
      <View
        onTouchStart={() => {
          navigator.navigate("AboutRobot");
        }}
      >
        <FontAwesome5 name="fish" size={24} color="black" />
      </View>
      <View
        onTouchStart={() => {
          navigator.navigate("Images");
        }}
      >
        <Entypo name="image" size={24} color="black" />
      </View>
    </View>
  );
};

export default Navbar;
