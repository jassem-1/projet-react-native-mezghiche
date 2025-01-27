import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import blockExplorerImg from "../../assets/images/block.png";
import noMoreWarImg from "../../assets/images/nomore.png";
import rewardFactoryImg from "../../assets/images/Capture d’écran 2024-08-20 204208.png";
import royalEscalierImg from "../../assets/images/royal.png";
import etherscanCloneImg from "../../assets/images/ether.png";
import ecommerceHomeImg from "../../assets/images/ecomm.jpg";
import teamManagementImg from "../../assets/images/taskmanager.png";
import staticCryptoImg from "../../assets/images/static.png";
import eLearningPlatformImg from "../../assets/images/lms.png";
import personalPortfolioImg from "../../assets/images/porftoliojass.png";
import footballWeeklyImg from "../../assets/images/football.jpg";
import imen from "../../assets/images/imen.png";
import amine from "../../assets/images/amine.png";
import markitup from "../../assets/images/markitup.png";
import esprit from "../../assets/images/esprit.png";

import { ImageSourcePropType } from "react-native";

const projects: {
  id: string;
  title: string;
  description: string;
  imageUrl: ImageSourcePropType;
  date: string;
}[] = [
  {
    id: "1",
    title: "Custom Web Application for Amine Chebbi",
    description:
      "Collaborated with Amine Chebbi, a renowned Tunisian trading mentor, to develop a tailored web application...",
    imageUrl: amine, // Replace with an appropriate image URL or import
    date: "Dec 2024",
  },
  {
    id: "2",
    title: "MarkItUp - Client Collaboration Tool",
    description:
      "MarkItUp simplifies client collaboration by allowing secure access to project updates...",
    imageUrl: markitup, // Replace with an appropriate image URL or import
    date: "Nov 2024 - Dec 2024",
  },
  {
    id: "3",
    title: "Block Explorer Tokens",
    description:
      "A crypto dashboard displaying account details like net worth, holdings, recent transactions...",
    imageUrl: blockExplorerImg,
    date: "2024",
  },
  {
    id: "4",
    title: "No More War",
    description:
      "A charitable platform where users can donate cryptocurrency to various causes...",
    imageUrl: noMoreWarImg,
    date: "2024",
  },
  {
    id: "5",
    title: "Football Weekly",
    description:
      "A football web app that provides the latest news, team rankings, goal stats, and match predictions...",
    imageUrl: footballWeeklyImg,
    date: "2024",
  },
  {
    id: "6",
    title: "EtherScan Clone",
    description:
      "A block explorer featuring Ether and gas prices, user authentication via Supabase, and wallet login...",
    imageUrl: etherscanCloneImg,
    date: "2024",
  },
  {
    id: "7",
    title: "Ecommerce Home Page",
    description:
      "A sleek homepage for an e-commerce site featuring modern animations and sliding carousels...",
    imageUrl: ecommerceHomeImg,
    date: "2024",
  },
  {
    id: "8",
    title: "Royal Escalier",
    description:
      "A web app for a stairs company showcasing their projects with Framer Motion animations...",
    imageUrl: royalEscalierImg,
    date: "2024",
  },
  {
    id: "9",
    title: "Task Management",
    description:
      "A full-stack team management app built with React, Node.js, and MongoDB.",
    imageUrl: teamManagementImg,
    date: "2024",
  },
  {
    id: "10",
    title: "Static Crypto-Related Interface",
    description:
      "A static interface for crypto-related projects built with React and CSS.",
    imageUrl: staticCryptoImg,
    date: "2024",
  },
  {
    id: "11",
    title: "E-learning Platform",
    description:
      "A Learning Management System (LMS) where users can browse, purchase, and track courses...",
    imageUrl: eLearningPlatformImg,
    date: "2024",
  },
  {
    id: "12",
    title: "ESPRIT Management System",
    description:
      "An RDI management system for ESPRIT, built with Spring Boot and React...",
    imageUrl: esprit,
    date: "2024",
  },
  {
    id: "13",
    title: "Personal Portfolio",
    description:
      "This site showcases my journey as a web developer, highlighting two years of freelancing, internships, and academic projects...",
    imageUrl: personalPortfolioImg,
    date: "2024",
  },
  {
    id: "14",
    title: "Imen Cherif Webpage",
    description:
      "A webpage showcasing Imen Cherif’s journey as a singer-songwriter, model, and actress...",
    imageUrl: imen,
    date: "2024",
  },
  {
    id: "15",
    title: "Reward Factory",
    description:
      "A landing page for a crypto-related project with complex animations.",
    imageUrl: rewardFactoryImg,
    date: "2024",
  },
];

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
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Image
              source={item.imageUrl} // Remove the uri property and use the imported image directly
              style={{
                width: 50,
                height: 50,
                borderRadius: 8,
                marginRight: 16,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: "gray" }}>{item.date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
