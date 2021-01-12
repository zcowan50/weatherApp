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

    return (
        <View style={styles.unitsSystem}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)} mode="dropdown"  itemStyle={{fontSize:14}}>
                <Picker.Item label='C°' value="metric" color={colorSet.TEXT_COLOR}  />
                <Picker.Item label='F°' value="imperial" color={colorSet.TEXT_COLOR}  />
            </Picker>
        </View>
    )
}