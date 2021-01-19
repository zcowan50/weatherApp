import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {theme} from '../utils/index';


export default function RefreshButton({load, darkMode}) {
    const refreshIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'  
    
    var colorSet 
    
        if(darkMode == true){
            colorSet = theme.darkColors
        }
        else if(darkMode == false ) {
            colorSet = theme.lightColors
        }
    
        if(colorSet == null){
            colorSet= theme
        }

    return (
        <View style={styles.refreshButton}>
            <Ionicons onPress={load}  name="refresh-circle-outline" size={24} color={colorSet.PRIMARY_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    refreshButton: {
        position: 'absolute',
        top: 60,
        right: 20,
    }
})
