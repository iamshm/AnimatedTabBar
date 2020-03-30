import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { HomeScreen, SearchScreen, CartScreen, ProfileScreen } from './screens'
import AddButton from './component/AddButton'
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#6647CC" />

            }
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="search" size={24} color="#BBA6FF" />

            }
        },
        Add: {
            screen: () => null,
            navigationOptions: {
                tabBarIcon: <AddButton />
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="shopping-cart" size={24} color="#BBA6FF" />

            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: () => <FontAwesome5 name="user" size={24} color="#BBA6FF" />

            }
        }

    },
    {
        tabBarOptions: {
            showLabel: false,

        }
    }

);
export default createAppContainer(TabNavigator);