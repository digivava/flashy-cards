import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export class FlashCard extends React.Component {
  state = {
    flipped: false
  };

  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            this.setState(previousState => {
              return { flipped: !previousState.flipped };
            });
          }}
        >
          <Text style={styles.cardText}>
            {this.state.flipped
              ? this.props.cardToShow["backSideText"]
              : this.props.cardToShow["frontSideText"]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    justifyContent: "center"
  },
  cardText: {
    color: "darkgray",
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center"
  }
});
