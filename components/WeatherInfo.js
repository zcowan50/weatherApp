import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {colors, darkColors, theme} from '../utils/index'

// const {PRIMARY_COLOR, SECONDARY_COLOR} = colors

var colorSet 

    if(theme.status == 'dark'){
        colorSet = darkColors
    }
    else {
        colorSet = colors
    }

export default function WeatherInfo({currentWeather}) {
    const {
        main: {temp},
        weather: [details],
        name
    } = currentWeather

    const {icon, main, description} = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.nameText}>{name}</Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}}/>
            <Text style={styles.textPrimary}>{Math.round(temp)}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.textSecondary}>{main}</Text>
            <Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100
    },
    weatherDescription: {
        textTransform: 'capitalize',
        color: colorSet.TEXT_COLOR
    },
    textPrimary: {
        fontSize: 40,
        color: colorSet.PRIMARY_COLOR
    },
    textSecondary: {
        fontSize: 20,
        color: colorSet.SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10
    },
    nameText:{
        color: colorSet.TEXT_COLOR,
        fontSize: 18
    },
})