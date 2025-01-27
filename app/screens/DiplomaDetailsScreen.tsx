import React from "react";
import { Text, View } from "react-native";

import { RouteProp } from "@react-navigation/native";

type DiplomaDetailsRouteProp = RouteProp<
  { params: { diploma: { title: string } } },
  "params"
>;

export default function DiplomaDetails({
  route,
}: {
  route: DiplomaDetailsRouteProp;
}) {
  const { diploma } = route.params;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 24 }}>{diploma.title}</Text>
      <Text>Details about the diploma...</Text>
    </View>
  );
}
