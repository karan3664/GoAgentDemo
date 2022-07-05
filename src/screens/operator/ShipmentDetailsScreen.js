import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



function ShipmentDetailsScreen({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.appContainer}>
            <Text style={styles.textContainer}> Comapny Name : {item.company.name}</Text>
            <Text style={styles.textContainer}>  Catch Phrase : {item.company.catchPhrase}</Text>
            <Text style={styles.textContainer}>  BS : {item.company.bs}</Text>
        </View>
    );
};


export default ShipmentDetailsScreen;




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