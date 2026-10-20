import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, ListRenderItem } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

// This list has the activities shown on the page.
const ACTIVITES = [
  { id: 1, titre: "Dessin et coloriage", description: "Développement de la créativité", icone: "🎨" },
  { id: 2, titre: "Jeux éducatifs", description: "Apprentissage par le jeu", icone: "🧩" },
  { id: 3, titre: "Musique et chansons", description: "Éveil musical des enfants", icone: "🎵" },
  { id: 4, titre: "Lecture de contes", description: "Découverte des histoires", icone: "📚" },
  { id: 5, titre: "Activités sportives", description: "Développement de la motricité", icone: "⚽" }
];

// This shows the list of activities on the home page.
export default function Page() {
  // This lets the menu button open the drawer.
  const navigation = useNavigation<{ openDrawer: () => void }>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // This says if the page is ready to show.
  const [isReady, setIsReady] = useState(false);

  // This waits three seconds, then shows the page.
  useEffect(() => {
    const splashTimer = setTimeout(() => setIsReady(true), 3000);
    return () => {
      clearTimeout(splashTimer);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  // This shows a short message after a tap.
  const showToast = (message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(message);
    toastTimer.current = setTimeout(() => setToastMessage(null), 2500);
  };

  // This shows a loading screen while the page is not ready.
  if (!isReady) {
    return (
      <View style={styles.splashContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12963/12963327.png' }} style={styles.splashImage} />
        <Text style={styles.splashTitle}>Ma Garderie</Text>
        <ActivityIndicator size="large" color="#ff6b6b" style={styles.loader} />
      </View>
    );
  }

  // This makes one card for each activity.
  const renderItem: ListRenderItem<(typeof ACTIVITES)[number]> = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => showToast(item.titre)}
    >
      <Text style={styles.cardIcon}>{item.icone}</Text>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.titre}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Ma Garderie</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Activities List */}
      <FlatList
        data={ACTIVITES}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => showToast("Nouvelle activité")}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
      {toastMessage && (
        <View accessibilityRole="alert" style={styles.toast}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// These styles set the colors, sizes, and places for the page parts.
const styles = StyleSheet.create({
  splashContainer: { flex: 1, backgroundColor: '#fff9f0', alignItems: 'center', justifyContent: 'center' },
  splashImage: { width: 120, height: 120, marginBottom: 20 },
  splashTitle: { fontSize: 28, fontWeight: 'bold', color: '#ff6b6b', marginBottom: 20 },
  loader: { marginTop: 10 },
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  appBar: { height: 60, backgroundColor: '#ff6b6b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  appBarTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  listContainer: { padding: 16 },
  card: { backgroundColor: '#fff', flexDirection: 'row', padding: 16, borderRadius: 10, marginBottom: 12, alignItems: 'center', elevation: 2 },
  cardIcon: { fontSize: 32, marginRight: 16 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cardDescription: { fontSize: 14, color: '#666', marginTop: 4 },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#ff6b6b', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4 },
  toast: { position: 'absolute', bottom: 88, alignSelf: 'center', backgroundColor: '#333', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 24, elevation: 5 },
  toastText: { color: '#fff', fontSize: 16 }
});