import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar, Image, Dimensions, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import MS from '../../constants/Styles'
import HomeButton from '../../components/UI/HomeButton'
import ImagePicker from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import PlusButton from '../../components/UI/PlusButton';
import { Button } from 'react-native-elements';

const HomeScreen = (props) => {
    const [mediaURI, setMediaURI] = React.useState(null)
    const [mediaData, setMediaData] = React.useState(null)
    const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width)

    const verifyPermissions = async () => {
        var permissionsFlag = await check(Platform.select({
            android: PERMISSIONS.ANDROID.CAMERA,
            ios: PERMISSIONS.IOS.CAMERA,
        })).then(result => {
            switch (result) {
                case RESULTS.UNAVAILABLE:
                case RESULTS.DENIED:
                case RESULTS.BLOCKED:
                    var permissionsFlag = request(Platform.select({
                        android: PERMISSIONS.ANDROID.CAMERA,
                        ios: PERMISSIONS.IOS.CAMERA,
                    })).then(result => {
                        if (result == 'granted') {
                            return true;
                        } else {
                            Alert.alert(
                                'Insufficient Permissions!',
                                'Please go to Settings to grant Camera Roll & Camera permissions to this app.',
                                [{ text: 'Okay' }]
                            )
                            return false;
                        }
                    });
                    return permissionsFlag;
                case RESULTS.GRANTED:
                    return true;
            }
        })

        if (permissionsFlag == true) {
            return true;
        } else {
            return false;
        }
    }
    const chooseImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) {
            return
        }
        ImagePicker.showImagePicker({
            mediaType: 'Images',
            allowsEditing: true,
            quality: 0.5
        }, (res) => {
            if (res.cancelled) {
                return
            }
            setMediaURI(res.uri)
            setMediaData(res.data)
        })
    }
    return (<>
        <StatusBar barStyle="light-content" backgroundColor="#1D6D91" />
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={chooseImageHandler}>
                {!!mediaURI ?
                    <>
                        <View style={{ ...styles.uploadMediaSelected }}>
                            <Image style={{ height: '100%', width: '100%' }} source={{ uri: mediaURI }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <Button onPress={() => { }} title="Submit" color="#FFFFFF" />
                        </View>
                    </>
                    :
                    <>
                        <View style={{ ...styles.uploadMediaEmpty }}>
                            <PlusButton width='25' height='25' />
                        </View>
                        <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.register}>Capture Image?</Text>
                        </View>
                    </>
                }
            </TouchableOpacity>
            <View style={{ ...styles.signInForm, width: (screenWidth - 100) * (346 / 362) }}>
                <Image source={require('../../assets/images/logo_w.png')} />
            </View>
        </ScrollView>
    </>
    )
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Capture Image',
        headerLeft: () => <HomeButton onPress={() => navData.navigation.toggleDrawer()} />
    }
}


const styles = ScaledSheet.create({
    uploadMediaEmpty: {
        ...MS.centerCol,
        width: 200,
        height: 200,
        alignItems: 'center',
        borderRadius: 100,
        borderStyle: 'dashed',
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#E5E5E5',
        marginTop: 50
    },
    container: {
        ...MS.spaceBetweenCol,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#1D6D91'
    },
    header: {
        ...MS.spaceBetweenCol,
        alignItems: 'center'
    },
    signInForm: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '15@ms'
    },
    vetClickText: {
        color: '#ffffff',
        fontSize: '40@ms',
        fontWeight: 'bold'
    },
    VCTextInput: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '15@ms',
        backgroundColor: '#104B79',
        width: '100%',
        borderRadius: 50,
        paddingVertical: '15@ms',
        paddingHorizontal: '15@ms',
        marginBottom: '25@ms'
    },
    VCLoginButton: {
        backgroundColor: '#104B79',
        width: '95%'
    },
    register: {
        fontSize: '17@ms',
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    uploadMediaSelected: {
        ...MS.centerCol,
        width: 200,
        height: 200,
        alignItems: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 50
    },
});


export default HomeScreen;