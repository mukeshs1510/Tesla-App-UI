import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (prpos) => {
  const { name, tagline, taglineCTA, image } = prpos.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.imageBackground} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContaier}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order pressed");
          }}
        />

        <StyledButton
          type="Secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
