import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    PostContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        height: '12%',
    },
    interactButtons: {
        width: 'auto',
        height: '12%',
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
    },
    buttonsOpacity: {
    },
    postImage: {
        width: 'auto',
        height: 200,
        borderRadius: 10,
    },
    button: {
        marginLeft: 2,
        fontSize: 20,
        backgroundColor: '#3b5998',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 4,
    },
    comments: {
        marginTop: 5,
        width: 'auto',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InnerComments: {
        flex: 1,
        width: 'auto',
        height: 250,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    comment: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#3b5998',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
    },
});