import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting =  'Wachid';
    return (
        <View>
            <Text style={styles.text}>This is the components screen</Text>
            <Text style={styles.subHeader}>Hello, Mr. {greeting}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;