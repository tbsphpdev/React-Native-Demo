import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar, Image, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Button } from 'react-native-elements';
import MS from '../../constants/Styles'
import BackButton from '../../components/UI/BackButton'

const TermsConditions = (props) => {
    const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width)
    return (<>
        <StatusBar barStyle="light-content" backgroundColor="#1D6D91" />
        <SafeAreaView>
            <ScrollView>
            <View style={styles.headerRow}>
                <View style={styles.backButton}>
                    <BackButton onPress={() => props.navigation.goBack()} />
                </View>
            </View>
            <View style={{ ...styles.termsMainSection, ...styles.container }}>
                    <Text style={{ ...styles.termsMainText }}>Terms Of Use</Text>
                    <Text style={{ ...styles.termsDescriptionText }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions ofLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of lorem.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    </>
    )
};


const styles = ScaledSheet.create({
    // container: {
    //     ...MS.spaceBetweenCol,
    //     width: '100%',
    //     height: '100%',
    //     alignItems: 'center',
    //     backgroundColor: '#1D6D91'
    // },
    // header: {
    //     ...MS.spaceBetweenCol,
    //     alignItems: 'center'
    // },
    // signInForm: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     paddingVertical: '15@ms'
    // },
    // vetClickText: {
    //     color: '#ffffff',
    //     fontSize: '40@ms',
    //     fontWeight: 'bold'
    // },
    // VCTextInput: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: '15@ms',
    //     backgroundColor: '#104B79',
    //     width: '100%',
    //     borderRadius: 50,
    //     paddingVertical: '15@ms',
    //     paddingHorizontal: '15@ms',
    //     marginBottom: '25@ms'
    // },
    // VCLoginButton: {
    //     backgroundColor: '#104B79',
    //     width: '95%'
    // },
    // register: {
    //     fontSize: '17@ms',
    //     color: '#FFFFFF',
    //     fontWeight: 'bold'
    // }
    backButton: {
        width: '100%',
        alignItems: 'flex-start',
        paddingTop: '15@ms',
        paddingLeft: '15@ms',
        backgroundColor: '#1D6D91'
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
    termsMainSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '15@ms',
        paddingHorizontal: '15@ms',        
    },
    termsMainText: {
        color: '#ffffff',
        fontSize: '40@ms',
        fontWeight: 'bold',
        marginBottom: '10@ms'
    },
    termsDescriptionText: {
        fontSize: '17@ms',
        color: '#FFFFFF',
        marginBottom: '10@ms'
    }
});


export default TermsConditions;