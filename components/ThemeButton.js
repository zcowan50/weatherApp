import React, {useState} from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import {theme} from '../utils/index'

const ThemeButton = ({changeTheme, darkMode, colorSet}) => {

   const [isEnabled, setIsEnabled] = useState(false);
   const [mode, setMode] = useState('Dark Mode');
   


   const toggle = () => {
       if(isEnabled){
        setIsEnabled(false)
        setMode('Dark Mode')
       }
       else{
           setIsEnabled(true)
           setMode('Light Mode')
       }
       changeTheme()
   }

//    var colorSet 
    
//         if(darkMode == true){
//             colorSet = theme.darkColors
            
//         }
//         else if(darkMode == false ) {
//             colorSet = theme.lightColors
            
//         }

console.log(colorSet)

// var trackColorLt= colorSet.lightColors.BACKGROUND_COLOR

        const styles = StyleSheet.create({
            container: {
                
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 40
                
            },
            themeSwitch : {
                marginLeft: 10
            },
            themeText: {
                fontWeight: 'bold',
                alignItems: 'center',
                color: colorSet.TEXT_COLOR,
            }
        })

    return (
        <View style={styles.container}>
            <Text style={styles.themeText}>{mode}</Text>
            <Switch
                trackColor={{false: theme.lightColors.BACKGROUND_COLOR , true: theme.lightColors.BORDER_COLOR }}
                thumbColor={isEnabled ? theme.darkColors.PRIMARY_COLOR : theme.lightColors.PRIMARY_COLOR}
                ios_backgroundColor={isEnabled ? theme.darkColors.BACKGROUND_COLOR : theme.lightColors.BACKGROUND_COLOR}
                onValueChange={toggle}
                value={isEnabled}
                style={styles.themeSwitch}
                
            />
        </View>
    )
}



export default ThemeButton
