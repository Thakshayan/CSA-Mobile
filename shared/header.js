import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';


export default function Header({navigation}){

    const openMenu = ()=>{
        navigation.openDrawer()
    }


    return (
        <View style={styles.header}>
            
            <View style={styles.iconBorder}>
            <MaterialIcons name='menu' onPress={openMenu} size={30} style={styles.icon}/>
            </View>
            <View>
                <Text style={styles.headerText}>Customer Service App</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        //fontWeight: 'bold',
        fontSize: 20,
        color: '#E5E5E5',
        letterSpacing: 1,
        left:0
    },
    icon:{
        opacity:1,
        // elevation:1,
        color:'white',
        backgroundColor:'#ff5d6510' 
    },
    iconBorder:{
        position: 'absolute',
        // left: 1,
        // borderRadius: 2,
        right:1,
        padding: 0,
        //backgroundColor:'#3f4d67',
        
    }
})