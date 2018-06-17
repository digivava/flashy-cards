import React from "react";
import { Button, StyleSheet } from "react-native";

export class AddCardButton extends React.Component {
  addCard() {
    alert("Adding a card!");
  }
  render() {
    return (
      <Button
        style={styles.button}
        title="Add Card"
        accessibilityLabel="Add a card to your flashcard deck"
        onPress={this.addCard}
      />
    );
  }
}

export const styles = StyleSheet.create({
  button: {}
});
