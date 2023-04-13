import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { navigationRef } from "./context";

const Stack = createStackNavigator();
const BottomNav = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          presentation: "transparentModal",
        }}
      >
        <Stack.Screen name="Main" component={BTNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const BTNavigator = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomNav.Screen name="Home" component={HomeScreen} />
    </BottomNav.Navigator>
  );
};
