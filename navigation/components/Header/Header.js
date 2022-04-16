import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FONTS, images, SIZES } from "../../../constants";

const Header = ({ title, navigation }) => {
  console.log("navigation --->",navigation);
  return (
    <View
      style={{
        elevation: 4,
        height: SIZES.height / 15,
        paddingHorizontal: "5%",
        backgroundColor: "#fff",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3
          }}
        >
          {title}
        </Text>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate("notifications")}
          >
            <Image
              style={{ height: SIZES.width / 20, width: SIZES.width / 20 }}
              source={images.notificationBell}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
