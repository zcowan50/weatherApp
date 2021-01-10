import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker';
import {colors, darkColors, theme} from '../utils/index';

var colorSet 

    if(theme.status == 'dark'){
        colorSet = darkColors
    }
    else {
        colorSet = colors
    }

export default function UnitsPicker({unitSystem, setUnitSystem}) {
    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)} mode="dropdown"  itemStyle={{fontSize:12}}>
                <Picker.Item label='C°' value="metric" color={colorSet.TEXT_COLOR}  />
                <Picker.Item label='F°' value="imperial" color={colorSet.TEXT_COLOR}  />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 30,
            }
        }),
        left: 20,
        height: 50,
        width: 100,
    }
})