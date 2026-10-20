import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Page() {
  // This says if the page is ready to show.
  const [isReady, setIsReady] = useState(false);

  // This waits three seconds, then shows the page.
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

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

  // This is the main page with its title, content, and add button.
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity><Ionicons name="menu" size={24} color="#fff" /></TouchableOpacity>
        <Text style={styles.appBarTitle}>Ma Garderie</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholderText}>Activities space</Text>
      </View>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// These styles set the colors, sizes, and places for the page parts.
const styles = StyleSheet.create({
  splashContainer: { flex: 1, backgroundColor: '#fff9f0', alignItems: 'center', justifyContent: 'center' },
  splashImage: { width: 120, height: 120, marginBottom: 20 },
  splashTitle: { fontSize: 28, fontWeight: 'bold', color: '#ff6b6b', marginBottom: 20 },
  loader: { marginTop: 10 },
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  appBar: { height: 60, backgroundColor: '#ff6b6b', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 },
  appBarTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  placeholderText: { fontSize: 16, color: '#666' },
  fab: { position: 'absolute', right: 20, bottom: 20, backgroundColor: '#ff6b6b', width: 56, height: 56, borderRadius: 28, alignItems: 'center', justifyContent: 'center', elevation: 4 }
});