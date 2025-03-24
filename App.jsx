import React, { useState, useCallback, useEffect, useMemo } from "react";
import { 
  View, Text, TextInput, Switch, FlatList, TouchableOpacity, ScrollView 
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { menuItems, workouts, dailyChallenges } from "./src/data.jsx";
import { ItemSmall, ListHorizontal, Header } from "./src/components/index.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [scheduledWorkouts, setScheduledWorkouts] = useState([]);
  const [todayChallenge, setTodayChallenge] = useState("");

  useEffect(() => {
    const dayIndex = new Date().getDay();
    setTodayChallenge(dailyChallenges[dayIndex % dailyChallenges.length]);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  const filteredWorkouts = useMemo(() => 
    workouts.filter((workout) =>
      workout.title.toLowerCase().includes(search.toLowerCase())
    ), [search, workouts]);

  return (
    <View style={{ flex: 1, backgroundColor: darkMode ? "#0a1f44" : "#e3f2fd", padding: 10 }}>
      <Header darkMode={darkMode} />

      {/* Search Bar */}
      <View style={{
  backgroundColor: darkMode ? "#1c2a48" : "#ffffff", 
  paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, marginBottom: 10, 
  flexDirection: "row", alignItems: "center", shadowColor: "#000",
  shadowOpacity: 0.1, shadowRadius: 4, shadowOffset: { width: 0, height: 2 },
  elevation: 3
}}>
  <Icon name="magnify" size={20} color="#007bff" style={{ marginRight: 8 }} />
  <TextInput 
    placeholder="Cari workout..." 
    value={search} 
    onChangeText={setSearch} 
    style={{ flex: 1, paddingVertical: 6, fontSize: 14, color: darkMode ? "#fff" : "#333" }} 
    placeholderTextColor={darkMode ? "#aaa" : "#666"}
  />
</View>

      {/* Dark Mode Toggle */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <Text style={{ fontSize: 14, color: darkMode ? "#fff" : "#333" }}>🌙 Mode Gelap: {darkMode ? "Aktif" : "Nonaktif"}</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      
      {/* Menu */}
      <ScrollView 
  horizontal 
  showsHorizontalScrollIndicator={false} 
  style={{ marginBottom: 15, paddingBottom: 10 }} // Tambahkan jarak bawah
>
  {menuItems.map((menu) => (
    <TouchableOpacity 
      key={menu.id} 
      style={{ alignItems: "center", marginRight: 12, width: 68, marginBottom: 10 }} // Tambahkan margin bawah
    >
      <View style={{
        width: 60, height: 60, borderRadius: 10, backgroundColor: darkMode ? "#0056b3" : "#007bff",
        alignItems: "center", justifyContent: "center", shadowColor: "#000",
        shadowOpacity: 0.1, shadowRadius: 3, shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}>
        <Icon name={menu.icon} size={28} color="#fff" />
      </View>
      <Text 
        style={{ 
          fontSize: 1, fontWeight: "500", 
          color: darkMode ? "#fff" : "#333", 
          marginTop: 6, textAlign: "center", width: 40 
        }} 
        numberOfLines={1}
      >
        {menu.title}
      </Text>
    </TouchableOpacity>
  ))}
</ScrollView>


      
      {/* Tantangan Hari Ini */}
      <View style={{ backgroundColor: darkMode ? "#0056b3" : "#007bff", padding: 15, borderRadius: 15, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5, color: "#fff" }}>🎯 Tantangan Hari Ini</Text>
        <Text style={{ fontSize: 14, color: "#fff" }}>{todayChallenge}</Text>
      </View>
      
      {/* Statistik Workout */}
      <View style={{ backgroundColor: darkMode ? "#1c2a48" : "#e3f2fd", padding: 15, borderRadius: 15, marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10, color: darkMode ? "#80d4ff" : "#007bff" }}>📊 Statistik Workout</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: darkMode ? "#80d4ff" : "#007bff" }}>{completedWorkouts}</Text>
            <Text style={{ fontSize: 12, color: darkMode ? "#bbb" : "#555" }}>Workout Selesai</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: darkMode ? "#80d4ff" : "#007bff" }}>
              {workouts
                .filter((workout) => favorites.includes(workout.id))
                .reduce((total, workout) => total + parseInt(workout.duration), 0)} min
            </Text>
            <Text style={{ fontSize: 12, color: darkMode ? "#bbb" : "#555" }}>Total Durasi</Text>
          </View>
        </View>
        <ProgressBar progress={completedWorkouts / workouts.length} width={null} height={10} color="#007bff" style={{ marginTop: 10 }} />
        <Text style={{ textAlign: "center", marginTop: 5, color: darkMode ? "#fff" : "#333" }}>Progres: {completedWorkouts}/{workouts.length} Workout</Text>
      </View>

      {/* List Workouts */}
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemSmall item={item} toggleFavorite={toggleFavorite} isFavorite={favorites.includes(item.id)} darkMode={darkMode} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default App;
