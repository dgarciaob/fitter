// CalorieSummary.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { foodData } from "../constants/foodData";
import { useCalories } from "../context";

export default function CalorieSummary() {
  const { state } = useCalories();

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.secondaryValue}>{state.consumedCalories}</Text>
        <Text style={styles.subtitles}>Consumidas</Text>
      </View>
      <View style={styles.middleSide}>
        <Text style={styles.summaryValue}>{state.remainingCalories}</Text>
        <Text style={styles.subtitles}>Restantes</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.secondaryValue}>{state.burnedCalories}</Text>
        <Text style={styles.subtitles}>Quemadas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: 80,
  },
  summaryValue: {
    fontFamily: "LufgaExtraBold",
    fontSize: 24,
    color: "#F78B28",
    marginBottom: 10,
  },
  secondaryValue: {
    fontFamily: "LufgaExtraBold",
    fontSize: 24,
    color: "#F78B28",
    marginBottom: 10,
  },
  leftSide: {
    marginLeft: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  middleSide: {
    flexDirection: "column",
    alignItems: "center",
  },
  rightSide: {
    marginRight: 16,
    flexDirection: "column",
    alignItems: "center",
  },
  subtitles: {
    color: "#FFF",
    fontFamily: "LufgaRegular",
  },
});
