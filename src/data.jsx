// src/data.jsx
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // ✅ Tambahkan Import Icon
export const menuItems = [
  { id: "1", title: "Home", icon: "home" },
  { id: "2", title: "Workouts", icon: "dumbbell" },
  { id: "3", title: "Favorites", icon: "heart" },
  { id: "4", title: "Schedule", icon: "calendar" },
  { id: "5", title: "Challenge", icon: "fire" },
  { id: "6", title: "Profile", icon: "account" },
];
export const dailyChallenges = [
  "🔥 10 Push-ups",
  "🏃‍♂️ 5K Running",
  "💪 50 Sit-ups",
  "🧘‍♂️ 15 Min Yoga",
  "🏋️‍♂️ 20 Squats",
];

export const workouts = [
  { id: "1", title: "Full-Body Workout", duration: "15 min", icon: "weight-lifter", image: "https://i.pinimg.com/736x/bd/52/f0/bd52f06eaead020dee141a8592141ac4.jpg" },
  { id: "2", title: "Stretching Guide", duration: "10 min", icon: "human-handsup", image: "https://i.pinimg.com/736x/21/b9/02/21b902c3b2daf1a3cd200a0e9a437803.jpg" },
  { id: "3", title: "Daily Routine", duration: "12 min", icon: "calendar-check", image: "https://i.pinimg.com/736x/7a/e9/e9/7ae9e977e30f3fb3ce402bffefdb8b60.jpg" },
  { id: "4", title: "Desk Workout", duration: "5 min", icon: "desk", image: "https://i.pinimg.com/736x/64/17/14/641714a87cd3193623f973c88548fb51.jpg" },
  { id: "5", title: "HIIT Training", duration: "20 min", icon: "fire", image: "https://i.pinimg.com/736x/f4/5b/89/f45b896ea65b9db3d04c999410977653.jpg" },
  { id: "6", title: "Pilates Session", duration: "18 min", icon: "meditation", image: "https://i.pinimg.com/736x/f8/0b/5c/f80b5c47a2bf030f580d71ddd1c456c1.jpg" },
];