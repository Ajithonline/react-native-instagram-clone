import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tags = tags => {
  return tags.tags.map(item => {
    return (
      <View style={styles.container}>
        <Text style={styles.tagTextWrapper}>
          {item.icon !== '' ? <Icon name={item.icon} /> : null}{' '}
          <Text style={styles.tag}>{item.tagName}</Text>
        </Text>
      </View>
    );
  });
};

export default Tags;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: colors.gray,
    margin: 5,
    borderRadius: 5,
  },
  tagTextWrapper: {
    padding: 5,
  },
  tag: {
    padding: 5,
    fontWeight: '700',
  },
});
