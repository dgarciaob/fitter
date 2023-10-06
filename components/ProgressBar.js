import { View, Text } from "react-native";
import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 10,
        width: "100%",
        backgroundColor: "#E2E2E2",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          width: `${progress}%`,
          backgroundColor: "#E2E2E2",
          borderRadius: 20,
        }}
      />
    </View>
  );
}
