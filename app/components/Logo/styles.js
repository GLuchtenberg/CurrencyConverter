import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 1.5;

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth
    },
    image: {
        width: imageWidth / 2
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        letterSpacing: -0.5,
        color: '$white',
        marginTop: 15
    }
});
