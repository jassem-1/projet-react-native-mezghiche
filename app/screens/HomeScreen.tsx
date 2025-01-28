import { Text, View, TouchableOpacity, Linking } from "react-native";
import Animated, {
  FadeIn,
  FadeInUp,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { FontAwesome, Feather } from "@expo/vector-icons";

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

  // Function to handle social media link press
  const handleSocialMediaPress = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

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

        {/* Bio Section */}
        <Animated.View entering={FadeInUp.duration(600).springify().delay(400)}>
          <Text className="text-base text-gray-600 text-center mb-4">
            Hi, I'm Jassem, a passionate software developer from Tunisia. I love
            building mobile and web applications that solve real-world problems.
          </Text>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View
          className="mt-4"
          entering={FadeInUp.duration(600).springify().delay(600)}
        >
          <Text className="text-lg font-bold text-gray-800 mb-2">Skills</Text>
          <View className="flex-row flex-wrap">
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              React
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Next.js
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Angular
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Node.js
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Express
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Spring Boot
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              HTML
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              CSS
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              Tailwind CSS
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              MongoDB
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              PostgreSQL
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              MySQL
            </Text>

            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              JavaScript
            </Text>
            <Text className="text-base text-gray-600 bg-gray-100 rounded-full px-4 py-2 m-1">
              TypeScript
            </Text>
          </View>
        </Animated.View>

        {/* Social Media Links */}
        <Animated.View
          className="mt-6 flex flex-col justify-center items-center"
          entering={FadeInUp.duration(600).springify().delay(800)}
        >
          <Text className="text-lg font-bold text-gray-800 mb-2">
            Let's Connect
          </Text>
          <View className="flex-row justify-between px-6 py-1 flex gap-6 border rounded-full w-2/3">
            <TouchableOpacity
              onPress={() =>
                handleSocialMediaPress("mailto:soueyjassem24@gmail.com")
              }
            >
              <FontAwesome name="envelope" size={24} color="#0077B5" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleSocialMediaPress(
                  "https://www.linkedin.com/in/jassem-souey-16b951278/"
                )
              }
            >
              <FontAwesome name="linkedin" size={24} color="#0077B5" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleSocialMediaPress("https://github.com/jassem-1")
              }
            >
              <FontAwesome name="github" size={24} color="#333" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleSocialMediaPress("https://jassem-portfolio.netlify.app")
              }
            >
              <FontAwesome name="globe" size={24} color="#0077B5" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Call-to-Action Button */}
        <Animated.View
          className="mt-6"
          entering={FadeInUp.duration(600).springify().delay(1000)}
        ></Animated.View>
      </Animated.View>
    </View>
  );
}
