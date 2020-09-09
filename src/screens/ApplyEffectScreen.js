import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/Colors';
import {
  Brightness,
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
  Saturate,
} from 'react-native-color-matrix-image-filters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export class ApplyEffectScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {effect: 'original'};
  }

  effectOnPress = effect => {
    this.setState({effect: effect});
  };

  render() {
    const {effect} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.heaerWrapper}>
          <Icon size={25} name={'arrow-left'} />
          <Image
            style={styles.imageIcon}
            source={require('../assets/images/sunshine.png')}
          />
          <Text style={styles.headerTitle}>Next</Text>
        </View>
        <View style={styles.mainImageWrapper}>
          {effect === 'original' ? (
            <Image
              style={styles.mainImage}
              source={require('../assets/images/feedImage.jpg')}
            />
          ) : null}
          {effect === 'grayscale' ? (
            <Grayscale>
              <Image
                style={styles.mainImage}
                source={require('../assets/images/feedImage.jpg')}
              />
            </Grayscale>
          ) : null}
          {effect === 'sepia' ? (
            <Sepia>
              <Image
                style={styles.mainImage}
                source={require('../assets/images/feedImage.jpg')}
              />
            </Sepia>
          ) : null}
          {effect === 'tint' ? (
            <Tint>
              <Image
                style={styles.mainImage}
                source={require('../assets/images/feedImage.jpg')}
              />
            </Tint>
          ) : null}
          {effect === 'saturate' ? (
            <Saturate>
              <Image
                style={styles.mainImage}
                source={require('../assets/images/feedImage.jpg')}
              />
            </Saturate>
          ) : null}
        </View>
        <View style={styles.effectPreviewWrapper}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => this.effectOnPress('original')}
              style={styles.previewImageWRapper}>
              <Text style={styles.previewTitle}>Original</Text>
              <Brightness>
                <Image
                  style={styles.previewImage}
                  source={require('../assets/images/feedImage.jpg')}
                />
              </Brightness>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.effectOnPress('grayscale')}
              style={styles.previewImageWRapper}>
              <Text style={styles.previewTitle}>Grayscale</Text>
              <Grayscale>
                <Image
                  style={styles.previewImage}
                  source={require('../assets/images/feedImage.jpg')}
                />
              </Grayscale>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.effectOnPress('sepia')}
              style={styles.previewImageWRapper}>
              <Text style={styles.previewTitle}>Sepia</Text>
              <Sepia>
                <Image
                  style={styles.previewImage}
                  source={require('../assets/images/feedImage.jpg')}
                />
              </Sepia>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.effectOnPress('tint')}
              style={styles.previewImageWRapper}>
              <Text style={styles.previewTitle}>Tint</Text>
              <Tint>
                <Image
                  style={styles.previewImage}
                  source={require('../assets/images/feedImage.jpg')}
                />
              </Tint>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.effectOnPress('saturate')}
              style={styles.previewImageWRapper}>
              <Text style={styles.previewTitle}>Saturate</Text>
              <Saturate>
                <Image
                  style={styles.previewImage}
                  source={require('../assets/images/feedImage.jpg')}
                />
              </Saturate>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.pickedFooterSection}>
            <Text style={styles.pickedFooterTitle}>FILTER</Text>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>EDIT</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ApplyEffectScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  heaerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  mainImageWrapper: {
    display: 'flex',
  },
  effectPreviewWrapper: {
    display: 'flex',
    marginTop: '15%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  imageIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 18,
    color: colors.primary,
  },
  footerSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  pickedFooterSection: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: colors.black,
    borderBottomWidth: 2,
  },
  footerTitle: {
    fontSize: 16,
    color: colors.gray,
  },
  pickedFooterTitle: {
    fontSize: 16,
    color: colors.black,
  },
  mainImage: {
    width: width,
    height: height / 2,
  },
  previewImage: {
    width: width / 4,
    height: width / 4,
  },
  previewTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  previewImageWRapper: {
    alignItems: 'center',
    marginRight: 10,
  },
});
