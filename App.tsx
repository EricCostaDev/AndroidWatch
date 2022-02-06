import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlarmScreen from "./src/screens/AlarmScreen/AlarmScreen";
import ClocksScreen from "./src/screens/ClocksScreen/ClocksScreen";
import TimerScreen from "./src/screens/TimerScreen/TimerScreen";
import StopWatchScreen from "./src/screens/StopWatchScreen/StopWatchScreen";
import SleepScreen from "./src/screens/SleepScreen/SleepScreen";
import React from "react";
import BottomTabBar from "./src/components/BottomTabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(28, 28, 30)",
    card: "rgb(255, 255, 255)",
    text: "rgb(255, 255, 255)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Alarm"
        screenOptions={{
          headerTitle: (props) => (
            <View style={{ backgroundColor: "red" }}>
              <Text>adsad</Text>
            </View>
          ),
        }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Tab.Screen
          name="Alarm"
          component={AlarmScreen}
          options={{
            tabBarLabel: "Alarm",
          }}
        />
        <Tab.Screen
          name="Clock"
          component={ClocksScreen}
          options={{
            tabBarLabel: "Clock",
          }}
        />
        <Tab.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            tabBarLabel: "Timer",
          }}
        />
        <Tab.Screen
          name="StopWatch"
          component={StopWatchScreen}
          options={{
            tabBarLabel: "StopWatch",
          }}
        />
        <Tab.Screen
          name="Sleep"
          component={SleepScreen}
          options={{
            tabBarLabel: "Sleep",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
