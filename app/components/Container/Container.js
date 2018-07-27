import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

export default class extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}