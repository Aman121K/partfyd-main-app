import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { EnterPhoneNo, OtpVerification, FeedBack } from "./Components";

const AuthNavigator = () => {

  return (
    <View style={styles.wrapper}>
      <Stack.Navigator>
        <Stack.Screen
          name="EnterPhoneNo"
          options={{ headerShown: false }}
          component={EnterPhoneNo}
        />
        <Stack.Screen
          name="OtpVerification"
          options={{ headerShown: false }}
          component={OtpVerification}
        />
      </Stack.Navigator>
    </View>
  );
};

export default AuthNavigator;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
});
