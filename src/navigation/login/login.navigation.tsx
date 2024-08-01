import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Login, Register, Slide1 } from '../../screens'

type LoginStackParamList = {
    Login: undefined
    Register: undefined
    Slide1: undefined
}

type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}

export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList> ()
    return (
        <Stack.Navigator id='login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Slide1' component={Slide1} />
        </Stack.Navigator>
    )
    }