import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  View
} from "native-base";
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
      <Card>
        <CardItem
          style={styles.card}
          button
          onPress={() => {
            this.setState(previousState => {
              return { flipped: !previousState.flipped };
            });
          }}
        >
          <Body>
            <Text style={styles.cardText}>
              {this.state.flipped
                ? cardsData[this.props.cardToShow]["backSideText"]
                : cardsData[this.props.cardToShow]["frontSideText"]}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export class Deck extends React.Component {
  render() {
    return (
      <Container>
        <View>
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
      </Container>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <Deck />;
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30
  },
  cardText: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center"
  }
});
