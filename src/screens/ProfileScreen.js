import React, { Component } from 'react'
import { Text, View,StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import {colors} from "../config/Colors";

export class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.header}>
                    <View style={styles.leftHeaderWrapper}>
                      <Image  source={require('../assets/images/profilePage/leftArrow.png')} />
                      <Text style={styles.headerText}>Catherin</Text>
                      
                    </View>
                    <View >
                      <Image source={require('../assets/images/profilePage/threedots.png')} />
                    </View>
                </View>
                <ScrollView>
            

                <View style={styles.ProfileSectionWrapper}>
                    <View style={styles.ImageSection}>
                         
                         <Image style={styles.instaImageBorder}  source={require('../assets/images/profilePage/storiescircle.png')} />
                         <Image style={styles.userImage} source={require('../assets/images/profilePage/face.jpeg')} />
                         <Text style={styles.userName}>Catherin</Text>
                         
                    </View>
                    <View style={styles.followersCountSection}>
                      <View style={styles.followingCount} >
                          <View>
                              <Text style={styles.countTitle}>334</Text>
                              <Text style={styles.countSubTitle}>Posts</Text>
                           </View>
                          <View>
                              <Text style={styles.countTitle}>211K</Text>
                              <Text style={styles.countSubTitle}>Followers</Text>
                          </View>
                          <View>
                              <Text style={styles.countTitle}>134</Text>
                              <Text style={styles.countSubTitle}>Following</Text>
                          </View>
                           
                    </View> 
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity style={styles.messagesButtonWrapper}><Text style={styles.mesagesTitle}>Messages</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonItemWrapper}>
                            <Image style={styles.buttonIcon} source={require('../assets/images/profilePage/profielbuttonplus.png')}/>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.ButtonItemWrapper}>
                        <Image   style={styles.buttonIcon} source={require('../assets/images/profilePage/dropdown.png')}/>
                        </TouchableOpacity>
                    </View>
                   </View> 
                  
                </View>
                <View style={styles.moreInfoWrapper}>
                       <Text style={styles.introText}>Discovering Stories Around the world</Text>
                       <Text style={styles.urlText}>www.catherin.com</Text>      
                 </View>
                 <ScrollView style={styles.storiesWrapper} horizontal={true}>
                     <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 1</Text>
                    </View>  
                    <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 2</Text>
                    </View>  

                    <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 3</Text>
                    </View>  

                    <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 4</Text>
                    </View>  

                    <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 5</Text>
                    </View>  

                    <View>
                       <Image style={styles.storiesImage} source={require('../assets/images/profilePage/face.jpeg')} />
                       <Text style={styles.storyProfName}>Catherin 6</Text>
                    </View>  
                 </ScrollView>   
                 
                 <View style={styles.viewIconsWrapper}>
                     <Image source={require('../assets/images/profilePage/gridview.png')} />
                     <Image source={require('../assets/images/profilePage/listView.png')} />
                     <Image source={require('../assets/images/profilePage/profielplus.png')} />
                 </View>  
              
             
                 <ScrollView > 
                     <View style={styles.imagesWrapper}>
                         <Image style={styles.galleryIMage} source={require('../assets/images/profilePage/1.jpg')} />
                         <Image   style={styles.galleryIMage} source={require('../assets/images/profilePage/2.jpg')} />
                         <Image   style={styles.galleryIMage} source={require('../assets/images/profilePage/4.jpg')} />
                     </View>
                     <View style={styles.imagesWrapper}>
                         <Image style={styles.galleryIMage} source={require('../assets/images/profilePage/5.jpg')} />
                         <Image   style={styles.galleryIMage} source={require('../assets/images/profilePage/6.jpg')} />
                         <Image   style={styles.galleryIMage} source={require('../assets/images/profilePage/7.jpg')} />
                     </View>

                    
                
                 </ScrollView>   
                </ScrollView>
                <View style={styles.footer}>
                  <Image style={styles.footerIcon} source={require('../assets/images/profilePage/home.png')} />
                  <Image style={styles.footerIcon} source={require('../assets/images/profilePage/search.png')} />
                  <Image style={styles.footerIcon} source={require('../assets/images/profilePage/heart.png')} />
                  <Image style={styles.footerIcon} source={require('../assets/images/profilePage/profile.png')} />
                </View> 
            </View>
        )
    }
}

export default ProfileScreen

export const styles=StyleSheet.create({
  container:{
      display:"flex",
      flex:1
     
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
     borderBottomColor:colors.gray1,
     borderBottomWidth:1,
     backgroundColor:colors.gray1
  
  },
  leftHeaderWrapper:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  headerText:{
      fontSize:20,
      fontWeight:'700'
  },
  ProfileSectionWrapper:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  ImageSection:{
      display:'flex',
      flex:1,
      padding:5
  },
  followersCountSection:{
      display:'flex',
      flex:2,
    
  },
  instaImageBorder:{
      width:150,
      height:150
  },
  userImage:{
      position:'absolute',
      width:135,
      height:135,
      borderRadius:70,
      margin:13
  },
  followingCount:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly'
  },
  buttonWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      margin:10
  },
  messagesButtonWrapper:{
      borderRadius:5,
      borderWidth:2,
      borderColor:colors.gray1,
      width:'60%',
      padding:4
  },
  ButtonItemWrapper:{
    borderRadius:5,
    borderWidth:2,
    borderColor:colors.gray1,
 
    padding:4
  },
  buttonIcon:{
      width:25,
      height:25
  },
  mesagesTitle:{
      fontWeight:'700',
      textAlign:'center'
  },
  countTitle:{
      fontSize:20,
      fontWeight:'700',
      textAlign:'center'
  },
  countSubTitle:{
      color:colors.gray,
      textAlign:'center'
  },
  userName:{
      fontSize:19,
      fontWeight:'600',
      textAlign:'center'

  },
  moreInfoWrapper:{
      marginLeft:15
  },
  introText:{
      fontSize:16
  },
  urlText:{
      color:colors.blue
  },
  storiesImage:{
      borderRadius:70,
      width:70,
      height:70,
      borderColor:colors.gray1,
      borderWidth:3,
      marginRight:10
  },
  storiesWrapper:{
      padding:15,
      borderBottomWidth:2,
      borderBottomColor:colors.gray1
  },
  storyProfName:{
      textAlign:'center',

  },
  viewIconsWrapper:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  imagesWrapper:{
      flexDirection:'row'
  },
  galleryIMage:{
      display:'flex',
      flex:1,
      height:200,
      margin:1
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  footerIcon:{
    width:60,
    height:60
  }

})