import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ensi from "../../assets/images/ensi.jpg";
import ipeit from "../../assets/images/ipeit.jpg";
import lpbt from "../../assets/images/lpbt.jpeg";

type DiplomaIcon = "school" | "calculate" | "engineering" | "science";

const diplomas: {
  id: string;
  title: string;
  icon: DiplomaIcon;
  image: any; // Change this to `any` to handle both local and remote images
  etablissement: string;
  moyenne: string;
  rang: string;
}[] = [
  {
    id: "1",
    title: "Baccalaureate",
    icon: "school",
    image: lpbt, // Local image
    etablissement: "Lycée Pilote Bourguiba",
    moyenne: "15.5/20",
    rang: "unknown",
  },
  {
    id: "2",
    title: "Preparatory Classes",
    icon: "calculate",
    image: ipeit, // Local image
    etablissement: "IPEIT",
    moyenne: "10.0/20",
    rang: "290",
  },
  {
    id: "3",
    title: "Engineering Degree",
    icon: "engineering",
    image: ensi, // Local image
    etablissement: "ENSI",
    moyenne: "12/20",
    rang: "unknown",
  },
];

export default function DiplomasScreen({ navigation }: any) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {diplomas.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("DiplomaDetails", {
              diploma: item,
              title: item.title,
            })
          }
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            marginBottom: 16,
            padding: 16,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={item.image}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 16,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 2 }}>
                {item.etablissement}
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                {`Moyenne: ${item.moyenne}, Rang: ${item.rang}`}
              </Text>
            </View>
            <MaterialIcons name={item.icon} size={24} color="black" />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
