import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import RefreshButton from './components/RefreshButton';
import WeatherDetails from './components/WeatherDetails';
import {WEATHER_API_KEY} from 'react-native-dotenv';
import {theme} from './utils/index';
import ThemeButton from './components/ThemeButton';

var colorSet = theme.lightColors

// if (darkMode == true) {
//   colorSet = theme.darkColors

// }
// else{
//   colorSet = theme.lightColors
// }




const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('imperial')
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = () => {
    if(darkMode == false){
      setDarkMode(true)
      colorSet = theme.darkColors
    }
    else if(darkMode == true){
      setDarkMode(false)
      colorSet = theme.lightColors
    }
  }

  


  useEffect(() => {
    load()
  }, [unitSystem])
  async function load() {
    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestPermissionsAsync()

      if(status != 'granted') {
        setErrorMessage('Access to location is needed to run the app')
        return 
      }
      const location = await Location.getCurrentPositionAsync()
      
      const {latitude, longitude} = location.coords
      
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weatherUrl)

      const result = await response.json()

      if(response.ok) {
        setCurrentWeather(result)
      }
      else {
        setErrorMessage(result.message)
      }

      // alert(`Latitude: ${latitude}, Longitude: ${longitude}`)
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorSet.BACKGROUND_COLOR,
      justifyContent: 'center',
    },
    main : {
      justifyContent: 'center',
      flex: 1
    },
    
  });

  if(currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} darkMode={darkMode}  />
          <RefreshButton load={load} darkMode={darkMode}/>
          <WeatherInfo currentWeather={currentWeather} darkMode={darkMode}/>
        </View>
          <ThemeButton changeTheme={changeTheme} darkMode={darkMode} colorSet={colorSet}/>
        <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem} darkMode={darkMode} />
      </View>
  );
  }
  else if (errorMessage){
    return (
      <View style={styles.container}>
        <RefreshButton load={load}/>
        <Text style={{textAlign: 'center'}}>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
  else {
    return(
    <View style={styles.container}>
        <ActivityIndicator size="large" color={colorSet.PRIMARY_COLOR} />
        <StatusBar style="auto" />
    </View>
    )
  }
}

