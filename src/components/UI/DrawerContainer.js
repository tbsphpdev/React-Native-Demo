import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, ScrollView, SafeAreaView, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import MS from '../../constants/Styles'
import { logoutUser } from '../../store/actions/auth'

const DrawerContainer = (props) => {
    const dispatch = useDispatch()

    return (
        <View style={styles.outerContainer}>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <View>
                    <View style={{ ...styles.appNameRow, marginTop: 16 }}>
                        <Text >Test</Text>
                    </View>
                    <View style={styles.appNameRow}>
                        <Text >@test</Text>
                    </View>
                    <View style={{ ...MS.centerRow, marginTop: 23 }}>
                        <View style={{ borderStyle: 'solid', borderWidth: 0.3, borderColor: '#C4C4C4', width: 217, height: 1 }} />
                    </View>
                    <View style={styles.linkContainer}>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('HomeScreen')
                        }}>
                            <Text style={styles.link}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('CaptureImageScreen')
                        }}>
                            <Text style={styles.link}>Capture Image</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate('LocationScreen')
                        }}>
                            <Text style={styles.link}>Location</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            dispatch(logoutUser())
                            props.navigation.navigate('Auth')
                        }}>
                            <Text style={styles.link}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
};


const styles = StyleSheet.create({
    outerContainer: {
        height: Dimensions.get('window').height - 10,
    },
    container: {
        ...MS.spaceBetweenCol,
        height: Dimensions.get('window').height - 10,
        backgroundColor: '#1D6D91',
        borderRadius: 30,
    },
    notificationsRow: {
        ...MS.flexEndRow,
        marginTop: 41,
        paddingRight: 22
    },
    appNameRow: {
        ...MS.centerRow
    },
    appName: {
    },
    profilePicRow: {
        ...MS.centerRow,
        marginTop: 20
    },
    profilePic: {
        width: 98,
        height: 98,
        borderRadius: 49,
        overflow: 'hidden'
    },
    linkContainer: {
        ...MS.flexStartCol,
        width: '100%',
        paddingLeft: 30,
        marginTop: 52
    },
    link: {
        marginBottom: 12
    },
    footerRow: {
        ...MS.centerRow,
        marginBottom: 66
    },
    logOut: {
        textDecorationLine: 'underline',
        color: '#FFF'
    }
});


export default DrawerContainer;