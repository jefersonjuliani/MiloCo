import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../views/main/index";
import Loading from "../views/loading/index";

const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
