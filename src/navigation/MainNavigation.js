import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import LoginScreen from '../../src/screens/user/LoginScreen';
import ForgotPasswordScreen from '../../src/screens/user/ForgotPasswordScreen';
import TermsConditionsScreen from '../../src/screens/user/TermsConditions';
import HomeScreen from '../../src/screens/home/HomeScreen';
import CaptureImageScreen from '../../src/screens/home/CaptureImageScreen';
import LocationScreen from '../../src/screens/home/LocationScreen';
import DrawerContainer from '../components/UI/DrawerContainer'
import HomeButton from '../components/UI/HomeButton'

const tabScreenConfig = {
    Home: {
        screen: createStackNavigator({
            HomeScreen: HomeScreen,
            CaptureImageScreen: CaptureImageScreen,
            LocationScreen: LocationScreen,
        }, {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#1D6D91',
                    height: 100
                },
                headerTintColor: '#1D6D91',
            }
        }),
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <HomeButton active={tabInfo.focused} />
            },
            tabBarVisible: false
        }
    }
}

const TabNavigator = createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: '#1D6D91',
        showLabel: false
    }
})

const AppNavigator = createDrawerNavigator(
    { App: TabNavigator },
    {
        contentComponent: (props) => <DrawerContainer {...props} />,
        drawerBackgroundColor: 'transparent'
    }
)

const AuthNavigator = createStackNavigator({
    Auth: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    TermsConditions: TermsConditionsScreen
}, {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    App: AppNavigator
})

export default createAppContainer(MainNavigator)