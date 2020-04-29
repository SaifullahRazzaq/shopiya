// import React,{Component} from 'react';
// import { View, Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
// import {Icon} from 'react-native-elements';
// import Profile from '../Screen/Profile';
// import Account from '../Screen/Account';
// import Setting from '../Screen/Setting';
// import Address from '../Screen/Address';
// import Wishlist from '../Screen/WishList';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {createStackNavigator} from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import App from '../App';

// class Drawer extends Component {
//   //Structure for the navigatin Drawer
//   toggleDrawer = () => {
//     //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//         <App toggleDrawer={this.props.toggleDrawer}/>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


// const Profile_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   First: {
//     screen:Profile,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Profile',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });


// const Account_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: Account,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Account',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Setting_StackNavigator = createStackNavigator({
//   //All the screen from the Screen3 will be indexed here
//   Third: {
//     screen: Setting,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Setting',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Address_StackNavigator = createStackNavigator({
//   //All the screen from the Screen3 will be indexed here
//   Third: {
//     screen:Address,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Address',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#FF9800',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const Wishlist_StackNavigator = createStackNavigator({
//   //All the screen from the Screen3 will be indexed here
//   Third: {
//     screen:Address,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Address',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: 'Green',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const DrawerNavigator = createDrawerNavigator({
//   //Drawer Optons and indexing
//   Profile: {
//     //Title
//     screen: Profile_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Profile',
//       drawerIcon:<Icon name="profile" type="antdesign"/>
//     },
//   },
//   Account: {
//     //Title
//     screen: Account_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Account',
//       drawerIcon:<Icon name="user" type="entypo"/>
//     },
//   },
//   Setting: {
//     //Title
//     screen:Setting_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Setting',
//       drawerIcon:<Icon name="setting" type="antdesign"/>
//     },
//   },


//   Address: {
//     //Title
//     screen:Address_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Address',
//       drawerIcon:<Icon name="address" type="entypo"/>
//     },
//   },
//   Wishlist: {
//     //Title
//     screen:Wishlist_StackNavigator,
//     navigationOptions: {
//       drawerLabel: 'Wishlist',
//       drawerIcon:<Icon name="list" type="entypo"/>
//     },
//   },

// })

// export default createAppContainer(DrawerNavigator)