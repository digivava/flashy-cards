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
  View,
  DeckSwiper
} from "native-base";

const cards = [
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
  constructor() {
    super();

    this.state = {
      cardToShow: 0,
      flipped: false
    };
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
                ? this.props.backSideText
                : this.props.frontSideText}
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
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item => (
              <FlashCard
                frontSideText={item.frontSideText}
                backSideText={item.backSideText}
              />
            )}
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
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "center"
  },
  cardText: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center"
  }
});
