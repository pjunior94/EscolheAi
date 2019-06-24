import React from 'react';

import { View, StyleSheet, FlatList} from 'react-native';

import CardItem  from "./../carditem";

const CardList = ({
    items
}) => (
    <View>
        <FlatList
            data={items}
            renderItem={({item}) => <CardItem item={item} ></CardItem>}
            keyExtractor={this.keyExtractor}
            />
    </View>
)

export default CardList;