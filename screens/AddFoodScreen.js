import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SelectList } from "react-native-dropdown-select-list";
import { ADD_FOOD, addFood, addToList, useCalories } from "../context";
import { foodData } from "../constants/foodData";

export default function AddFoodScreen() {
  const [medida, setMedida] = useState("");
  const [alimento, setAlimento] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [comida, setComida] = useState("");
  const { state, dispatch } = useCalories();

  const onPress = () => {
    const medidaMap = foodDataMap[medida];
    const { calorias, carbohidratos, proteinas, grasas } =
      foodData[alimento][medidaMap];
    dispatch(addFood(calorias));
    dispatch(
      addToList({
        comida: convertToComida(comida),
        nombre: alimento,
        calorias,
        carbohidratos,
        proteinas,
        grasas,
      })
    );
  };

  const data = [
    { key: "1", value: "Unidades" },
    { key: "2", value: "Gramos" },
  ];

  const convertToComida = (comida) => {
    if (comida === "M. Mañana") {
      return "mMañana";
    } else return comida.toLowerCase();
  };

  const dataComida = [
    { key: "1", value: "Desayuno" },
    { key: "2", value: "M. Mañana" },
    { key: "3", value: "Almuerzo" },
    { key: "4", value: "Snack" },
    { key: "5", value: "Cena" },
  ];

  const dataFood = [
    { key: "1", value: "Pechuga de Pollo" },
    { key: "2", value: "Avena" },
    { key: "3", value: "Yema de Huevo" },
    { key: "4", value: "Clara de Huevo" },
    { key: "5", value: "Platano" },
    { key: "6", value: "Manzana" },
    { key: "7", value: "Carne Molida" },
    { key: "8", value: "Atun" },
    { key: "9", value: "Palta" },
    { key: "10", value: "Pescado" },
    { key: "11", value: "Arroz Integral" },
    { key: "12", value: "Lentejas" },
    { key: "13", value: "Frijoles" },
    { key: "14", value: "Mani" },
    { key: "15", value: "Sandia" },
    { key: "16", value: "Mango" },
    { key: "17", value: "Lechuga" },
    { key: "18", value: "Mantequilla de Maní" },
    { key: "19", value: "Hamburguesa" },
    { key: "20", value: "Fideos" },
    { key: "21", value: "Fresa" },
    { key: "22", value: "Brocoli" },
    { key: "23", value: "Papa" },
    { key: "24", value: "Camote" },
    { key: "25", value: "Mandarina" },
    { key: "26", value: "Chocolate" },
    { key: "27", value: "Arándanos" },
    { key: "28", value: "Garbanzo" },
    { key: "29", value: "Bisteck" },
  ];

  const foodDataMap = {
    Unidades: "porUnidad",
    Gramos: "porGramos",
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
    <SafeAreaView style={styles.container} onLayout={onLayout}>
      <StatusBar barStyle="dark" />
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back-outline" size={24} color="#4A2C82" />
        </TouchableOpacity>
        <Text style={styles.text}>Agregar Alimentos</Text>
      </View>
      <View style={styles.foodInputContainer}>
        <View style={styles.foodContainer}>
          <Text style={styles.textSecondary}>Alimento</Text>
          <SelectList
            setSelected={(val) => setAlimento(val)}
            data={dataFood}
            save="value"
            placeholder="Busca un alimento"
            search={true}
            fontFamily="LufgaRegular"
            boxStyles={{
              width: 342,
              marginTop: 8,
              borderColor: "#B5B5B5",
              paddingLeft: 12,
              paddingVertical: 8,
            }}
            dropdownStyles={{ width: 342, borderColor: "#B5B5B5" }}
          />
        </View>
        <View style={styles.foodContainerMiddle}>
          <View style={styles.foodContainer2}>
            <Text style={styles.textSecondary}>Medida</Text>
            <SelectList
              setSelected={(val) => setMedida(val)}
              data={data}
              save="value"
              placeholder="Medida"
              search={false}
              fontFamily="LufgaRegular"
              boxStyles={{
                width: 110,
                marginTop: 8,
                borderColor: "#B5B5B5",
                paddingLeft: 12,
                paddingVertical: 8,
              }}
              dropdownStyles={{ width: 110, borderColor: "#B5B5B5" }}
            />
          </View>
          <View style={styles.foodContainer3}>
            <Text style={styles.textSecondary}>Cant</Text>
            <TextInput
              placeholder="Cant"
              value={cantidad}
              onChangeText={(cant) => setCantidad(cant)}
              style={styles.input2}
            />
          </View>
          <View style={styles.foodContainer4}>
            <Text style={styles.textSecondary}>Comida</Text>
            <SelectList
              setSelected={(val) => setComida(val)}
              data={dataComida}
              save="value"
              placeholder="Comida"
              search={false}
              fontFamily="LufgaRegular"
              boxStyles={{
                width: 120,
                marginTop: 8,
                borderColor: "#B5B5B5",
                paddingLeft: 12,
                paddingVertical: 8,
              }}
              dropdownStyles={{ width: 120, borderColor: "#B5B5B5" }}
            />
          </View>
        </View>
      </View>
      <View style={styles.addFoodBtnView}>
        <TouchableOpacity
          onPress={onPress}
          title="Agregar Alimento"
          style={styles.addFoodBtn}
        >
          <Text style={{ color: "white" }}>Agregar Alimento</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  btnView: {
    marginLeft: 24,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginRight: 66,
  },
  text: {
    fontFamily: "LufgaBold",
    fontSize: 18,
    textAlign: "center",
  },
  textSecondary: {
    fontFamily: "LufgaRegular",
    fontSize: 15,
  },
  input: {
    marginTop: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B5B5B5",
    padding: 8,
    paddingLeft: 12,
    width: 300,
    fontFamily: "LufgaRegular",
  },
  input2: {
    marginTop: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#B5B5B5",
    padding: 8,
    paddingLeft: 12,
    width: 60,
    fontFamily: "LufgaRegular",
  },
  foodContainer: {
    marginLeft: 24,
    marginTop: 40,
    flexDirection: "column",
  },
  foodContainerMiddle: {
    marginLeft: 24,
    marginTop: 40,
    flexDirection: "row",
  },
  foodContainer2: {
    flexDirection: "column",
  },
  foodContainer3: {
    flexDirection: "column",
    marginLeft: 26,
  },
  foodContainer4: {
    flexDirection: "column",
    marginLeft: 26,
  },
  addFoodBtnView: {
    marginTop: 24,
  },
  addFoodBtn: {
    backgroundColor: "#4A2C82",
    borderRadius: 10,
    borderWidth: "none",
    width: 342,
    padding: 12,
    alignItems: "center",
    alignSelf: "center",
  },
});
