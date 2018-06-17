import React from "react";
import { StyleSheet, View } from "react-native";
import { AddCardButton } from "./AddCardButton";
import { Deck } from "./Deck";

const cardsData = [
  {
    id: 0,
    frontSideText: "大きい",
    backSideText: "big"
  },
  {
    id: 1,
    frontSideText: "小さい",
    backSideText: "small"
  },
  {
    id: 2,
    frontSideText: "cat",
    backSideText: "ねこ"
  }
];

export default class App extends React.Component {
  // TODO: Get button to show up on the bottom

  render() {
    return (
      <View style={styles.container}>
        <Deck cards={cardsData} />
        <AddCardButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
