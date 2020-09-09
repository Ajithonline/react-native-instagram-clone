import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../config/Colors';
export class SignUpScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}> ENTER CONFIRMATION CODE </Text>
          </View>
          <View style={styles.subHeadingContainer}>
            <Text>
              <Text style={styles.infoText}>
                Enter the 6 digit code we sent to +91 8086502009 .
              </Text>
              <Text style={styles.requestText}>Request a new one.</Text>{' '}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <PrimaryInputForm placeHolderText={'Confirmation Code'} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              buttonBg={colors.primary}
              text={colors.secondary}
              label={'Next'}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.login}>
            <Text style={styles.alreradyAccount}>Already have an account?</Text>{' '}
            <Text style={styles.logIn}>LogIn.</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpScreen2;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headingContainer: {
    marginTop: '20%',
    marginBottom: 20,
  },
  subHeadingContainer: {
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 15,
  },
  inputContainer: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  buttonContainer: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  heading: {
    textAlign: 'center',
    fontWeight: '700',
  },
  infoText: {
    color: colors.gray,
  },
  requestText: {
    color: colors.primary,
    fontWeight: '700',
  },
  topContainer: {
    display: 'flex',
    flex: 1,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  login: {
    textAlign: 'center',
  },
  alreradyAccount: {
    color: colors.gray,
  },
  logIn: {
    fontWeight: '700',
  },
});
