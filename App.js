import React from "react";
import { StyleSheet, View } from "react-native";
import { Deck } from "./Deck";
import { Picker, Form, Icon } from "native-base"

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
  state = {
    deckName: defaultDeck
  }

  onValueChange(value) {
    this.setState({
      deckName: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck cards={decks[this.state.deckName]} />
        <Form>
          <Picker
            mode="dropdown"
            placeholder="Decks"
            placeholderStyle={{ color: "black" }}
            iosHeader="Choose Deck"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={styles.picker}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Adjectives" value="adjectives" />
            <Picker.Item label="Nouns" value="nouns" />
            <Picker.Item label="Verbs" value="verbs" />
          </Picker>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  picker: {
    marginTop: 30,
    alignSelf: "center"
  }
});
