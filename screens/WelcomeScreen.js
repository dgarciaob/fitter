import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();

export default function WelcomeScreen() {
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "425380237723-i4lc39k97es0o8nml0ugkj5vm8s08js9.apps.googleusercontent.com",
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      // aquí hago el fetch
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const user = await request.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (e) {
      console.log(e);
    }
  };

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    LufgaRegular: require("../assets/fonts/Lufga-Regular.otf"),
    LufgaBold: require("../assets/fonts/Lufga-Bold.otf"),
    LufgaExtraBold: require("../assets/fonts/Lufga-ExtraBold.otf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.primary, COLORS.secondary]}
    >
      <SafeAreaView onLayout={onLayout}>
        <View style={styles.container}>
          <Text style={styles.brandTitle}>fitter</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/hero-welcome.png")}
              style={styles.heroImage}
            />
          </View>
          <View>
            <Text style={styles.brandDescription}>
              Tu compañero diario en el seguimiento de calorías y macros{" "}
              <Text style={{ color: "#0D0760" }}>
                para tu salud y bienestar
              </Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <View style={styles.registerBtn}>
                <Text style={styles.btnText}>Comencemos</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
              }}
            >
              <Text style={styles.signInText}>Ya tienes una cuenta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signInTextRedirect}> Ingresa aquí</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
  brandTitle: {
    fontFamily: "LufgaExtraBold",
    fontSize: 48,
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
  brandDescription: {
    fontFamily: "LufgaBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  heroImage: {
    width: 300,
    height: 300,
  },
  registerBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    marginTop: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontFamily: "LufgaExtraBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  signInText: {
    fontFamily: "LufgaBold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  signInTextRedirect: {
    fontFamily: "LufgaBold",
    fontSize: 16,
    color: "#0D0760",
    textAlign: "center",
  },
});
