import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import defaultStyles from "./styles";

function AppTextInput({ icon, width = "100%", placeHolder, ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon &&
        (icon === "shop" ? (
          <Entypo
            name="shop"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        ) : icon === "rupee" ? (
          <FontAwesome
            name="rupee"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        ) : (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        ))}
      <TextInput
        placeholderTextColor={defaultStyles.colors.light}
        style={defaultStyles.text}
        mode="flat"
        underlineColor={defaultStyles.colors.themecolorBlue}
        dense={true}
        placeholder={placeHolder}
        style={{ backgroundColor: "#fff" }}
        theme={{ colors: { primary: defaultStyles.colors.themecolorBlue } }}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 2,
    // borderBottomColor: defaultStyles.colors.secondary,
    flexDirection: "row",
    padding: 8,
    marginVertical: "1%",
    alignItems: "center",
  },
  icon: {
    marginRight: "4%",
    marginBottom: "-10%",
  },
});

export default AppTextInput;
