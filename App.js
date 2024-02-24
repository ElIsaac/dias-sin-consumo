import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config"; // Optional if you want to use default theme
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ModalConsumo } from "./components/ModalConsumo";
import * as FileSystem from "expo-file-system";
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import { setupDatabase } from "./db";

export default function App() {
  
 
  setupDatabase()
  
  console.log('first')
  
  

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // La lógica que deseas ejecutar al abrir la aplicación
    setShowModal(true);
    
    // Puedes realizar otras acciones aquí, como navegar a una pantalla específica
    // o cargar datos iniciales, etc.
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          <ModalConsumo showModal={showModal} setShowModal={setShowModal} />

          <AppNavigator />
        </GluestackUIProvider>
      </NavigationContainer>
    </Provider>
  );
}
