import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from 'expo/vector-icons';

export default function Header(){
    return (
        <View style={styles.header}>
            {/* Icon */}
            <View>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'yellow',
        letterSpacing: 1
    }
})