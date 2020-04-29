
import React, { Component } from 'react';
import Splash from './Screen/SplashScreen'
import Signup from './Screen/Signup'
import Signin from './Screen/Signin'
import { Icon } from 'react-native-elements'
import HomeScreen from './Screen/Home';
import CartScreen from './Screen/Cart';
import HistoryScreen from './Screen/OrderSummary';
import Notifications from './Screen/Notification'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Screen/Profile';
import Account from './Screen/Account';
import Setting from './Screen/Setting';
import Address from './Screen/Address';
import Wishlist from './Screen/WishList';
import MapScreen from './Screen/MapScreen'
import ShopScreen from './Screen/ShopScreen';
import ProductScreen from './Screen/ProductScreen'
import { AppRegistry } from 'react-native';
import CodeScreen from './Screen/Qrcode';
import { Font } from 'expo';




const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();





const DrawerScreen = ({ navigation }) => {
  return (


    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Grocery" component={MainTabScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )


}


function MyDrawer({ navigation }) {
  return (



    <Drawer.Navigator screenOptions={{


      swipeEnabled: true,

    }}>
      
      <Drawer.Screen name="Home" component={DrawerScreen} options={{ drawerIcon: ({ }) => (<Icon name="home" type="antdesign" color="black" size={20} />) }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ drawerIcon: ({ }) => (<Icon name="user" type="entypo" color="black" size={20} />) }} />
      <Drawer.Screen name="Account" component={Account} options={{ drawerIcon: ({ }) => (<Icon name="user-circle" type="font-awesome" color="black" size={20} />) }} />
      <Drawer.Screen name="Setting" component={Setting} options={{ drawerIcon: ({ }) => (<Icon name="setting" type="antdesign" color="black" size={20} />) }} />
      <Drawer.Screen name="Address" component={Address} options={{ drawerIcon: ({ }) => (<Icon name="address-card-o" type="font-awesome" color="black" size={20} />) }} />
      <Drawer.Screen name="Wishlist" component={Wishlist} options={{ drawerIcon: ({ }) => (<Icon name="heart-outlined" type="entypo" color="black" size={20} />) }} />
      <Drawer.Screen name="Logout" component={""} options={{ drawerIcon: ({ }) => (<Icon name="logout" type="antdesign" color="black" size={20} />) }} />

    </Drawer.Navigator>

  )
}

const MainTabScreen = () => (

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
          <Icon name="md-home" type="ionicon" color={color} size={30} />
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
          <Icon name="add-shopping-cart" type="materialicon" color={color} size={30} />
        ),
      }}
    />


<Tab.Screen
      name="CodeScreen"
      component={CodeScreen}
      options={{
        tabBarLabel: 'CodeScreen',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="qrcode" type="antdesign" color={color} size={30} />
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
          <Icon name="history" color={color} size={30} />
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
          <Icon name="notifications" color={color} size={30} />
        ),
      }}
    />
  </Tab.Navigator>

);


const Stack = createStackNavigator();

function MyStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
      ;
  }

  render() {
    return (

      <MyStack />

    );
  }
}







export default App;
AppRegistry.registerComponent('App', () => App);
