import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, ScrollView, View, StatusBar, Image, Dimensions, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
import MS from '../../constants/Styles'
import Input from '../../components/UI/Input'
import { forgotPassword } from '../../store/actions/auth';

const LoginScreen = (props) => {
    const dispatch = useDispatch()
    const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width)
    const loading = useSelector(state => state.auth.loading)
    const authError = useSelector(state => state.auth.error)
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')

    const onInputChange = React.useCallback((id, value, validity) => {
        if (!validity) {
            if (id === 'email' && value == '') {
                setError('Please provide a valid username.')
            }
        } else {
            setError('')
            if (id === 'email') {
                setEmail(value)
            }
        }
    }, [])

    const handleSubmit = (e) => {
        if (!email) {
            setError('Please provide an username.')
            return;
        }
        dispatch(forgotPassword(email))
    }

    return (<>
        <StatusBar barStyle="light-content" backgroundColor="#1D6D91" />
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                </View>
                <View style={{ ...styles.signInForm, width: (screenWidth - 100) * (346 / 362) }}>
                    <Image source={require('../../assets/images/logo_w.png')} />
                    {error || authError ? <Text style={styles.errorHeader}>{error || authError}</Text> : <Text></Text>}
                    <Input
                        style={{ ...styles.VCTextInput, marginTop: 40 }}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onInputChange={onInputChange} required id='email'
                    />

                    <View style={{ ...styles.VCLoginButton }}>
                        {loading ? <ActivityIndicator size='large' color='#4BDC3E' /> : <Button onPress={handleSubmit} title="Submit" color="#FFFFFF" />}
                    </View>

                    <TouchableOpacity style={{ marginTop: 44 }} onPress={() => {
                        props.navigation.navigate('Auth')
                    }}>
                        <Text style={styles.register}>Sign In?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
    )
};


const styles = ScaledSheet.create({
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
        fontWeight: 'bold'
    },
    errorHeader: {
        color: 'red',
        marginTop: 10
    },
});


export default LoginScreen;