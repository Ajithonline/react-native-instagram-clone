import React, { Component } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';

const DATA=[
    {id:'jhgjfhd787',Title:'Rose',subTitle:'Lorem Ipum'},
    {id:'fdgdfgdfgf',Title:'Janaki',subTitle:'Lorem Ipum'},
    {id:'cvbfddffff',Title:'Renuka',subTitle:'Lorem Ipum'}
]
export class SearchScreen extends Component {

     renderItem = ({ item }) => (
     <View style={styles.itemContainer}>
         <Image style={styles.image} source={require('./../assets/images/profilePage/face.jpeg')}/>
         <View style={styles.itemRightWrapper}>
         <Text style={styles.title}>{item.Title}</Text>
         <Text style={styles.subTitle}>{item.subTitle}</Text>
         </View>
      </View>
      );

    render() {
        return (
            <View style={styles.container}>
               <View style={styles.headerWrapper}>
                   <View style={styles.topHeaderWrapper }>
                       <View style={styles.headerTopLeftWrapper}>
                         <Icon size={25} name="arrow-left" />
                         <TextInput placeholder='Search' />
                       </View>
                       <View >
                       <Icon size={25} name="times" />
                       </View>
                    </View>
                   <View style={styles.subHeaderWrapper}>
                      <TouchableOpacity style={styles.selectedCategoryItem}><Text style={styles.titleSelected}>TOP</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.categoryItem}><Text style={styles.title}>ACCOUNTS</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.categoryItem}><Text style={styles.title}>TAGS</Text></TouchableOpacity>
                      <TouchableOpacity style={styles.categoryItem}><Text style={styles.title}>PLACES</Text></TouchableOpacity>
                    </View>
               </View>
               <FlatList data={DATA} keyExtractor={(item,index)=>{index.toString()}}   renderItem={this.renderItem} />
            </View>
        )
    }
}

export default SearchScreen


export const styles=StyleSheet.create({
    container:{
        display:'flex'
    },
    headerWrapper:{
        display:'flex'
    },
    topHeaderWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
     
        padding:10
    },
    headerTopLeftWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    subHeaderWrapper:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        borderBottomColor:colors.gray1,
        borderBottomWidth:1,
       
        
    },
    selectedCategoryItem:{
        display:'flex',
        flex:1,
        padding:5,
        alignItems:'center',
        borderBottomColor:colors.black,
        borderBottomWidth:1,
    },
    categoryItem:{
        display:'flex',
        flex:1,
        padding:5,
        alignItems:'center'
    },
    title:{
        fontWeight:'700',
        color:colors.gray
    },
    titleSelected:{
        fontWeight:'700'
    },
    itemContainer:{
        display:'flex',
        flexDirection:'row',
        padding:5,
        alignItems:'center'

    },
    image:{
        width:75,
        height:75,
        borderRadius:50
    },
    itemRightWrapper:{
        marginLeft:10
    },
    title:{
        fontWeight:'700'
    },
    subTitle:{
        color:colors.gray
    }

})