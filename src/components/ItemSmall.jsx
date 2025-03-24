// src/components/ItemSmall.jsx
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ItemSmall = ({ item, toggleFavorite, isFavorite }) => (
  <TouchableOpacity style={{ flexDirection: "row", padding: 10, backgroundColor: "#fff", margin: 5, borderRadius: 10 }}>
    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 10 }} />
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
      <Text>{item.duration}</Text>
    </View>
    <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
      <Icon name={isFavorite ? "heart" : "heart-outline"} size={24} color="#007bff" />
    </TouchableOpacity>
  </TouchableOpacity>
);

export default ItemSmall;