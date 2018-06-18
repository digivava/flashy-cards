import React from "react";
import { StyleSheet, View } from "react-native";
import { AddCardButton } from "./AddCardButton";
import { Deck } from "./Deck";

const defaultDeck = "nouns"

const decks = {
  adjectives: [
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
      frontSideText: "高い",
      backSideText: "expensive"
    }
  ],
  nouns: [
    {
      id: 0,
      frontSideText: "ねこ",
      backSideText: "cat"
    },
    {
      id: 1,
      frontSideText: "いぬ",
      backSideText: "dog"
    },
    {
      id: 2,
      frontSideText: "とり",
      backSideText: "bird"
    }
  ],
  verbs: [
    {
      id: 0,
      frontSideText: "話す",
      backSideText: "to speak"
    },
    {
      id: 1,
      frontSideText: "飲む",
      backSideText: "to drink"
    },
    {
      id: 2,
      frontSideText: "寝る",
      backSideText: "to sleep"
    }
  ]
};

export default class App extends React.Component {
  // TODO: Get button to show up on the bottom

  state = {
    deckName: defaultDeck
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck cards={decks[this.state.deckName]} />
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
