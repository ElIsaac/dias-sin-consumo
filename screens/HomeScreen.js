import React from "react";
import { View, Button } from "react-native";
import { Text, Box, Center, Heading } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { actualizar } from "../redux/dateSlice";
import { numberToMonth } from "../utils/numberToMonth";

const HomeScreen = ({ navigation }) => {
  
   
  let dia, mes, anio, horas, minutos, segundos, nombreMes;
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.date);
  const { ultimoConsumo } = estado;
console.log(estado.consumoHistorico)
  let ultimoConsumoFormat;
  const handleChange = () => {
    dispatch(actualizar());
  };
  if (ultimoConsumo) {
    fechaSeg = parseInt(ultimoConsumo, 10)
    ultimoConsumoFormat = new Date(fechaSeg);
    dia = ultimoConsumoFormat.getDate();
    mes = ultimoConsumoFormat.getMonth();
    anio = ultimoConsumoFormat.getFullYear();
    horas = ultimoConsumoFormat.getHours();
    minutos = ultimoConsumoFormat.getMinutes();
    segundos = ultimoConsumoFormat.getSeconds();
    nombreMes = numberToMonth(mes);
  }

  return (
    <View>
      <Center bg="$primary400" h={250} style={{ margin: 10, borderRadius: 10 }}>
        <Text color="white">Ultimo consmo</Text>
        <Heading color="white">
          {ultimoConsumoFormat
            ? `${dia} de ${nombreMes} del ${anio}`
            : "Sin datos..."}
        </Heading>
        {ultimoConsumoFormat && <Text color="white">A las {horas}:{minutos} </Text>}
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
