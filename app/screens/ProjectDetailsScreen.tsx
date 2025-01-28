import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { RouteProp } from "@react-navigation/native";

type ProjectDetailsRouteProp = RouteProp<
  {
    params: {
      project: {
        title: string;
        date: string;
        description: string;
        imageUrl: ImageSourcePropType;
      };
    };
  },
  "params"
>;

export default function ProjectDetails({
  route,
}: {
  route: ProjectDetailsRouteProp;
}) {
  const { project } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#f9fafb", // Light background
        padding: 16,
      }}
    >
      <View className="w-full rounded-lg shadow-md bg-white">
        {/* Project Image */}
        <Image source={project.imageUrl} className="w-full h-48 rounded-t-lg" />
        {/* Project Details */}
        <View className="p-6">
          <Text className="text-2xl font-bold text-gray-800 mb-2">
            {project.title}
          </Text>
          <Text className="text-sm text-gray-500 mb-4">{project.date}</Text>
          <Text className="text-base text-gray-700 leading-relaxed">
            {project.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
