import React from 'react';

import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const Container = ({
    children,
    isScrollable = true
}) => (
    <SafeAreaView style={styles.safearea}>
        {
            isScrollable ? 
            (
                <ScrollView scrollEnabled={isScrollable} style={styles.view}>
                    {children}
                </ScrollView>
            ) : 
            (
                <View style={styles.view}>
                    {children}
                </View>
            )
        }
        
    </SafeAreaView>

);

export default Container;

const styles = StyleSheet.create({
    safearea: {
        flex: 1, 
        backgroundColor: `#fff`,
        margin: '4%'
    },
    view: {
        flex: 1
    }
})