import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Game Zone',
            // headerStyle: { backgroundColor: 'black' },
            // headerTintColor: 'yellow',
            // headerTitleStyle: { fontWeight: 'bold'}
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
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'black'},
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold'}
    }
});

export default createAppContainer(HomeStack);