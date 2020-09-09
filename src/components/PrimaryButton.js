import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';

export class PrimaryButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {buttonBg, text, label} = this.props;

    const buttonBackground = buttonBg || colors.primary;
    const textColor = text || colors.secondary;
    const textLabel = label;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: buttonBackground}]}>
          <Text style={[styles.text, {color: textColor}]}>{textLabel}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PrimaryButton;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: colors.secondary,
    textAlign: 'center',
  },
});
