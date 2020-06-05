import React from 'react';
import { SafeAreaView, ScrollView, View, StatusBar, Image, Dimensions, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import MS from '../../constants/Styles'
import HomeButton from '../../components/UI/HomeButton'
import ImagePicker from 'react-native-image-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import PlusButton from '../../components/UI/PlusButton';
import { Button } from 'react-native-elements';

import { Container, Header, Content, Tab, Tabs } from 'native-base';

const HomeScreen = (props) => {
    const [screenWidth, setScreenWidth] = React.useState(Dimensions.get('window').width)
    return (<>
        <StatusBar barStyle="light-content" backgroundColor="#1D6D91" />
        <ScrollView contentContainerStyle={styles.container}>
            <Container>
                <Tabs>
                    <Tab heading="Tab1">
                        <Text>Content for Tab 1</Text>
                    </Tab>
                    <Tab heading="Tab2">
                        <Text>Content for Tab 2</Text>
                    </Tab>
                    <Tab heading="Tab3">
                        <Text>Content for Tab 3</Text>
                    </Tab>
                </Tabs>
            </Container>
            <View style={{ ...styles.signInForm, width: (screenWidth - 100) * (346 / 362) }}>
                <Image source={require('../../assets/images/logo_w.png')} />
            </View>
        </ScrollView>
    </>
    )
};

HomeScreen.navigationOptions = navData => {
    return {
        headerTitle: '',
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