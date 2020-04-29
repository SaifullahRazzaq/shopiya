import React,{Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import HomeScreen from '../Screen/Home';
import CartScreen from '../Screen/Cart';
import HistoryScreen from '../Screen/OrderSummary';
// import OrderSucess from '../Screen/OrderSucess'
import Notifications from '../Screen/Notification'
import { NavigationContainer } from '@react-navigation/native';




const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <NavigationContainer>

    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" type="ionicon" color={color} size={26} />
            ),
          }}
          />
      <Tab.Screen
        name="Notifications"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="add-shopping-cart" type="materialicon" color={color} size={26} />
            ),
          }}
      />
      <Tab.Screen
        name="Profile"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="history" color={color} size={26} />
            ),
          }}
          />
      <Tab.Screen
        name="Explore"
        component={Notifications}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={26} />
            ),
          }}
          />
    </Tab.Navigator>
          </NavigationContainer>
);

export default MainTabScreen;