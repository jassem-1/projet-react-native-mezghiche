import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function ContactScreen() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Your Email"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 16,
        }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Your Message"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          marginBottom: 16,
          height: 100,
        }}
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button title="Send" onPress={() => alert("Message Sent!")} />
    </View>
  );
}
