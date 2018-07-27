import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';

const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '78.77';

class Home extends Component {
    constructor(props) {
        super(props);
        this.handlePressBaseInput = this.handlePressBaseInput.bind(this)
    }
    handlePressBaseInput = () => {
        console.log('press base')
    }
    handlePressQuoteInput = () => {
        console.log('press quote')
    }
    handleTextChange = (text) => {
        console.log('change text', text)
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                <InputWithButton
                    onPress={this.handlePressBaseInput}
                    buttonText={TEMP_BASE_CURRENCY}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleTextChange}
                ></InputWithButton>
                <InputWithButton
                    onPress={this.handlePressBaseInput}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    editable={false}
                    defaultValue={TEMP_QUOTE_PRICE}
                ></InputWithButton>
                <View />
            </Container>)
    }
}

export default Home;