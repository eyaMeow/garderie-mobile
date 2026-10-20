import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

// This shows the activities page from the menu.
export default function ActivitiesPage() {
  const navigation = useNavigation<{ openDrawer: () => void }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Ma Garderie</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.pageContainer}>
        <Text style={styles.pageText}>Section des Activités de la Garderie</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  appBar: { height: 60, backgroundColor: "#ff6b6b", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 },
  appBarTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  pageContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  pageText: { fontSize: 18, fontWeight: "bold", color: "#333" },
});
