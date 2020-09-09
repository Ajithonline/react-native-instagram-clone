import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {colors} from '../config/Colors';
import SearchBox from '../components/SearchBox';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tags from '../components/Tags';

const width = Dimensions.get('window').width;

const tags = [
  {icon: 'shopping-basket', tagName: 'Shop'},
  {icon: 'heart', tagName: 'Well-beight'},
  {icon: '', tagName: 'Travel'},
];
export class SearchHomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <SearchBox />
            <Icon style={styles.qrCode} size={30} name="qrcode" />
          </View>
          <ScrollView horizontal={true} style={styles.tagWrapper}>
            <Tags tags={tags} />
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.videoContainer} />
          <View>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/1.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/2.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/4.jpg')}
              />
            </View>
            <View style={styles.imagesWrapper}>
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/5.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/6.jpg')}
              />
              <Image
                style={styles.galleryIMage}
                source={require('../assets/images/profilePage/7.jpg')}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Icon color={colors.gray} size={25} name="home" />
          <Icon color={colors.black} size={25} name="search" />
          <Icon color={colors.gray} size={25} name="plus-square" />
          <Icon color={colors.gray} size={25} name="heart" />
        </View>
      </View>
    );
  }
}

export default SearchHomeScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: colors.gray1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qrCode: {
    padding: 10,
  },
  tagWrapper: {
    padding: 10,
  },
  videoContainer: {
    backgroundColor: colors.black,
    height: width,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  imagesWrapper: {
    flexDirection: 'row',
  },
  galleryIMage: {
    display: 'flex',
    flex: 1,
    height: 150,
    margin: 1,
  },
});
