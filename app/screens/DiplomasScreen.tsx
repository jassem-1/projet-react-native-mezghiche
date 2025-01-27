import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const diplomas = [
  { id: "1", title: "Baccalaureate" },
  { id: "2", title: "Preparatory Classes" },
  { id: "3", title: "Engineering Degree" },
  { id: "4", title: "Master's Degree" },
];

import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};

export default function DiplomasScreen({ navigation }: Props) {
  return (
    <FlatList
      data={diplomas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DiplomaDetails", { diploma: item })
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
