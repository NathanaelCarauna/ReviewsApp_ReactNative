import React from 'react';
import { View, Text, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import {images} from '../styles/ratingImg';
import Card from '../shared/card';

export default function ReviewDetails({navigation}){
    const rating = navigation.getParam('rating');
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Card >
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text style={globalStyles.paragraph}>{navigation.getParam('body')}</Text>
                <View style={globalStyles.rating}>
                    <Text>Rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
            
        </View>
    )
}
