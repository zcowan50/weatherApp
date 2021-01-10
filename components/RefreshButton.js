import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../utils/index'

export default function RefreshButton({load}) {
    const refreshIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'md-refresh'  
    return (
        <View style={styles.refreshButton}>
            <Ionicons onPress={load}  name="refresh-circle-outline" size={24} color={colors.PRIMARY_COLOR} />
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
