import React from "react";
import { View, Text, Image } from "react-native";

const Header = ({ darkMode }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
      <View>
        <Text style={{ fontSize: 14, color: darkMode ? "#bbb" : "#555" }}>Selamat Datang,</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: darkMode ? "#fff" : "#333" }}>Fitness Enthusiast</Text>
      </View>
      <Image source={{ uri: "https://i.pravatar.cc/150?img=4" }} style={{ width: 55, height: 55, borderRadius: 27.5 }} />
    </View>
  );
};

export default Header;
