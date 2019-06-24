import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const CardItem = ({
    item
}) => (
    <View style={styles.cardContainer}>
        <Text 
            style={styles.cardItemText} 
            key={item}>
                {item}
        </Text>
    </View>
);

export default CardItem

const styles = StyleSheet.create({
    cardItemText: {
        fontSize: 26
    },
    cardContainer: {
        borderColor: '#000',
        borderStyle: 'solid',
        backfaceVisibility: 'visible'
    }
})