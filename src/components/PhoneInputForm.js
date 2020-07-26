import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/Colors';
export class PhoneInputForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.countryWrapper}>
                    <Text style={styles.country}>IN +91</Text>
                 </View>   
                 <View style={styles.inputNumber}>
                    <TextInput value={'8086502009'} />
                 </View>   
                 <View style={styles.closeBtnWrapper}>
                  <Icon size={25} style={styles.icon} color={colors.gray} name={'times'} />
                 </View>   
            </View>
        )
    }
}

export default PhoneInputForm

const styles=StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        borderColor:colors.gray,
        backgroundColor:colors.gray1

    },
    countryWrapper:{
     display:'flex',
     borderRightWidth:1,
     borderRightColor:colors.gray,
     paddingRight:15,
 
    },
    country:{
        fontWeight:'700',
        color:colors.gray
    },
    inputNumber:{
        display:'flex',
        flex:1,
        paddingLeft:15
    },
    closeBtnWrapper:{
        display:'flex',
        flex:1
    },
    icon:{
        textAlign:'right'
    }
})