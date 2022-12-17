import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Cards from "./components/Cards";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const MemoryGame = (props) => {
  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
};

export default MemoryGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2192FF",
  },
});
