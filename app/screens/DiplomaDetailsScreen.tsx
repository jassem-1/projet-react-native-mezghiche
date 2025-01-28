import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";

type DiplomaDetailsRouteProp = RouteProp<
  {
    params: {
      diploma: {
        title: string;
        image: any;
        etablissement: string;
        moyenne: string;
        rang: string;
      };
    };
  },
  "params"
>;

export default function DiplomaDetails({
  route,
  navigation,
}: {
  route: DiplomaDetailsRouteProp;
  navigation: any; // Add `navigation` prop to dynamically update the header
}) {
  const { diploma } = route.params;

  // Dynamically set the navigation header title
  useEffect(() => {
    navigation.setOptions({ title: diploma.title });
  }, [navigation, diploma.title]);
  return (
    <View className="flex-1 items-center text-black justify-center  p-4">
      <Image
        source={diploma.image}
        className="w-[250px] h-[200px] rounded-lg mb-4"
      />
      <View className="flex flex-col justify-center items-start p-6">
        <Text className="text-2xl font-bold mb-2 text-center">
          {diploma.title}
        </Text>
        <Text className="text-lg  mb-1">
          Établissement: {diploma.etablissement}
        </Text>
        <Text className="text-lg mb-1">Moyenne: {diploma.moyenne}</Text>
        <Text className="text-lg mb-1">Rang: {diploma.rang}</Text>
      </View>
    </View>
  );
}
