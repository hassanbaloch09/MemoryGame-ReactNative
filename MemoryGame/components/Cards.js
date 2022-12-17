import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

import Card from "./Card";

const Cards = (props) => {
  // Data Array

  const [items, setItems] = useState(
    [
      { id: 1, img: require("../../assets/1.png"), stat: "" },
      { id: 1, img: require("../../assets/1.png"), stat: "" },
      { id: 2, img: require("../../assets/2.png"), stat: "" },
      { id: 2, img: require("../../assets/2.png"), stat: "" },
      { id: 3, img: require("../../assets/3.png"), stat: "" },
      { id: 3, img: require("../../assets/3.png"), stat: "" },
      { id: 4, img: require("../../assets/4.png"), stat: "" },
      { id: 4, img: require("../../assets/4.png"), stat: "" },
      { id: 5, img: require("../../assets/5.png"), stat: "" },
      { id: 5, img: require("../../assets/5.png"), stat: "" },
      { id: 6, img: require("../../assets/6.png"), stat: "" },
      { id: 6, img: require("../../assets/6.png"), stat: "" },
      { id: 7, img: require("../../assets/7.png"), stat: "" },
      { id: 7, img: require("../../assets/7.png"), stat: "" },
      { id: 8, img: require("../../assets/8.png"), stat: "" },
      { id: 8, img: require("../../assets/8.png"), stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [hide, setHide] = useState(true);

  // Hide Image After Five Seconds
  const HideImage = () => {
    setTimeout(() => {
      setHide(false);
    }, 5000);
  };
  useEffect(() => {
    HideImage();
  }, []);

  const [prev, setPrev] = useState(-1);

  // Function to check for right and wrong values

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  // Function for changing stat of item to active after click

  function handleClick(id) {
    // Condition to only make stat active when pictures are hidden
    if (!hide) {
      if (prev === -1) {
        items[id].stat = "active";
        setItems([...items]);
        setPrev(id);
      } else {
        check(id);
      }
    } else {
      return;
    }
  }

  const onButtonPress = () => {
    // condition to disable the button after game is played
    let disable = true;
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].stat === "active" ||
        items[i].stat === "correct" ||
        items[i].stat === "wrong"
      ) {
        disable = false;
        break;
      }
    }
    if (disable) {
      setHide(!hide);
    }
  };

  // Function when all cards are correct

  const onWin = () => {
    let win = items.every((item) => item.stat === "correct");

    if (win) {
      alert("You won");
      items.map((item) => (item.stat = ""));
      items.sort(() => Math.random() - 0.5);
      setItems([...items]);
    }
  };
  useEffect(() => {
    onWin();
  }, [items]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Memory Game</Text>
      </View>
      <View style={styles.cardsWrapper}>
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            id={index}
            handleClick={handleClick}
            hide={hide}
            HideImage={HideImage}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{hide ? "Hide" : "Show"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    // alignItems: "center",
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    height: hp("12%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: rf(25),
    color: "#fff",
    fontWeight: "bold",
  },
  cardsWrapper: {
    height: hp("60%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "red",
  },
  button: {
    height: hp("7%"),
    width: wp("50%"),
    alignSelf: "center",
    backgroundColor: "#293462",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: rf(18),
    color: "#fff",
  },
});
