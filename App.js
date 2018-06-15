import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text
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
      textToShow: "frontSideText",
      flipped: false
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem
              style={styles.card}
              button
              onPress={() => {
                this.setState(previousState => {
                  return { flipped: !previousState.flipped };
                });
                if (this.state.flipped) {
                  this.setState(() => {
                    return { textToShow: "backSideText" };
                  });
                } else {
                  this.setState(() => {
                    return { textToShow: "frontSideText" };
                  });
                }
              }}
            >
              <Body>
                <Text style={styles.cardText}>
                  {cards[this.state.cardToShow][this.state.textToShow]}
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <FlashCard />;
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
