import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    Alert.alert(
      "Form Data",
      `Name: ${formData.name}\nEmail: ${formData.email}`
    );
  };

  return (
    <View className="flex w-full justify-center items-center max-w-80">
      <Text className="text-xl font-bold mb-6"> Form</Text>

      {/* Name Input Section */}
      <View className="w-full mb-4">
        <Text className="text-gray-700 text-base font-medium mb-2">Name:</Text>
        <TextInput
          className="w-full border border-gray-300 rounded-lg p-3 bg-white"
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>

      {/* Email Input Section */}
      <View className="w-full mb-6">
        <Text className="text-gray-700 text-base font-medium mb-2">Email:</Text>
        <TextInput
          className="w-full border border-gray-300 rounded-lg p-3 bg-white"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        className="w-full bg-blue-500 py-3 rounded-lg"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center font-bold text-lg">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
