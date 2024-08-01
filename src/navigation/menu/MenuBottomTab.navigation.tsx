import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Slide1 } from '../../screens';
import { Entypo, Feather } from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Slide2: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Slide1">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Slide1" component={Slide1}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} colors="black"/>
                    )
                }}
            />
            <Tab.Screen name="Slide2" component={Slide1}
                options={{
                    tabBarIcon: () => (
                        <Feather name="sliders" size={24} colors="black"/>
                    )
                }}
            />
       </Tab.Navigator>
    )
}