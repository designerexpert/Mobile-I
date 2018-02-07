import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    MainContainer: {
        // flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
        width: '100%',
        height: '100%'
    },
    division: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        width: '90%',
    },
    bannerImage: {
        width: '100%',
        height: 150,
        borderRadius: 12,
    },
    doubleImage: {
        width: 180,
        height: 150,
        borderRadius: 12,
    },
    headerText: {
        fontSize: 25,
        paddingLeft: 10,
        color: '#000000',
        fontWeight: '900',
    },
    imageComments: {
        width: '100%',
        paddingLeft: 10,
        alignItems: 'flex-start',
        fontSize: 18,
        color: '#000000',
    }
});