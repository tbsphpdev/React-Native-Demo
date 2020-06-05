import React from 'react';
import Svg, { Circle, Rect, Defs, Pattern, Image, Use, G, ClipPath, Path } from 'react-native-svg'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={props.onPress} style={styles.container}>
                <Svg width='35' height='35' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Circle cx="9.5" cy="9.5" r="9.5" fill="#000" />
                    <Path fill="white" d="M14.8447 9.46265H4.4565C4.20439 9.46265 4 9.66702 4 9.91915C4 10.1713 4.20439 10.3757 4.4565 10.3757H14.8447C15.0968 10.3757 15.3012 10.1713 15.3012 9.91915C15.3012 9.66704 15.0968 9.46265 14.8447 9.46265Z" />
                    <Path fill="white" d="M14.8447 6H4.4565C4.20439 6 4 6.20439 4 6.4565C4 6.70862 4.20439 6.91301 4.4565 6.91301H14.8447C15.0968 6.91301 15.3012 6.70862 15.3012 6.4565C15.3012 6.20439 15.0968 6 14.8447 6Z" />
                    <Path fill="white" d="M14.8447 12.9253H4.4565C4.20439 12.9253 4 13.1297 4 13.3818C4 13.6339 4.20439 13.8383 4.4565 13.8383H14.8447C15.0968 13.8383 15.3012 13.6339 15.3012 13.3818C15.3012 13.1297 15.0968 12.9253 14.8447 12.9253Z" />
                </Svg>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
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
        backgroundColor: '#000',
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


export default HomeButton;