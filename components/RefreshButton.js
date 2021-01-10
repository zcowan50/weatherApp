import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {colors, theme, darkColors} from '../utils/index';

var colorSet 

    if(theme.status == 'dark'){
        colorSet = darkColors
    }
    else {
        colorSet = colors
    }

export default function RefreshButton({load}) {
    const refreshIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'  
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
