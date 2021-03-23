import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,        
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'nunito-bold',
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})