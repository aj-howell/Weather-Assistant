import { Text, StyleSheet, SafeAreaView } from "react-native";
// import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
    // const [loaded, error] = useFonts({
    //     'JosefinSans_700Bold'),
    //   });
    //   useEffect(() => {
    //     if (loaded || error) {
    //       SplashScreen.hideAsync();
    //     }
    //   }, [loaded, error]);
    
    //   if (!loaded && !error) {
    //     return null;
    //   }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appName}>Recycling Assistant</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2EFEA',
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontFamily: 'JosefinSans_700Bold',
    fontSize: 30,
    color: '#186838',
  }
})
