import {createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';


const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About Game Zone',            
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