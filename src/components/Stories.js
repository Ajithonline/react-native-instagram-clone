import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

export class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.storiesHeaderWrapper}>
          <Text style={styles.storiesHeaderText}>Stories</Text>
          <Text style={styles.storiesHeaderText}>Watch All</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.myStoryImageWrapper}>
            <Image
              style={styles.myStoryImage}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Catherin</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Seona</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storieslivecircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Margeret</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require('../assets/images/storiescircle.png')}
            />
            <Image
              style={styles.otherStories}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.profileName}>Sonia</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Stories;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storiesHeaderText: {
    fontSize: 17,
    fontWeight: '700',
  },
  myStoryImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  myStoryImageWrapper: {
    padding: 10,
  },
  otherStories: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 12,
  },
  storyRound: {
    width: 85,
    height: 85,
  },
  otherStoryImageWrapper: {},
  profileName: {
    fontSize: 16,
    textAlign: 'center',
  },
});
