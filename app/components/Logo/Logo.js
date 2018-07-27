import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';

import styles from './styles';

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/logo.png')} >
                    <Image resizeMode="contain" source={require('./images/logothunder.png')} style={styles.image} />
                </ImageBackground>
                <Text style={styles.text}>Bbeer</Text>
            </View>
        );
    }
}