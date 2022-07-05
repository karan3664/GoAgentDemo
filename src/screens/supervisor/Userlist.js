import { FlatList, Pressable, StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApiAsync } from '../../redux/actions';

function Userlist({ navigation }) {
    const { data } = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getDataFromApiAsync());
    }, []);

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}

                renderItem={({ item }) => (

                    <View >

                        <Pressable android_ripple={{ color: 'blue' }} onPress={() => navigation.navigate('UserlistDetails', { item })} >
                            <Text style={styles.companyItem}>
                                {item.name}
                            </Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>

    );
};

export default Userlist;


const styles = StyleSheet.create({

    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    companyItem: {
        margin: 8,
        fontSize: 20,
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white',
    },
});