import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

export default function Page() {
  // This tells if the page can show the main part yet.
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait a little before showing the main page.
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000);
    // Stop the timer if this page goes away.
    return () => clearTimeout(timer);
  }, []);

  // Show the welcome screen while the timer is still going.
  if (!isReady) {
    return (
      <View style={styles.splashContainer}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12963/12963327.png' }} 
          style={styles.splashImage} 
        />
        <Text style={styles.splashTitle}>Ma Garderie</Text>
        <ActivityIndicator size="large" color="#ff6b6b" style={styles.loader} />
      </View>
    );
  }

  // Show the main page after the wait is done.
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Welcome to the main page!</Text>
    </View>
  );
}

// These styles set the look and place of the page parts.
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff9f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  splashTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
  },
});