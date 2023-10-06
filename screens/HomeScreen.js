import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import CalorieSummary from "../components/GoalSummary";
import ProgressBar from "../components/ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { foodData } from "../constants/foodData";
import { useCalories } from "../context";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const navigation = useNavigation();
  const realProgress = 50;
  const { state } = useCalories();

  const [isBreakfastContentVisible, setIsBreakfastContentVisible] =
    useState(true);

  const [isMiddleMorningContentVisible, setIsMiddleMorningContentVisible] =
    useState(true);

  const [isLunchContentVisible, setIsLunchContentVisible] = useState(true);

  const [isSnackContentVisible, setIsSnackContentVisible] = useState(true);

  const [isDinnerContentVisible, setIsDinnerContentVisible] = useState(true);

  function handleBreakfastVisibility() {
    setIsBreakfastContentVisible(!isBreakfastContentVisible);
  }

  function handleMiddleMorningVisibility() {
    setIsMiddleMorningContentVisible(!isMiddleMorningContentVisible);
  }

  function handleLunchVisibility() {
    setIsLunchContentVisible(!isLunchContentVisible);
  }

  function handleSnackVisibility() {
    setIsSnackContentVisible(!isSnackContentVisible);
  }

  function handleDinnerVisibility() {
    setIsDinnerContentVisible(!isDinnerContentVisible);
  }

  const [fontsLoaded] = useFonts({
    LufgaRegular: require("../assets/fonts/Lufga-Regular.otf"),
    LufgaBold: require("../assets/fonts/Lufga-Bold.otf"),
    LufgaExtraBold: require("../assets/fonts/Lufga-ExtraBold.otf"),
  });

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Oct",
      "Nov",
      "Dic",
    ];
    const formattedDate = `${days[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    }`;
    setCurrentDate(formattedDate);
  }, []);

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
    <View>
      {/* Sección de resumen: Calorias y Macros */}
      <View style={styles.backgroundView} onLayout={onLayout}>
        {/* Fecha y Calendario */}
        <StatusBar barStyle="light-content" />
        <View style={styles.datesView}>
          <View>
            <Text style={styles.dateText}>{currentDate}</Text>
          </View>
          <View style={styles.iconsStyle}>
            <TouchableOpacity
              style={{ marginRight: 24 }}
              onPress={() => navigation.navigate("AddFood")}
            >
              <Entypo name="plus" size={24} color="#F78B28" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={24}
                color="#F78B28"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Resumen Calorias */}
        <View style={styles.summaryView}>
          <CalorieSummary />
        </View>
        {/* Resumen Macros */}
        <View style={styles.macroSummaryView}>
          <View style={styles.macroView}>
            <View>
              <Text style={styles.macrosText}>Carbs</Text>
            </View>
            <View>
              <ProgressBar progress={realProgress} />
            </View>
            <View>
              <Text style={styles.macrosGrams}>{41} / 201g</Text>
            </View>
          </View>

          <View style={styles.macroView}>
            <View>
              <Text style={styles.macrosText}>Protein</Text>
            </View>
            <View>
              <ProgressBar progress={realProgress} />
            </View>
            <View>
              <Text style={styles.macrosGrams}>88 / 171g</Text>
            </View>
          </View>

          <View style={styles.macroView}>
            <View>
              <Text style={styles.macrosText}>Fat</Text>
            </View>
            <View>
              <ProgressBar progress={realProgress} />
            </View>
            <View>
              <Text style={styles.macrosGrams}>32 / 90g</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Sección de Comidas */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        style={styles.scrollViewMeals}
      >
        <View style={styles.mealCategory}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.mealTitle}>Desayuno</Text>
            <TouchableOpacity onPress={handleBreakfastVisibility}>
              <Entypo
                style={styles.icon}
                name={
                  isBreakfastContentVisible
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isBreakfastContentVisible &&
            state.desayuno.map((comida, idx) => (
              <View key={comida.nombre + idx} style={styles.mealInfo}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.imageBackground}>
                    <Image
                      source={require("../assets/images/egg-final.png")}
                      style={styles.mealPhoto}
                    />
                  </View>
                  <View style={styles.mealCompleteInfo}>
                    <Text style={styles.mealText}>{comida.nombre}</Text>
                    <Text style={styles.mealTextSecondary}>
                      {comida.carbohidratos}C {"\u00B7"} {comida.proteinas}P{" "}
                      {"\u00B7"} {comida.grasas}G
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.mealText}>{comida.calorias}Kcal</Text>
                </View>
              </View>
            ))}
        </View>

        <View style={styles.mealCategory}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.mealTitle}>Media Mañana</Text>
            <TouchableOpacity onPress={handleMiddleMorningVisibility}>
              <Entypo
                style={styles.icon}
                name={
                  isMiddleMorningContentVisible
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isMiddleMorningContentVisible &&
            state.mMañana.map((comida, idx) => {
              return (
                <View key={comida.nombre + idx} style={styles.mealInfo}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.imageBackground}>
                      <Image
                        source={require("../assets/images/egg-final.png")}
                        style={styles.mealPhoto}
                      />
                    </View>
                    <View style={styles.mealCompleteInfo}>
                      <Text style={styles.mealText}>{comida.nombre}</Text>
                      <Text style={styles.mealTextSecondary}>
                        {comida.carbohidratos}C {"\u00B7"} {comida.proteinas}P{" "}
                        {"\u00B7"} {comida.grasas}G
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.mealText}>{comida.calorias}Kcal</Text>
                  </View>
                </View>
              );
            })}
        </View>

        <View style={styles.mealCategory}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.mealTitle}>Almuerzo</Text>
            <TouchableOpacity onPress={handleLunchVisibility}>
              <Entypo
                style={styles.icon}
                name={
                  isLunchContentVisible
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isLunchContentVisible &&
            state.almuerzo.map((comida, idx) => {
              return (
                <View key={comida.nombre + idx} style={styles.mealInfo}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.imageBackground}>
                      <Image
                        source={require("../assets/images/egg-final.png")}
                        style={styles.mealPhoto}
                      />
                    </View>
                    <View style={styles.mealCompleteInfo}>
                      <Text style={styles.mealText}>{comida.nombre}</Text>
                      <Text style={styles.mealTextSecondary}>
                        {comida.carbohidratos}C {"\u00B7"} {comida.proteinas}P{" "}
                        {"\u00B7"} {comida.grasas}G
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.mealText}>{comida.calorias}Kcal</Text>
                  </View>
                </View>
              );
            })}
        </View>

        <View style={styles.mealCategory}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.mealTitle}>Snack</Text>
            <TouchableOpacity onPress={handleSnackVisibility}>
              <Entypo
                style={styles.icon}
                name={
                  isSnackContentVisible
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isSnackContentVisible &&
            state.snack.map((comida, idx) => {
              return (
                <View key={comida.nombre + idx} style={styles.mealInfo}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.imageBackground}>
                      <Image
                        source={require("../assets/images/egg-final.png")}
                        style={styles.mealPhoto}
                      />
                    </View>
                    <View style={styles.mealCompleteInfo}>
                      <Text style={styles.mealText}>{comida.nombre}</Text>
                      <Text style={styles.mealTextSecondary}>
                        {comida.carbohidratos}C {"\u00B7"} {comida.proteinas}P{" "}
                        {"\u00B7"} {comida.grasas}G
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.mealText}>{comida.calorias}Kcal</Text>
                  </View>
                </View>
              );
            })}
        </View>

        <View style={styles.mealCategory}>
          <View style={styles.titleAndIcon}>
            <Text style={styles.mealTitle}>Cena</Text>
            <TouchableOpacity onPress={handleDinnerVisibility}>
              <Entypo
                style={styles.icon}
                name={
                  isDinnerContentVisible
                    ? "chevron-small-up"
                    : "chevron-small-down"
                }
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          {isDinnerContentVisible &&
            state.cena.map((comida, idx) => {
              return (
                <View key={comida.nombre + idx} style={styles.mealInfo}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.imageBackground}>
                      <Image
                        source={require("../assets/images/egg-final.png")}
                        style={styles.mealPhoto}
                      />
                    </View>
                    <View style={styles.mealCompleteInfo}>
                      <Text style={styles.mealText}>{comida.nombre}</Text>
                      <Text style={styles.mealTextSecondary}>
                        {comida.carbohidratos}C {"\u00B7"} {comida.proteinas}P{" "}
                        {"\u00B7"} {comida.grasas}G
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.mealText}>{comida.calorias}Kcal</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    position: "relative",
    backgroundColor: "#4A2C82",
    height: 250,
    width: "100%",
  },
  iconsStyle: {
    flexDirection: "row",
  },
  datesView: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 56,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontFamily: "LufgaExtraBold",
    fontSize: 24,
    color: "#F78B28",
  },
  summaryView: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginTop: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  macroSummaryView: {
    position: "absolute",
    top: 230,
    left: 24,
    right: 24,
    width: 340,
    height: 100,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1,
  },
  macroView: {
    flexDirection: "column",
    alignItems: "center",
  },
  macrosText: {
    color: "black",
    fontFamily: "LufgaRegular",
    marginBottom: 8,
  },
  macrosGrams: {
    color: "black",
    fontFamily: "LufgaRegular",
    marginTop: 8,
  },
  scrollViewMeals: {
    marginTop: 100,
    marginLeft: 24,
    marginBottom: 300,
  },
  mealCategory: {
    flexDirection: "column",
    marginBottom: 40,
  },
  mealTitle: {
    color: "black",
    fontFamily: "LufgaExtraBold",
  },
  mealText: {
    color: "black",
    fontFamily: "LufgaRegular",
  },
  mealCalText: {
    color: "black",
    fontFamily: "LufgaRegular",
    position: "absolute", // Posición absoluta
    right: 0, // Alineado a la derecha
    paddingRight: 16, // Padding de 16px a la derecha
  },
  mealTextSecondary: {
    color: "#B5B5B5",
    fontFamily: "LufgaRegular",
  },
  mealInfo: {
    height: 100,
    width: 340,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    padding: 16,
    justifyContent: "space-between",
  },
  imageBackground: {
    padding: 8,
    backgroundColor: "#EBEBEB",
    borderRadius: 9999,
    marginRight: 12,
  },
  mealPhoto: {
    width: 30,
    height: 30,
  },
  mealCompleteInfo: {
    marginRight: 0,
  },
  titleAndIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 24,
  },
});
