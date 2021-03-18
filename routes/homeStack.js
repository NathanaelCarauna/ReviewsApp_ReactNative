import {createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header/>,

        },

    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {        
        // headerStyle: { backgroundColor: 'black', padding: 0},
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold'}        
    }
});

export default HomeStack;