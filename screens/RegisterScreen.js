import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function RegisterScreen() {
  const [userInfo, setUserInfo] = useState(null);

  // clientID para usar auth
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId:
      "425380237723-i4lc39k97es0o8nml0ugkj5vm8s08js9.apps.googleusercontent.com",
  });

  // cuando se actualice response, se activa la funcion handleSignInWithGoogle
  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
        navigation.navigate("Main");
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
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (e) {
      console.log(e);
    }
  };

  const navigation = useNavigation();
  const [secureText1, setSecureText1] = useState(true);
  const [secureText2, setSecureText2] = useState(true);
  const [openEye1, setOpenEye1] = useState(true);
  const [openEye2, setOpenEye2] = useState(true);
  const [form, setForm] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
    contraseñaRepe: "",
  });

  const handleFormChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  function handleSecureText1() {
    setSecureText1(!secureText1);
    setOpenEye1(!openEye1);
  }

  function handleSecureText2() {
    setSecureText2(!secureText2);
    setOpenEye2(!openEye2);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.brandTitle}>fitter</Text>
        <Text style={styles.registerText}>Crea tu cuenta</Text>
        <Text style={styles.registerSecondaryText}>
          ¡Bienvenido! Llena tus datos para continuar
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          name="correo"
          placeholder="Correo"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={handleFormChange}
        />
        <TextInput
          name="nombre"
          placeholder="Nombre"
          style={styles.input}
          onChangeText={handleFormChange}
        />
        <TextInput
          name="contraseña"
          placeholder="Contraseña"
          secureTextEntry={secureText1}
          style={styles.passwordInput}
          onChangeText={handleFormChange}
        />
        <TouchableOpacity onPress={handleSecureText1}>
          <Ionicons
            name={openEye1 ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={22}
            color="#929995"
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
        <TextInput
          name="contraseñaRepe"
          placeholder="Confirmar Contraseña"
          secureTextEntry={secureText2}
          style={styles.passwordInput}
          onChangeText={handleFormChange}
        />
        <TouchableOpacity onPress={handleSecureText2}>
          <Ionicons
            name={openEye2 ? "ios-eye-outline" : "ios-eye-off-outline"}
            size={22}
            color="#929995"
            style={styles.passwordIcon}
          />
        </TouchableOpacity>
      </View>

      <View>
        {/* Boton de registro */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <View style={styles.registerBtn}>
              <Text style={styles.btnText}>Regístrate</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            marginLeft: 15,
            marginRight: 14,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "#EBEBEB",
              borderWidth: 1,
              height: 0,
              width: 80,
              marginRight: 16,
            }}
          ></View>
          <Text style={{ fontFamily: "LufgaRegular", color: "#929995" }}>
            o registrate con
          </Text>
          <View
            style={{
              borderColor: "#EBEBEB",
              borderWidth: 1,
              height: 0,
              width: 80,
              marginLeft: 16,
            }}
          ></View>
        </View>

        {/* Botones de ingreso con Google, FaceBook, Apple */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 24,
            marginLeft: 14,
            marginRight: 14,
            justifyContent: "space-between",
          }}
        >
          <View style={styles.googleBtn}>
            <TouchableOpacity
              onPress={() => {
                promptAsync();
              }}
            >
              <Image
                source={require("../assets/images/google-logo.png")}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.googleBtn}>
            <TouchableOpacity
              onPress={() => {
                promptAsync();
              }}
            >
              <Image
                source={require("../assets/images/fb-logo.png")}
                style={styles.logoImage2}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.googleBtn}>
            <TouchableOpacity
              onPress={() => {
                promptAsync();
              }}
            >
              <Image
                source={require("../assets/images/apple-logo.png")}
                style={styles.logoImage3}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 32,
  },
  brandTitle: {
    fontFamily: "LufgaExtraBold",
    fontSize: 48,
    color: "#0D0760",
    textAlign: "center",
    marginTop: 40,
  },
  registerText: {
    fontFamily: "LufgaRegular",
    fontSize: 24,
    color: "#0D0760",
    textAlign: "center",
    marginTop: 48,
  },
  registerSecondaryText: {
    fontFamily: "LufgaRegular",
    fontSize: 14,
    color: "#929995",
    textAlign: "center",
    marginTop: 8,
  },
  inputContainer: {
    paddingLeft: 14,
    marginTop: 24,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 16,
    borderRadius: 12,
    width: 300,
    backgroundColor: "#EBEBEB",
    fontFamily: "LufgaRegular",
  },
  passwordInput: {
    position: "relative",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 16,
    borderRadius: 12,
    width: 300,
    backgroundColor: "#EBEBEB",
    fontFamily: "LufgaRegular",
  },
  passwordIcon: {
    position: "absolute",
    right: 22,
    bottom: 9,
  },
  registerBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#1F1F1F",
    borderRadius: 10,
    marginTop: 56,
    marginLeft: 14,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  btnText: {
    fontFamily: "LufgaExtraBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  googleBtn: {
    backgroundColor: "#FFFFFF", // Un color rojo característico de Google.
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  logoImage2: {
    width: 38,
    height: 38,
  },
  logoImage3: {
    width: 30,
    height: 30,
  },
});
