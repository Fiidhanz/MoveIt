import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

const workouts = [
  { id: "1", title: "Full-Body Workout", duration: "15 min", icon: "weight-lifter" },
  { id: "2", title: "Stretching Guide", duration: "10 min", icon: "human-handsup" },
  { id: "3", title: "Daily Routine", duration: "12 min", icon: "calendar-check" },
  { id: "4", title: "Desk Workout", duration: "5 min", icon: "desk" },
];

const categories = [
  { id: "1", title: "Cardio", icon: "run" },
  { id: "2", title: "Yoga", icon: "yoga" },
  { id: "3", title: "Strength", icon: "dumbbell" },
  { id: "4", title: "Stretching", icon: "human-handsup" },
];

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) =>
    workout.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient colors={["#ff7e5f", "#ff5f6d"]} style={styles.header}>
        <Text style={styles.headerText}>MoveIt</Text>
        <Icon name="account-circle" size={32} color="#fff" />
      </LinearGradient>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari workout..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* Scrollable Content */}
      <FlatList
        ListHeaderComponent={
          <>
            {/* Progress Harian */}
            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>Workout Hari Ini</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: "70%" }]} />
              </View>
              <Text style={styles.progressPercentage}>70% selesai</Text>
            </View>

            {/* Kategori Workout */}
            <Text style={styles.sectionTitle}>Kategori Workout</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
              {categories.map((category) => (
                <TouchableOpacity key={category.id} style={styles.categoryCard}>
                  <Icon name={category.icon} size={28} color="#ff5f6d" />
                  <Text style={styles.categoryText}>{category.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Motivasi */}
            <Text style={styles.motivation}>Jangan Menyerah, Tetap Bergerak! 💪</Text>

            {/* Header Workout */}
            <View style={styles.workoutHeader}>
              <Text style={styles.sectionTitle}>Daftar Workout</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.workoutCard}>
            <Icon name={item.icon} size={40} color="#ff5f6d" />
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{item.title}</Text>
              <Text style={styles.workoutDuration}>{item.duration}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity style={styles.fab}>
        <Icon name="play-circle" size={50} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: { padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 10, margin: 20, elevation: 4 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  motivation: { fontSize: 16, textAlign: "center", color: "#555", marginBottom: 10 },
  progressContainer: { padding: 20, backgroundColor: "#fff", borderRadius: 10, marginHorizontal: 20, elevation: 4 },
  progressText: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  progressBar: { height: 8, backgroundColor: "#ddd", borderRadius: 5, overflow: "hidden", marginVertical: 5 },
  progressFill: { height: "100%", backgroundColor: "#ff5f6d" },
  progressPercentage: { fontSize: 14, color: "#777", textAlign: "right" },
  categoryScroll: { paddingHorizontal: 20, marginVertical: 10 },
  categoryCard: { backgroundColor: "#fff", padding: 10, borderRadius: 8, alignItems: "center", justifyContent: "center", marginRight: 10, elevation: 3, width: 80 },
  categoryText: { fontSize: 12, marginTop: 5, color: "#555", textAlign: "center" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginHorizontal: 20, marginTop: 10 },
  workoutHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, marginVertical: 10 },
  seeAll: { fontSize: 14, color: "#ff5f6d" },
  workoutCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 12, marginVertical: 8, marginHorizontal: 20, elevation: 5 },
  workoutInfo: { flex: 1, marginLeft: 15 },
  workoutTitle: { fontSize: 16, fontWeight: "bold" },
  workoutDuration: { fontSize: 14, color: "#777" },
  fab: { position: "absolute", bottom: 20, right: 20, backgroundColor: "#ff5f6d", borderRadius: 50, padding: 15, elevation: 6 },
});

export default HomeScreen;
