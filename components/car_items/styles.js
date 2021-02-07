import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContaier: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
});
export default styles;
