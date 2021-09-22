import React from 'react'
import ProtoTypes from 'prop-types'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions={
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#a8c0ff', '#3f2b96'],
        title: 'asdfasdfsadfasdfasdfasdfsadfsdaf',
        subtitle: 'dffffffdfdfdfdfdf'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#333333', '#dd1818'],
        title: 'asdfasdfsadfasdfasdfasdfsadfsdaf',
        subtitle: 'dffffffdfdfdfdfdf'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#CAC531', '#F3F9A7'],
        title: 'asdfasdfsadfasdfasdfasdfsadfsdaf',
        subtitle: 'dffffffdfdfdfdfdf'
    }
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content'/>
            
            <View style={styles.Halfcontainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={88} color="white" />
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={{...styles.Halfcontainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>

        </LinearGradient>           
    );
}

Weather.prototypes = {
    temp: ProtoTypes.number.isRequired,
    condition: ProtoTypes.oneOf([
        'Rain',
        'Clear',
        'Clouds',
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    Halfcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 30,
        color:'white'
    },
    title:{
        color: 'white',
        fontWeight: '500',
        fontSize: 30,
        marginBottom: 10
    },
    subtitle:{
        color: 'black',
        fontWeight: '100',
        fontSize: 20
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})
