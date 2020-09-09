import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

//notificationType:'0' - Users shared Photos
//notificationType:'1' - Follow user
//notificationType:'2' - users actions

const DATA = [
  {
    title: 'Today',
    data: [
      {
        notificationType: '0',
        notificationDuration: '5 h',
        mentionedUsers: ['Roy', 'Jackson', 'Manjula'],
        notificationImage: require('../assets/images/face.jpeg'),
        noOfPhotos: 5,
      },
    ],
  },
  {
    title: 'This Week',
    data: [
      {
        notificationType: '1',
        notificationDuration: '2 d',
        mentionedUsers: ['Roy', 'Jackson', 'Manjula'],
        notificationImage: require('../assets/images/face.jpeg'),
      },
    ],
  },
  {
    title: 'This Month',
    data: [
      {
        notificationType: '1',
        notificationDuration: '1 w',
        mentionedUsers: ['Roy', 'Jackson'],
        notificationImage: require('../assets/images/face.jpeg'),
      },
    ],
  },
  {
    title: 'This Month',
    data: [
      {
        notificationType: '2',
        notificationDuration: '1 w',
        mentionedUsers: ['Roy', 'Jackson', 'Janaki'],
        notificationImage: require('../assets/images/face.jpeg'),
      },
    ],
  },
];

export class ActivityNotificationScreen extends Component {
  renderFunction = item => {
    if (item.notificationType === '0') {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(',')}
            </Text>
            <Text> and others shared </Text>
            <Text>{item.noOfPhotos + ' Photos.'}</Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else if (item.notificationType === '1') {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text> Follow </Text>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(',')}
            </Text>
            <Text> and others you know to see their photos and videos. </Text>

            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>{item.mentionedUsers[0]}</Text>
            <Text> and </Text>
            <Text style={styles.userNames}>{item.mentionedUsers[1]}</Text>
            <Text> follows </Text>
            <Text style={styles.userNames}>{item.mentionedUsers[2]}</Text>
            <Text> on instagram see their posts. </Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}> Follow </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>Activity</Text>
        </View>
        <View style={styles.promotionsWrapper}>
          <Icon size={30} name={'arrow-circle-up'} />
          <View style={styles.promotionsContentwrapper}>
            <Text style={styles.promotionsTitle}>Promotions</Text>
            <Text>REcent activity from your promotins</Text>
          </View>
        </View>
        <View style={styles.sectionedListWrapper}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => this.renderFunction(item)}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
        <View style={styles.footer}>
          <Icon color={colors.black} size={25} name="home" />
          <Icon color={colors.gray} size={25} name="search" />
          <Icon color={colors.gray} size={25} name="plus-square" />
          <Icon color={colors.gray} size={25} name="heart" />
        </View>
      </View>
    );
  }
}

export default ActivityNotificationScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  headerWrapper: {
    display: 'flex',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 20,
    padding: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
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
  sectionedListWrapper: {
    display: 'flex',
    flex: 1,
    padding: 15,
  },
  promotionsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray1,
  },
  promotionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promotionsContentwrapper: {
    marginLeft: 10,
  },
  sectionedItemWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationImage: {
    height: 50,
    width: 50,
    borderRadius: 70,
  },
  notificationContentWrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: 15,
  },
  userNames: {
    fontWeight: 'bold',
  },
  duration: {
    color: colors.gray,
  },
  followButton: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 5,
  },
  followButtonText: {
    color: colors.secondary,
    padding: 5,
  },
});
