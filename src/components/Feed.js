import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../config/Colors';
const Feed = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileThumb}
            source={require('../assets/images/face.jpeg')}
          />
          <Text style={styles.headerTitle}> Catherine</Text>
        </View>
        <Image
          style={styles.icon}
          source={require('../assets/images/dots.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.feedImage}
          source={require('../assets/images/feedImage.jpg')}
        />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require('../assets/images/heartfeed.jpg')}
          />
          <Image
            style={styles.icon}
            source={require('../assets/images/comment.png')}
          />
          <Image
            style={styles.icon}
            source={require('../assets/images/messagefeed.png')}
          />
        </View>
        <Image
          style={styles.icon}
          source={require('../assets/images/bookmarkfeed.png')}
        />
      </View>
      <View style={styles.underLineWRapper}>
        <View style={styles.underLine} />
      </View>
      <View style={styles.likesAndCommentsWrapper}>
        <Image
          style={styles.likesImage}
          source={require('../assets/images/heart.png')}
        />
        <Text style={styles.likesTitle}> 1,124 Likes</Text>

        <Text>
          {' '}
          <Text style={styles.headerTitle}> Catherine</Text>{' '}
          <Text style={styles.likesTitle}> Missing Summary </Text>
        </Text>
      </View>
    </View>
  );
};

export default Feed;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  profileThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  feedImage: {
    width: '100%',
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
  },
  underLine: {
    height: 1,
    backgroundColor: colors.gray1,
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    flexDirection: 'row',
    padding: 15,
  },
  likesTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
});
