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
                <Text>
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
