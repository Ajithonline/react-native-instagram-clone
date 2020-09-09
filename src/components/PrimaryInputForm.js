import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';

export class PrimaryInputForm extends Component {
  render() {
    const {placeHolderText} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder={placeHolderText} />
        </View>
      </View>
    );
  }
}

export default PrimaryInputForm;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  inputContainer: {
    backgroundColor: colors.gray1,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
  },
});
