import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ContactScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message Sent!");
    setEmail("");
    setMessage("");
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Contact me</Text>
      <TextInput
        placeholder="Your Email"
        className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm text-base text-gray-700"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Your Message"
        className="bg-white rounded-lg border border-gray-300 p-4 mb-6 shadow-sm text-base text-gray-700"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={6}
      />
      <TouchableOpacity
        onPress={handleSend}
        className="bg-blue-500 rounded-lg py-2 shadow-md"
      >
        <Text className="text-center text-white font-semibold text-lg">
          Send Message
        </Text>
      </TouchableOpacity>
    </View>
  );
}
