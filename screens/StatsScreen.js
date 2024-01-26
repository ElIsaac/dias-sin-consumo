import React from "react";
import { View, Button } from "react-native";
import { Text, Box } from "@gluestack-ui/themed";

const StatsScreen = ({ navigation }) => {
  return (
    <View>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Stats Screen</Text>
        <Button
          title="Go to Hone"
          onPress={() => navigation.navigate("Home")}
        />
      </Box>
    </View>
  );
};

export default StatsScreen;
