import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  recetasDesayuno,
  recetasAlmuerzo,
  recetasSnacks,
  recetasBaratos,
} from "../constants/foodData";

export default function RecipesScreen() {
  const [modalVisible, setModalVisible] = useState(false);
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
      {/* Título & SearchBar de Recetas */}
      <View>
        <Text style={styles.recetasTitle}>Recetas</Text>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.firstNestedView}>
          <Ionicons
            name="ios-search"
            size={18}
            color="gray"
            style={styles.searchBarIcon}
          />
          <TextInput
            placeholder="Encuentra todas las recetas"
            style={styles.searchBarInput}
          />
        </View>
        <View style={styles.searchBarFilter}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            style={styles.modal}
          >
            <View style={styles.centeredView}>
              <View style={styles.mainFilterTitle}>
                <View style={styles.leftSide}>
                  <Ionicons
                    name="arrow-back-sharp"
                    size={24}
                    color="black"
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
                <View>
                  <Text style={styles.filtrosTitle}>Filtros</Text>
                </View>
                <View style={styles.rightSide}>
                  <TouchableOpacity>
                    <Text style={styles.filtrosTitleSecondary}>Borrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity>
            <Feather
              name="sliders"
              color="white"
              size={20}
              onPress={() => setModalVisible(true)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <View style={styles.mealContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.mealTitlesContainer}>Desayunos</Text>
            </View>
            <TouchableOpacity style={styles.seeAllTextContainer}>
              <Text style={styles.seeAllText}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 16,
              paddingLeft: 4,
              marginTop: 12,
            }}
          >
            {recetasDesayuno.map((receta, id) => {
              return (
                <TouchableWithoutFeedback key={receta.nombre + id}>
                  <View style={styles.recipeView}>
                    <Image source={receta.imagen} style={styles.recipeImage} />
                    <View style={styles.recipeInfo}>
                      <View style={styles.recipeTitleAndCals}>
                        <View>
                          <Text
                            numberOfLines={1}
                            style={styles.recipeTitleText}
                          >
                            {receta.nombre} {""}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: "gray" }}>
                            {"\u00B7"} {receta.calorías}kcal
                          </Text>
                        </View>
                      </View>
                      <Text style={{ color: "gray" }}>
                        {receta.carbohidratos}C {"\u00B7"} {receta.proteinas}P{" "}
                        {"\u00B7"} {receta.grasas}G
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.mealContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.mealTitlesContainer}>Almuerzos</Text>
            </View>
            <TouchableOpacity style={styles.seeAllTextContainer}>
              <Text style={styles.seeAllText}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 16,
              paddingLeft: 4,
              marginTop: 12,
            }}
          >
            {recetasAlmuerzo.map((receta, id) => {
              return (
                <TouchableWithoutFeedback key={receta.nombre + id}>
                  <View style={styles.recipeView}>
                    <Image source={receta.imagen} style={styles.recipeImage} />
                    <View style={styles.recipeInfo}>
                      <View style={styles.recipeTitleAndCals}>
                        <View>
                          <Text
                            numberOfLines={1}
                            style={styles.recipeTitleText}
                          >
                            {receta.nombre} {""}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: "gray" }}>
                            {"\u00B7"} {receta.calorías}kcal
                          </Text>
                        </View>
                      </View>
                      <Text style={{ color: "gray" }}>
                        {receta.carbohidratos}C {"\u00B7"} {receta.proteinas}P{" "}
                        {"\u00B7"} {receta.grasas}G
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.mealContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.mealTitlesContainer}>Snacks saludables</Text>
            </View>
            <TouchableOpacity style={styles.seeAllTextContainer}>
              <Text style={styles.seeAllText}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 16,
              paddingLeft: 4,
              marginTop: 12,
            }}
          >
            {recetasSnacks.map((receta, id) => {
              return (
                <TouchableWithoutFeedback key={receta.nombre + id}>
                  <View style={styles.recipeView}>
                    <Image source={receta.imagen} style={styles.recipeImage} />
                    <View style={styles.recipeInfo}>
                      <View style={styles.recipeTitleAndCals}>
                        <View>
                          <Text
                            numberOfLines={1}
                            style={styles.recipeTitleText}
                          >
                            {receta.nombre} {""}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: "gray" }}>
                            {"\u00B7"} {receta.calorías}kcal
                          </Text>
                        </View>
                      </View>
                      <Text style={{ color: "gray" }}>
                        {receta.carbohidratos}C {"\u00B7"} {receta.proteinas}P{" "}
                        {"\u00B7"} {receta.grasas}G
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.mealContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.mealTitlesContainer}>
                Cuidando el bolsillo
              </Text>
            </View>
            <TouchableOpacity style={styles.seeAllTextContainer}>
              <Text style={styles.seeAllText}>Ver Todos</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 16,
              paddingLeft: 4,
              marginTop: 12,
            }}
          >
            {recetasBaratos.map((receta, id) => {
              return (
                <TouchableWithoutFeedback key={receta.nombre + id}>
                  <View style={styles.recipeView}>
                    <Image source={receta.imagen} style={styles.recipeImage} />
                    <View style={styles.recipeInfo}>
                      <View style={styles.recipeTitleAndCals}>
                        <View>
                          <Text
                            numberOfLines={1}
                            style={styles.recipeTitleText}
                          >
                            {receta.nombre} {""}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: "gray", alignItems: "center" }}>
                            {"\u00B7"} {receta.calorías}kcal
                          </Text>
                        </View>
                      </View>
                      <Text style={{ color: "gray" }}>
                        {receta.carbohidratos}C {"\u00B7"} {receta.proteinas}P{" "}
                        {"\u00B7"} {receta.grasas}G
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  recetasTitle: {
    fontFamily: "LufgaExtraBold",
    fontSize: 28,
    marginLeft: 16,
    marginTop: 24,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    paddingBottom: 2,
    paddingleft: 4,
    paddingRight: 14,
    marginBottom: 16,
    marginTop: 12,
  },
  searchBarInput: {
    marginLeft: 4,
    flex: 1,
    paddingVertical: 6,
  },
  firstNestedView: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 3,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E6E8E6",
  },
  searchBarIcon: {
    marginLeft: 4,
  },
  searchBarFilter: {
    padding: 8,
    backgroundColor: "#4A2C82",
    borderRadius: 50,
    marginLeft: 8,
  },
  modal: {
    height: 200,
    width: 200,
  },
  centeredView: {
    flex: 1,
    marginTop: 80,
    height: 300,
    borderTopEndRadius: 12,
    borderColor: "gray",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainFilterTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filtrosTitle: {
    fontFamily: "LufgaExtraBold",
    fontSize: 18,
  },
  filtrosTitleSecondary: {
    fontFamily: "LufgaRegular",
    fontSize: 12,
  },
  leftSide: {
    marginLeft: 16,
  },
  rightSide: {
    marginRight: 16,
  },
  mealContainer: {
    marginLeft: 16,
    marginBottom: 48,
  },
  mealTitlesContainer: {
    fontFamily: "LufgaRegular",
    fontSize: 18,
  },
  seeAllText: {
    fontFamily: "LufgaRegular",
    fontSize: 12,
    color: "#4A2C82",
  },
  seeAllTextContainer: {
    marginRight: 16,
  },
  recipeView: {
    marginRight: 24,
    backgroundColor: "white",
    borderRadius: 24,
    shadowColor: "#BE7DF6",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Esto es para Android (simula shadow-lg)
    maxWidth: 240,
  },
  recipeImage: {
    height: 144,
    width: 240,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  recipeTitleText: {
    fontFamily: "LufgaRegular",
    alignItems: "center",
  },
  recipeInfo: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  recipeTitleAndCals: {
    flexDirection: "row",
  },
});
