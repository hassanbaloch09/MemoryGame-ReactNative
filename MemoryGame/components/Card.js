import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Card = ({ item, id, handleClick, hide }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleClick(id), console.log(item?.id);
      }}
      style={[
        styles.container,
        { backgroundColor: item.stat ? "#379237" : "#82CD47" },
      ]}
    >
      <Image
        source={item.img}
        style={[
          styles.image,
          { transform: hide || item.stat ? [{ scale: 0.7 }] : [{ scale: 0 }] },
        ]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: hp("9%"),
    width: hp("9%"),
    margin: 10,
    marginTop: hp("2%"),
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
