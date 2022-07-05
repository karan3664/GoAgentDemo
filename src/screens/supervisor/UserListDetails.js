import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function UserlistDetails({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.appContainer}>
            <Text style={styles.textContainer}>  Name : {item.name}</Text>
            <Text style={styles.textContainer}>  User Name : {item.username}</Text>
            <Text style={styles.textContainer}>  Email : {item.email}</Text>
            <Text style={styles.textContainer}>  Address : {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</Text>
            <Text style={styles.textContainer}>  Phone : {item.phone}</Text>
            <Text style={styles.textContainer}>  Website : {item.website}</Text>

        </View>
    );
};


export default UserlistDetails;




const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#5e0acc',
    },

    textContainer: {
        margin: 8,
        fontSize: 20,
        color: 'white',
    },
});