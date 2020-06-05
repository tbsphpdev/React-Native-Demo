import React from 'react';
import Svg, { Path } from 'react-native-svg'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import MS from '../../constants/Styles';

const BackButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M0.645887 4.10611C0.450932 4.30178 0.451429 4.61837 0.646995 4.81322L3.83396 7.9885C4.02953 8.18336 4.34611 8.18269 4.54106 7.98702C4.73602 7.79135 4.73552 7.47476 4.53996 7.27991L1.7071 4.45744L4.53108 1.62307C4.72604 1.42739 4.72554 1.11081 4.52998 0.915959C4.33441 0.721108 4.01783 0.721773 3.82287 0.917446L0.645887 4.10611ZM19.0269 3.92102L0.99921 3.95892L1.00078 4.95892L19.0285 4.92102L19.0269 3.92102Z" fill="black" />
            </Svg>
            <Text style={{ marginLeft: 4 }}>Back</Text>

        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    container: {
        ...MS.flexStartRow,
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    absolute: {
        position: 'absolute',
        top: -7,
        right: -7,
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#1D6D91',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    notificationText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: 'white'
    }
});


export default BackButton;


