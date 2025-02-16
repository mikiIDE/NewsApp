import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsScreen from './screens/NewsScreen';
import DetailScreen from './screens/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WeatherScreen from "./screens/WeatherScreen"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ニュース" component={NewsScreen} />
        <Stack.Screen name="詳細ページ" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const WeatherStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="天気予報" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App = () => {
  return (
<NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name = "ニュース" component={NewsStack} />
  <Tab.Screen name = "天気予報" component={WeatherStack} />
</Tab.Navigator>
</NavigationContainer>
  );
}

// タブ：CreateBottomTabNavigator
// 画面遷移：CreateStackNavigator
