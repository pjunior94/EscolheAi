import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Container } from "../../components";
import { CardList } from "../../components";

export default class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            place: '',
            result: '',
            places: []
        }
    }

    raffle = () => {
        const {places} = this.state
        const placeMinLength = 0

        let placeMaxLength = places.length

        if (places.length >= 2) {
            let placeIndex = Math.floor(Math.random() * (placeMaxLength - placeMinLength)) + placeMinLength
        
            const place = places.filter((item, index) => {
                return index == placeIndex
            })

            this.setState({result: place[0]})
        } else {
            Alert.alert(
                'Erro',
                'Não foi possível realizar a escolha. Tente novamente.',
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
        const { places } = this.state

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

        if (place != '' && place.indexOf(-1) != '') {

            const item = places.find(item => item == place)
            if (item != undefined || item != '') {
                Alert.alert(
                    'Erro',
                    `Já existe um registro com o nome: ${place} na lista. Tente novamente!`,
                    [
                        { text: 'OK' },
                    ],
                    { cancelable: false }
                );
                return
            }
        }

        this.setState({
            places: [...places, place]
        })

        this.cleanFields()
    }

    cleanFields = () => {
        this.setState({
            place: ''
        })
    }

    removePlace = (elementIndex) => {
        //TODO: test if it is working properly.
        let places = [
            ...state.filter((item, index) => {
                if (index === elementIndex) {
                    return false
                }
                return true
            })
        ]

        this.setState({
            places
        })
    }

    keyExtractor = index => index.toString();

  render() {

    let {
        places, 
        result
    } = this.state

    return (
        <Container isScrollable={true}>
            <View style={styles.home}>
                <TextInput
                    style={styles.input}
                    label='O que? Onde? Quem?'
                    value={this.state.place}
                    onChangeText={place => this.setState({ place })}
                />
                <Button 
                    style={styles.buttonAdd}
                    icon="add" 
                    mode="contained" 
                    onPress={this.addPlace}>
                    Adicionar
                </Button>

                <CardList items={places}></CardList>

                <Button 
                    style={styles.buttonRaffle}
                    icon="casino" 
                    mode="contained" 
                    onPress={this.raffle}
                >
                    Sortear
                </Button>
                <View style={styles.viewResulText}>
                    <Text style={styles.resultText}>{result}</Text>
                </View>
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
    buttonAdd: {
        fontSize: 20,
        marginTop: 4,
        color: '#3A5EE3'
    },
    buttonRaffle: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 20,
        backgroundColor: '#4f9973'
    },
    input: {
        backgroundColor: '#fff'
    },
    resultText: {
        fontSize: 20
    },
    viewResulText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})