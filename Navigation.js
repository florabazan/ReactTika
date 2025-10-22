import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

// Importa todas tus pantallas
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home'; // Asegúrate que este archivo existe y tiene un componente export default

// Crea las instancias de los navegadores
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Navegador principal de la app con las pestañas inferiores.
 * Se muestra cuando el usuario ya ha iniciado sesión.
 */
export function MainAppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#922b21',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeTab"
        component={Home} 
        options={{ 
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

/**
 * Navegador para el flujo de autenticación (Login y Registro).
 * Se muestra cuando el usuario NO ha iniciado sesión.
 */
export function AuthNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
