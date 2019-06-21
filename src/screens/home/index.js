import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            place: '',
            places: []
        }
    }

    _raffle = () => {
        
    }

    _addPlace = () => {

    }

    _removePlace = () => {

    }

  render() {
    return (
        <View style={styles.home}>
             <TextInput
                label='Lugar'
                value={this.state.place}
                onChangeText={place => this.setState({ place })}
            />
            <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
                Adicionar
            </Button>

            <TouchableOpacity
                style={styles.button}
                onPress={this._raffle}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}> Sortear </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        color: '#3A5EE3'
    },
    buttonText: {
        color: '#D4D9EB'
    }
})