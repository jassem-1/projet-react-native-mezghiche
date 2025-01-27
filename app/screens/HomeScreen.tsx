import { Text, View } from "react-native";
import Animated, {
  FadeIn,
  FadeInUp,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

const me = require("../../assets/images/me-min.jpg");

export default function HomeScreen() {
  // Create animated style for the card
  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(0, {
            damping: 12,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-8">
      {/* Animated card container */}
      <Animated.View
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm"
        style={[cardStyle]}
        entering={FadeInUp.springify().damping(12).stiffness(90)}
      >
        {/* Animated image */}
        <Animated.Image
          source={me}
          className="w-28 h-28 rounded-full mx-auto mb-6 border-4 border-gray-200 shadow-sm"
          entering={FadeIn.duration(800).springify()}
        />
        <Animated.Text
          className="text-2xl font-bold text-gray-800 text-center mb-4"
          entering={FadeIn.duration(700).springify()}
        >
          Jassem Souey
        </Animated.Text>
        {/* Animated details */}
        <Animated.View entering={FadeInUp.duration(600).springify().delay(400)}>
          <Text className="text-base text-gray-600">
            <Text className="font-semibold">Prénom:</Text> Jassem
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-semibold">Email:</Text> jassem@example.com
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-semibold">Adresse:</Text> Tunis, Tunisia
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-semibold">Téléphone:</Text> +216 12345678
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
