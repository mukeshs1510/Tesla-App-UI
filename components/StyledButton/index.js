import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";

const StyledButton = (prpos) => {
  //   const type = prpos.type;
  //   const content = prpos.content;
  //   const onpRess = prpos.onPress;

  const { type, content, onPress } = prpos;

  const backgourndBtn = type === "primary" ? "#171A2BCC" : "#fFFFFFA6";
  const textdBtn = type === "primary" ? "#fFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgourndBtn }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textdBtn }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StyledButton;
