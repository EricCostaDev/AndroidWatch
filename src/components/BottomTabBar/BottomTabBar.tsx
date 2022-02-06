import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export interface IBottomTabBar {
  navigation: any;
  state: any;
  descriptors: any;
}

const BottomTabBar = ({ state, descriptors, navigation }: IBottomTabBar) => {
  return (
    <View style={styles.container}>
      {state.routes.map(
        (route: { key: string | number; name: any }, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const iconRender = () => {
            switch (label) {
              case "Alarm":
                return (
                  <MaterialIcons
                    name="access-alarm"
                    size={20}
                    color={isFocused ? "black" : "white"}
                  />
                );
              case "Clock":
                return (
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={20}
                    color={isFocused ? "black" : "white"}
                  />
                );
              case "Timer":
                return (
                  <FontAwesome5
                    name="hourglass-end"
                    size={20}
                    color={isFocused ? "black" : "white"}
                  />
                );
              case "StopWatch":
                return (
                  <Fontisto
                    name="stopwatch"
                    size={20}
                    color={isFocused ? "black" : "white"}
                  />
                );
              case "Sleep":
                return (
                  <FontAwesome5
                    name="bed"
                    size={20}
                    color={isFocused ? "black" : "white"}
                  />
                );

              default:
                return (
                  <FontAwesome5
                    name="bed"
                    size={24}
                    color={isFocused ? "black" : "white"}
                  />
                );
            }
          };

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.itemContainer}
              >
                <View
                  style={[
                    styles.iconContainer,
                    isFocused && styles.iconContainerFocused,
                  ]}
                >
                  {iconRender()}
                </View>
                <Text
                  style={[
                    { fontSize: 12 },
                    { color: isFocused ? "#673ab7" : "#fff" },
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            </>
          );
        }
      )}
    </View>
  );
};

export default BottomTabBar;
