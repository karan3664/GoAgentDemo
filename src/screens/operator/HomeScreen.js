import { StyleSheet, Text, View } from "react-native";
import React  from "react";

function HomeScreen() {
    return (

        <View style={styles.appContainer}>
            <Text style={styles.textContainer}>
                Home
            </Text>
        </View>



    );
};

export default HomeScreen;


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