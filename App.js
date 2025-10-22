// App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/config/firebaseConfig'; // Asegúrate que esta ruta es correcta

// 1. Importamos los navegadores que creamos
import { AuthNavigator, MainAppNavigator } from './navigation/Navigation';

// Opcional: Para una pantalla de carga
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Firebase nos dirá si el usuario cambió
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user); // Si hay 'user', será true. Si es null, será false.
      setIsLoading(false); // Terminamos de cargar
    });

    // Limpiamos el listener cuando el componente se desmonte
    return unsubscribe;
  }, []);

  // Mientras verificamos la sesión, mostramos un indicador de carga
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#922b21" />
      </View>
    );
  }

  return (
    // 2. El NavigationContainer va aquí, en el nivel más alto
    <NavigationContainer>
      {/* 3. Decidimos qué navegador mostrar basado en el estado de autenticación */}
      {isAuthenticated ? <MainAppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
