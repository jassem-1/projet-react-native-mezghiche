import React from "react";
import { Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";

type ProjectDetailsRouteProp = RouteProp<
  { params: { project: { title: string } } },
  "params"
>;

export default function ProjectDetails({
  route,
}: {
  route: ProjectDetailsRouteProp;
}) {
  const { project } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 24 }}>{project.title}</Text>
      <Text>Details about the project...</Text>
    </View>
  );
}
