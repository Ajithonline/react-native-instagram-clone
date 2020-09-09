import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../config/Colors';
import SearchBox from '../components/SearchBox';

const DATA = [
  {id: '1', title: 'Language 1', subTitle: ' '},
  {id: '2', title: 'Language 2', subTitle: 'Language 2'},
  {id: '3', title: 'Language 3', subTitle: 'Language 3'},
  {id: '4', title: 'Language 4', subTitle: 'Language 4'},
  {id: '5', title: 'Language 5', subTitle: 'Language 5'},
  {id: '6', title: 'Language 6', subTitle: 'Language 6'},
  {id: '7', title: 'Language 7', subTitle: 'Language 7'},
];
export class InitialLaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
  }

  handleClick = () => {
    this.setState({languageModalVisible: !this.state.languageModalVisible});
  };
  render() {
    const {languageModalVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>
              <Text>English (United States) </Text>
              <Icon name="caret-down" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.instaLogo}
            source={require('../assets/images/instagramLogo.png')}
          />
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.primary}
              text={colors.secondary}
              label={'Create New Account'}
            />
          </View>
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonBg={colors.secondary}
              text={colors.primary}
              label={'Login'}
            />
          </View>
        </View>
        <View style={styles.fbLogoContainer}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.from}>from</Text>
            <Text style={styles.facebook}>FACEBOOK</Text>
          </View>
        </View>
        <Modal visible={languageModalVisible} transparent={true}>
          <View
            style={[
              styles.modalContainer,
              languageModalVisible
                ? {backgroundColor: 'rgba(0,0,0,0.5)'}
                : null,
            ]}>
            <View style={styles.modalContentContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
              </View>
              <View style={styles.underLine} />
              <View style={styles.searchBoxWrapper}>
                <SearchBox />
              </View>
              <View style={styles.underLine} />

              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={styles.languageWrapper}>
                    <Text style={styles.langTitle}>{item.title}</Text>
                    <Text style={styles.subLanguage}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 15,
  },
  fbLogoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  instaLogo: {
    width: '50%',
    height: '25%',
  },
  bottomWrapper: {
    borderTopWidth: 0.5,
    borderColor: colors.gray,
    width: '100%',
    padding: 10,
  },
  from: {
    textAlign: 'center',
    color: colors.gray,
  },
  facebook: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    display: 'flex',
    flex: 1,
  },
  modalContentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secondary,
    marginLeft: '10%',
    marginRight: '10%',
  },
  titleWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  underLine: {
    height: 0.5,
    backgroundColor: colors.gray1,
  },
  searchBoxWrapper: {
    display: 'flex',
    marginBottom: 20,
  },
  languageWrapper: {
    marginLeft: 15,
    marginBottom: 10,
  },
  subLanguage: {
    color: colors.gray,
    fontSize: 16,
  },
  langTitle: {
    fontSize: 20,
  },
  ButtonItemContainer: {
    marginBottom: 10,
    width: '100%',
  },
});
