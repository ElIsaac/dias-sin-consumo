import React from "react";
import { View, Button } from "react-native";
import { Text, Box, Center, Heading } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { actualizar } from "../redux/dateSlice";

const HomeScreen = ({ navigation }) => {
  const obtenerNombreMes = (numeroMes) => {
    const nombresMeses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    // Restar 1 porque los meses en JavaScript comienzan desde 0
    const indiceMes = numeroMes;
  
    if (indiceMes >= 0 && indiceMes < nombresMeses.length) {
      return nombresMeses[indiceMes];
    } else {
      return "Mes no válido";
    }
  };
  let dia;
  let mes;
  let año;
  const dispatch = useDispatch();
  const { ultimoConsumo } = useSelector((state) => state.date);
  let ultimoConsumoFormat;
  const handleChange = () => {
    dispatch(actualizar());
  };
  if (ultimoConsumo) {
    ultimoConsumoFormat = new Date(ultimoConsumo);
    dia = ultimoConsumoFormat.getDate();
    mes = ultimoConsumoFormat.getMonth() ;
    año = ultimoConsumoFormat.getFullYear();
    horas = ultimoConsumoFormat.getHours();
    minutos = ultimoConsumoFormat.getMinutes();
    segundos = ultimoConsumoFormat.getSeconds();
  }

  return (
    <View>
      <Center bg="$primary400" h={250} style={{ margin: 10, borderRadius: 10 }}>
        <Text color="white">Ultimo consmo</Text>
        <Heading color="white">
          {ultimoConsumoFormat
            ? `${dia} de ${obtenerNombreMes(mes)} del ${año}`
            : "Sin datos..."}
        </Heading>
      </Center>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Home Screen</Text>
        <Button
          title="Go to Screen 1"
          onPress={() => navigation.navigate("Stats")}
        />
        <Text>Fecha y hora actual:</Text>
        <Text>
          {ultimoConsumoFormat ? ultimoConsumoFormat.toString() : "Cargando..."}
        </Text>
        <Button title="Actualizar Fecha" onPress={handleChange} />
      </Box>
    </View>
  );
};

export default HomeScreen;
