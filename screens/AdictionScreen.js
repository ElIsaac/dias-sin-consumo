import React from "react";
import { View, Button } from "react-native";
import { Text, Box } from "@gluestack-ui/themed";
import Calendar from "../components/Calendar";
import { useSelector } from "react-redux";
import { calendarEvent } from "../utils/calendarEvent";

const AdictionScreen = ({ navigation }) => {
  const { ultimoConsumo } = useSelector((state) => state.date);
  
  return (
    <View>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Adiction Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </Box>
      <Calendar ultimoConsumo={calendarEvent(ultimoConsumo)}/>
    </View>
  );
};

export default AdictionScreen;
