import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Container } from "../../components";

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            place: '',
            places: []
        }
    }

    _raffle = () => {
        const {places} = this.state
        const placeMinLength = 0

        let placeMaxLength = places.length

        let placeIndex = Math.floor(Math.random() * (placeMaxLength - placeMinLength)) + placeMinLength
        
        const place = places.filter((item, index) => {
            return index == placeIndex
        })

        return place[0]
    }

    checkFields = (place) => {
        if (place == '' || place.indexOf(-1) == '') {
            Alert.alert(
                'Erro',
                'Campo não preenchido :(',
                [
                    { text: 'OK' },
                ],
                { cancelable: false }
            );

            return
        }
    }

    addPlace = () => {
        const { place } = this.state

        this.checkFields(place)
        
        this.state.places = [...this.state.places, place]
        
        this.eraseCurrentTypedPlace()
        console.log(this.state.places)
    }

    eraseCurrentTypedPlace = () => {
        this.setState({place: ''})
    }

    removePlace = () => {
        
    }

  render() {

    const places = this.state

    return (
        <Container isScrollable={true}>
            <View style={styles.home}>
                <TextInput
                    style={styles.input}
                    label='Lugar'
                    value={this.state.place}
                    onChangeText={place => this.setState({ place })}
                />
                <Button icon="add-a-photo" mode="contained" onPress={this.addPlace}>
                    Adicionar
                </Button>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this._raffle}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}> Sortear </Text>
                </TouchableOpacity>

                {/* <FlatList
                    data={places}
                    renderItem={({place}) => <Text key={place.key}>{place.key}</Text>}
                    /> */}
            </View>
        </Container>
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