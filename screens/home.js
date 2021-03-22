import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }){

    const [reviews, setReviews] = useState([
        {title: 'Zelda, breath of fresh air', rating: 5, body: 'Lorem ipsum', key: '1'},
        {title: 'Prince of Persia', rating: 4, body: 'Lorem ipsum', key: '2'},
        {title: 'GTA 5', rating: 5, body: 'Lorem ipsum', key: '3'},
        {title: 'My time at portia', rating: 5, body: 'Lorem ipsum', key: '4'}
    ])

    return (
        <View style={globalStyles.container}>            
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}
