import React from "react";
import Swiper from "react-native-deck-swiper";
import { FlashCard } from "./FlashCard";

export class Deck extends React.Component {
  // TODO: Add Redux to get FlashCard receiving from Swiper's onTapCard?
  render() {
    return (
      <Swiper
        cards={this.props.cards}
        renderCard={(card, index) => (
          <FlashCard
            frontSideText={card.frontSideText}
            backSideText={card.backSideText}
            cardToShow={card}
          />
        )}
        verticalSwipe={false}
        stackSize={3}
      />
    );
  }
}
