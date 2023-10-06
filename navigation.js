import React, { useEffect, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import DashboardScreen from "./screens/DashboardScreen";
import RecipesScreen from "./screens/RecipesScreen";
import AddFoodScreen from "./screens/AddFoodScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import {
  MaterialIcons,
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { CaloriesProvider } from "./context";

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function TabNavigator() {
  const [fontsLoaded] = useFonts({
    LufgaRegular: require("../fitter/assets/fonts/Lufga-Regular.otf"),
    LufgaBold: require("../fitter/assets/fonts/Lufga-Regular.otf"),
    LufgaExtraBold: require("../fitter/assets/fonts/Lufga-Regular.otf"),
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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="home"
                  size={20}
                  color={focused ? "#4A2C82" : "#B5B5B5"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: focused ? "LufgaExtraBold" : "LufgaRegular",
                    color: focused ? "#4A2C82" : "#B5B5B5",
                  }}
                >
                  Diario
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Entypo
                  name="bar-graph"
                  size={20}
                  color={focused ? "#4A2C82" : "#B5B5B5"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: focused ? "LufgaExtraBold" : "LufgaRegular",
                    color: focused ? "#4A2C82" : "#B5B5B5",
                  }}
                >
                  Dashboard
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Log"
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <SimpleLineIcons
                  name="notebook"
                  size={18}
                  color={focused ? "#4A2C82" : "#B5B5B5"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: focused ? "LufgaExtraBold" : "LufgaRegular",
                    color: focused ? "#4A2C82" : "#B5B5B5",
                    marginTop: 3,
                  }}
                >
                  Recetas
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="account"
                  size={21}
                  color={focused ? "#4A2C82" : "#B5B5B5"}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: focused ? "LufgaExtraBold" : "LufgaRegular",
                    color: focused ? "#4A2C82" : "#B5B5B5",
                  }}
                >
                  Cuenta
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <CaloriesProvider>
      <NavigationContainer>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{ headerShown: false }}
          initialRouteName="Welcome"
        >
          <RootStack.Screen name="Welcome" component={WelcomeScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Main" component={TabNavigator} />
          <RootStack.Screen name="AddFood" component={AddFoodScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </CaloriesProvider>
  );
}
