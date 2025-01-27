import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type DiplomaIcon = "school" | "calculate" | "engineering" | "science";

const diplomas: { id: string; title: string; icon: DiplomaIcon }[] = [
  { id: "1", title: "Baccalaureate", icon: "school" },
  { id: "2", title: "Preparatory Classes", icon: "calculate" },
  { id: "3", title: "Engineering Degree", icon: "engineering" },
  { id: "4", title: "Master's Degree", icon: "science" },
];

export default function DiplomasScreen({ navigation }: any) {
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
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <MaterialIcons
              name={item.icon}
              size={24}
              color="black"
              style={{ marginRight: 16 }}
            />
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
