import React, {PureComponent} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RNCamera} from 'react-native-camera';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

export class PhotoCaptureScreen extends PureComponent {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContanier}>
          <View style={styles.headerLeftWrapper}>
            <View>
              <Icon size={25} name="times" />
            </View>
            <View style={styles.headerTitleWrapper}>
              <Text style={styles.headerTitle}>Photo</Text>
            </View>
          </View>
        </View>
        <View style={styles.previewWrapper}>
          <RNCamera
            ratio={'2:2'}
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({barcodes}) => {
              console.log(barcodes);
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Image
              style={styles.captureButton}
              source={require('../assets/images/takePhoto.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>GALLERY</Text>
          </View>
          <View style={styles.pickedFooterSection}>
            <Text style={styles.pickedFooterTitle}>PHOTO</Text>
          </View>
          <View style={styles.footerSection}>
            <Text style={styles.footerTitle}>VIDEO</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PhotoCaptureScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContanier: {
    display: 'flex',
    padding: 10,
  },
  previewWrapper: {
    display: 'flex',
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerTitleWrapper: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
  preview: {
    height: width,
  },
  captureButton: {
    width: width / 3,
    height: width / 3,
  },
});
