import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
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

export class FlashCard extends React.Component {
  state = {
    flipped: false
  }

  render() {
    return (
      <View style={styles.card}>
        <TouchableHighlight onPress={() => {
          this.setState(previousState => {
            return { flipped: !previousState.flipped };
          });
        }}>
          <Text style={styles.cardText}>
            {this.state.flipped
              ? cardsData[this.props.cardToShow]["backSideText"]
              : cardsData[this.props.cardToShow]["frontSideText"]}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export class Deck extends React.Component {

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <Deck />;
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
    backgroundColor: 'white'
  },
  cardText: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center"
  }
});
