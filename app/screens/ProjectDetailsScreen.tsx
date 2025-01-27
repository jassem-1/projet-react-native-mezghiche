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
        imageUrl: ImageSourcePropType; // Use imageUrl instead of image
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
        alignItems: "center",
        padding: 16,
      }}
    >
      {/* Use project.imageUrl here */}
      <Image
        source={project.imageUrl}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
        {project.title}
      </Text>
      <Text style={{ fontSize: 16, color: "gray", marginBottom: 16 }}>
        {project.date}
      </Text>
      <Text style={{ fontSize: 16, textAlign: "justify" }}>
        {project.description}
      </Text>
    </ScrollView>
  );
}
