// En AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 
import HomeScreen from '../screens/HomeScreen';
import StatsScreen from '../screens/StatsScreen';
import AdictionScreen from '../screens/AdictionScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={({ navigation, state, descriptors }) => (
        <BottomNavigation.Bar
          navigationState={state}
          onTabPress={({ route }) => {
            navigation.navigate(route.name);
          }}
          renderIcon={({ route, focused, color }) => {
            // Renderiza iconos según la ruta y el estado de enfoque
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Stats') {
              iconName = 'chart-bar';
            } else if (route.name === 'Adiction') {
              iconName = 'fire' ;
            }

            return <Icon name={iconName} size={24} color={color} />;
          }}
          getLabelText={({ route }) => {
            // Devuelve el texto de etiqueta para la pestaña
            return route.name;
          }}
        />
      )}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Adiction" component={AdictionScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
