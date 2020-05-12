import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import {SignInScreen} from "./SplashComponent";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

const StackNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    SignInScreen: {
        screen: SignInComponent,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen: {
        screen: SignUpComponent,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);
