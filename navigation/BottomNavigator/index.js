import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import TabBar from "./TabBar";
import { Home, MyEvents, ActivePlans, Profile } from "../../screens";
import { Header } from "../components";

const BottomNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          header: () => <Header title="Hi Ajay!" navigation={navigation} />
        }}
      />
      <Tab.Screen
        name="myEvents"
        component={MyEvents}
        options={{
          header: () => <Header title="My Events" navigation={navigation} />
        }}
      />
      <Tab.Screen name="activePlans" component={ActivePlans}
       options={{
        header: () => <Header title="Active Plans" navigation={navigation} />
      }}
      />
      <Tab.Screen name="profile" component={Profile} 
       options={{
        header: () => <Header title="Profile" navigation={navigation} />
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
