import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import Swiper from "react-native-deck-swiper";

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

export class AddCardButton extends React.Component {
  addCard() {
    alert("Adding a card!")
  }

  render() {
    return (<Button style={styles.button} title="Add Card" accessibilityLabel="Add a card to your flashcard deck" onPress={this.addCard} />)
  }
}

export class FlashCard extends React.Component {
  state = {
    flipped: false
  }

  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => {
          this.setState(previousState => {
            return { flipped: !previousState.flipped };
          });
        }}>
          <Text style={styles.cardText}>
            {this.state.flipped
              ? cardsData[this.props.cardToShow]["backSideText"]
              : cardsData[this.props.cardToShow]["frontSideText"]}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export class Deck extends React.Component {

  // TODO: Add Redux to get FlashCard receiving from Swiper's onTapCard?

  render() {
    return (
      <Swiper
        cards={cardsData}
        renderCard={(card, index) => (
          <FlashCard
            frontSideText={card.frontSideText}
            backSideText={card.backSideText}
            cardToShow={index}
          />
        )}
        verticalSwipe={false}
        stackSize={3}
      />
    );
  }
}

export default class App extends React.Component {
  // TODO: Get button to show up on the bottom

  render() {
    return (
      <View style={styles.container}>
        <Deck />
        <AddCardButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  cardText: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center"
  },
  button: {

  }
});
