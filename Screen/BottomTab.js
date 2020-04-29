// import React,{Component} from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/native-stack';
// import { Icon } from 'react-native-elements'
// import HomeScreen from '../screens/Home';
// import PyamentScreen from '../screens/Cart';
// import OrderSummary from '../screens/OrderSummary';
// import OrderSucess from '../screens/OrderSuccess';


// const Tab = createBottomTabNavigator();

// const MainTabScreen = () => (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#fff"
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarColor: '#009387',
//           tabBarIcon: ({ color }) => (
//             <Icon name="md-home" type="ionicon" color="black" size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={PyamentScreen}
//         options={{
//           tabBarLabel: 'Cart',
//           tabBarColor: '#1f65ff',
//           tabBarIcon: ({ color }) => (
//             <Icon name="add-shopping-cart" type="materialicon" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={OrderSummary}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarColor: '#694fad',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-person" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={OrderSucess}
//         options={{
//           tabBarLabel: 'Explore',
//           tabBarColor: '#d02860',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-aperture" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
// );

// export default MainTabScreen;