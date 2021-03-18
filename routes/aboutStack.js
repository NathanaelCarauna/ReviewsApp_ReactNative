import {createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header />
        },
    },    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'black'},
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold'}
    }
});

export default AboutStack;