import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FONTS, images, SIZES } from "../../constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Announcements, NewArrivals, Offers } from "./Components";

const Tab = createMaterialTopTabNavigator();

export default function Notifications() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#7540FD',
        tabBarLabelStyle: { fontSize: SIZES.width / 35 },
      }}
    >
      <Tab.Screen  name="Announcements" options={{ tabBarLabel: 'Announcements' }} component={Announcements} />
      <Tab.Screen name="NewArrivals" options={{ tabBarLabel: 'New Arrivals' }} component={NewArrivals} />
      <Tab.Screen name="Offers" options={{ tabBarLabel: 'Offers' }} component={Offers} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});