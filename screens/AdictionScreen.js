import React from "react";
import { View, Button } from "react-native";
import { Text, Box } from "@gluestack-ui/themed";

const AdictionScreen = ({ navigation }) => {
  return (
    <View>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Adiction Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </Box>
    </View>
  );
};

export default AdictionScreen;
