import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


function LoginScreen({ navigation }) {
    return (
        <View style={styles.appContainer}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login with Supervisor"
                    onPress={() => navigation.navigate('SupervisorHome')}
                />
            </View>
            <Text style={styles.textContainer}>
                Or
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Login with Operator"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>

    );
}



export default LoginScreen;



const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 16,
        padding: 16,
        width: 250
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
    },

});