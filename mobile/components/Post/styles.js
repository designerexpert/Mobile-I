import { StyleSheet, Text, View } from 'react-native';

export default styles = StyleSheet.create({
    PostContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 33,
        width: '100%',
        height: '100%'
    },
    interactButtons: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '80%',
        marginBottom: 10,
        marginTop: 10,
    },
    button: {
        marginLeft: 2,
        fontSize: 20,
        backgroundColor: '#3b5998',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 4,
    },
    comments: {
        width: '90%',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    comment: {
        borderWidth: 1,
        borderColor: '#3b5998',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4,
        paddingBottom: 4,
    },
    postImage: {
        width: 400,
        height: 400,
        borderRadius: 10,
    }
});