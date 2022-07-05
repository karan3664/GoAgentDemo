import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function ProfileScreen() {
    return (
        <View style={styles.appContainer}>
            <Text style={styles.textContainer}>
                Profile
            </Text>
        </View>
    );
};

export default ProfileScreen;


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