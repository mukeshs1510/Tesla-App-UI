import React from "react";
import { View, Image, Pressable } from "react-native";
import styles from "./style";

const Header = (prpos) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Pressable onPress={() => console.warn("Menu Item CLicked")}>
        <Image
          style={styles.menu}
          source={require("../../assets/images/menu.png")}
        />
      </Pressable>
    </View>
  );
};

export default Header;
