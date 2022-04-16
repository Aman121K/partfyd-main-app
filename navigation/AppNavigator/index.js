import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from '../BottomNavigator';
import Header from '../components/Header/Header';
import {
  Notifications,
  HelpAndSupport,
  FeedBack,
  SelectPlan,
  CreateEvent,
} from '../../screens';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'home':
      return 'SIIR';
    case 'categories':
      return 'Categories';
    case 'post':
      return 'Post';
    case 'collections':
      return 'Collections';
    case 'profile':
      return 'Profile';
  }
}

const AppNavigator = props => {
  console.log(props);

  return (
    <Stack.Navigator initialRouteName="selectPlans">
      <Stack.Screen
        name="selectPlans"
        component={SelectPlan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="partyfyd"
        options={{headerShown: false}}
        component={BottomNavigator}
      />
      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          headerStyle: {
            backgroundColor: '#FFFF',
          },
        }}
      />
      <Stack.Screen
        name="helpandsupport"
        component={HelpAndSupport}
        options={{
          title: 'Help And Support',
          headerStyle: {
            backgroundColor: '#FFFF',
          },
        }}
      />
      <Stack.Screen
        name="feedback"
        component={FeedBack}
        options={{
          title: 'FeedBack',
          headerStyle: {
            backgroundColor: '#FFFF',
          },
        }}
      />
      <Stack.Screen
        name="createEvent"
        component={CreateEvent}
        options={{
          title: 'Create Event',
          headerStyle: {
            backgroundColor: '#FFFF',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
