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
      "Collaborated with Amine Chebbi, a renowned Tunisian trading mentor, to develop a tailored web application. The app streamlines user requests for joining VIP groups, asking trading questions, and requesting educational resources. It features a custom admin dashboard that allows Amine to efficiently manage, filter, and track requests in real-time, improving operational workflows.",
    imageUrl: amine,
    date: "Dec 2024",
  },
  {
    id: "2",
    title: "MarkItUp - Client Collaboration Tool",
    description:
      "MarkItUp simplifies client collaboration by allowing secure access to project updates, where clients can annotate visuals and provide feedback directly. It streamlines communication and bridges the gap between presentations and actionable feedback.",
    imageUrl: markitup,
    date: "Nov 2024 - Dec 2024",
  },
  {
    id: "3",
    title: "Block Explorer Tokens",
    description:
      "A crypto dashboard displaying account details like net worth, holdings, recent transactions, and token data (prices, top holders, trading charts). Built using web3 libraries like Coinbase, Moralis, and Alchemy.",
    imageUrl: blockExplorerImg,
    date: "2024",
  },
  {
    id: "4",
    title: "No More War",
    description:
      "A charitable platform where users can donate cryptocurrency to various causes. NoMoreWar ensures transparency by allowing the community to vote on which charities receive donations, empowering users to make an impact with their contributions.",
    imageUrl: noMoreWarImg,
    date: "2024",
  },
  {
    id: "5",
    title: "Football Weekly",
    description:
      "A football web app that provides the latest news, team rankings, goal stats, and match predictions. Users can stay updated on their favorite teams, track performance stats, and view data-driven predictions for upcoming matches.",
    imageUrl: footballWeeklyImg,
    date: "2024",
  },
  {
    id: "6",
    title: "EtherScan Clone",
    description:
      "A block explorer featuring Ether and gas prices, user authentication via Supabase, and wallet login. It includes search functionality for addresses, transactions, and tokens, plus details like Ether balance, token transfers, and supply data. Built with Next.js, Tailwind CSS, and Etherscan API, focusing on performance and clean design.",
    imageUrl: etherscanCloneImg,
    date: "2024",
  },
  {
    id: "7",
    title: "Ecommerce Home Page",
    description:
      "A sleek homepage for an e-commerce site featuring modern animations and sliding carousels, built with Tailwind CSS and Framer Motion for a dynamic user experience.",
    imageUrl: ecommerceHomeImg,
    date: "2024",
  },
  {
    id: "8",
    title: "Royal Escalier",
    description:
      "A web app for a stairs company showcasing their projects with Framer Motion animations. It includes an admin page for managing projects add, edit, or delete powered by Firebase.",
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
      "A Learning Management System (LMS) where users can browse, purchase, and track courses. Teachers can create, manage, and reorder chapters with drag-and-drop.",
    imageUrl: eLearningPlatformImg,
    date: "2024",
  },
  {
    id: "12",
    title: "ESPRIT Management System",
    description:
      "An RDI management system for ESPRIT, built with Spring Boot and React, enabling project tracking, team management, and real-time collaboration, with dynamic reports and a user-friendly interface using Material UI and Tailwind CSS.",
    imageUrl: esprit,
    date: "2024",
  },
  {
    id: "13",
    title: "Personal Portfolio",
    description:
      "This site showcases my journey as a web developer, highlighting two years of freelancing, internships, and academic projects.",
    imageUrl: personalPortfolioImg,
    date: "2024",
  },
  {
    id: "14",
    title: "Imen Cherif Webpage",
    description:
      "A Webpage showcasing Imen Cherif’s journey as a singer-songwriter, model, and actress including a portfolio of projects, events, music video gallery, and real-time social media stats. Built with modern UI/UX for a seamless fan experience.",
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
              source={item.imageUrl}
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
