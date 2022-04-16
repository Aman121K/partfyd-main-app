import React from "react";
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { images, SIZES } from "../../constants";
import { Home } from "../../screens";

const StaticTabBar = (props) => {
  return (
    <View
      style={{
        flex: 0.07,
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          position: "absolute",
          alignSelf: "center",
          backgroundColor: "white",
          width: 70,
          height: 70,
          borderRadius: 35,
          bottom: 35,
          zIndex: 100
        }}
      >
        <TouchableWithoutFeedback onPress={() => console.log("button pressed")}>
          <View style={[styles.button, styles.actionBtn]}>
            <Image
              style={{ height: 60, width: 60 }}
              resizeMode="contain"
              source={images.partyfydLogo}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <LinearGradient
        colors={["#7540FD", "#7800BD"]}
        style={{
          position: "absolute",
          backgroundColor: "grey",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: {
            height: 3,
            width: 3
          },
          bottom: 0,
          width: "100%",
          height: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 25
        }}
      >
        {props.state.routes.map((route, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => props.navigation.navigate(route.name)}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginStart: route.name == "activePlans" ? 50 : 0
                }}
              >
                <Image
                  style={{ height: 35, width: 25 }}
                  resizeMode="contain"
                  source={images[route.name]}
                />
                <Text style={styles.iconText}>{route.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* <TouchableOpacity onPress={() => Alert.alert("click on home")}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ height: 35, width: 25 }}
              resizeMode="contain"
              source={images.myEvents}
            />
            <Text style={styles.iconText}>My Events</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("click on home")}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginStart: 85
            }}
          >
            <Image
              style={{ height: 35, width: 25 }}
              resizeMode="contain"
              source={images.activePlans}
            />
            <Text style={styles.iconText}>Active Plans</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("click on home")}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={{ height: 35, width: 25 }}
              resizeMode="contain"
              source={images.profile}
            />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </TouchableOpacity> */}
      </LinearGradient>
    </View>
  );
};

export default StaticTabBar;

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 5.0,
    shadowOffset: {
      x: 2,
      y: 0
    },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 5,
    top: 5
  },
  actionBtn: {
    backgroundColor: "black",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: "#fff"
  },
  iconText: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: SIZES.body6
  }
});
