import React, {useEffect} from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import {Picker} from '@react-native-community/picker';
import {theme} from '../utils/index';


export default function UnitsPicker({unitSystem, setUnitSystem, darkMode, colorSet}) {
        if(darkMode == true){
            colorSet = theme.darkColors
        }
        else if (darkMode == false) {
            colorSet = theme.lightColors
        }
        

    const styles = StyleSheet.create({
        unitsSystem: {
            width: 100,
            marginBottom: 0
        }
    })

    const x = (item) => {
        setUnitSystem(item);
    }

    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => x(item)} mode="dialog"  itemStyle={{fontSize:14}}>
                <Picker.Item label='C°' value="metric" color={colorSet.TEXT_COLOR}  />
                <Picker.Item label='F°' value="imperial" color={colorSet.TEXT_COLOR}  />
            </Picker>
        </View>
    )
}