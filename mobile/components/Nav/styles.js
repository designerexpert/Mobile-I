import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    NavContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        marginTop: 33,
        width: '100%',
        height: '10%',
    },
    optionsImage: {
        width: '10%',
        height: '10%',
        marginLeft: 6,
    },
    searchBar: {
        height: '8%',
        width: '80%',
        marginTop: 4,
        marginLeft: 10,
        paddingLeft: 8,
        textAlign: 'left',
        alignItems: 'center',
        borderColor: '#3b5998',
        borderWidth: 1,
        borderRadius: 12,
    }
});