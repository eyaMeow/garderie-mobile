import { Drawer } from "expo-router/drawer";

// This sets up the pages that show in the side menu.
export default function RootLayout() {
  return (
    <Drawer
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#ff6b6b",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Accueil" }} />
      <Drawer.Screen name="activities" options={{ title: "Activités" }} />
      <Drawer.Screen name="about" options={{ title: "À propos" }} />
    </Drawer>
  );
}
