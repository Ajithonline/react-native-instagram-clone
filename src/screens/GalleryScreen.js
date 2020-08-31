import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView,PermissionsAndroid,Platform,Dimensions,Image } from 'react-native'
import { colors } from '../config/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraRoll from "@react-native-community/cameraroll";

const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }
  
 

export class GalleryScreen extends Component {


    constructor(props){
        super(props)
        this.state={images:[],
                    pickedImage:''}
    }

    async componentDidMount(){
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
          }
        let params={first:20}
          CameraRoll.getPhotos(params).then((images)=>{
           
              this.setState({images:images.edges,pickedImage:images.edges[0].node.image.uri})
          }).catch((error)=>{
              console.log(error)
          });
    }

    displayImages=()=>{
        return this.state.images.map((item)=>{
            return(<View><Image style={styles.image} source={{uri:item.node.image.uri}} /></View>)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                   <View style={styles.headerLeftWrapper}>
                      <View><Icon size={25} name="times"  /></View>
                      <View style={styles.headerTitleWrapper}><Text><Text style={styles.headerTitle}>Gallery</Text> <Icon name="caret-down"  /></Text></View>
                   </View>
                   <View>
                      <View><Text style={styles.headerSubTitle}>Next</Text></View>
                    </View>  
                </View>
                <View>
                 <Image style={styles.pickedImageWrapper} source={{uri:this.state.pickedImage}} />
                </View>
                <ScrollView>
                   <View style={styles.galleryImagesWrapper}> 
                       {this.displayImages()}
                   </View>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.pickedFooterSection}><Text style={styles.pickedFooterTitle}>GALLERY</Text></View>
                    <View style={styles.footerSection}><Text style={styles.footerTitle}>PHOTO</Text></View>
                    <View style={styles.footerSection}><Text style={styles.footerTitle}>VIDEO</Text></View>
                </View>
            </View>
        )
    }
}

export default GalleryScreen


export const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    footer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    footerSection:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    pickedFooterSection:{
        flex:1,
        alignItems:'center',
        padding:10,
        borderBottomColor:colors.black,
        borderBottomWidth:2
    },
    footerTitle:{
        fontSize:16,
        color:colors.gray
    },
    pickedFooterTitle:{
        fontSize:16,
        color:colors.black
    },
    headerWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    headerLeftWrapper:{
        display:'flex',
        flexDirection:'row'
    },
    headerTitleWrapper:{
     marginLeft:15
    },
    headerTitle:{
        fontSize:18,
        fontWeight:'bold'
    },
    headerSubTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.primary
    },
    image:{
        width:width/4,
        height:width/4,
      
    },
    galleryImagesWrapper:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    pickedImageWrapper:{
        height:height/3
    }
})