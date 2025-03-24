// src/components/ListHorizontal.jsx
import React from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ListHorizontal = ({ items }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
    
    {items.map((menu) => (
      <View key={menu.id} style={{ marginRight: 15 }}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Icon name={menu.icon} size={28} color="#007bff" />
          <Text>{menu.title}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
);

export default ListHorizontal;