import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')        
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Button title='Detalhes de review' onPress={pressHandler}/>
        </View>
    )
}
