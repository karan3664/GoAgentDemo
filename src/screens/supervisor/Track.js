import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



function Track(){
    return (
        <View style={styles.appContainer}>
            <Text style={styles.textContainer}>
                Track
            </Text>
        </View>
    );

};

export default Track;

const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },

});