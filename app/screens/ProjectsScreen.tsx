import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const projects = [
  { id: "1", title: "Cryptocurrency Platform" },
  { id: "2", title: "Real Estate Platform" },
  { id: "3", title: "Learning Management System" },
];

import { NavigationProp } from "@react-navigation/native";

type ProjectsScreenProps = {
  navigation: NavigationProp<any>;
};

export default function ProjectsScreen({ navigation }: ProjectsScreenProps) {
  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ProjectDetails", { project: item })
          }
        >
          <View
            style={{
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
