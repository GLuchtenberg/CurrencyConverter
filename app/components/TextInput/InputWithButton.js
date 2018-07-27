import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';
import styles from './styles';

class InputWithButton extends Component {
    render() {
        const { onPress, buttonText, editable } = { ...this.props }
        const containerStyles = [styles.container];
        if (!editable) {
            containerStyles.push(styles.containerDisabled)
        }
        const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
            styles.$buttonBackgroundColorModifier
        );
        return (
            <View style={containerStyles}>
                <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
                    <Text style={styles.buttonText} >{buttonText}</Text>
                </TouchableHighlight>
                <View style={styles.border} />
                <TextInput style={styles.input} underlineColorAndroid="transparent" {...this.props} />
            </View>
        );
    }
}

InputWithButton.PropTypes = {
    onPress: PropTypes.func,
    editable: PropTypes.bool,
    buttonText: PropTypes.string
}
InputWithButton.defaultProps = {
    editable: true
}
export default InputWithButton;