import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import ShipmentDetailsScreen from './src/screens/operator/ShipmentDetailsScreen';
import ProfileScreen from './src/screens/operator/ProfileScreen';
import ShipmentScreen from './src/screens/operator/ShipmentScreen';
import HomeScreen from './src/screens/operator/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import Userlist from './src/screens/supervisor/Userlist';
import Track from './src/screens/supervisor/Track';
import UserlistDetails from './src/screens/supervisor/UserListDetails';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <Provider store={Store}>


      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={OperatorDrawer} />
          <Stack.Screen name="SupervisorHome" component={SupervisorDrawer} />
          <Stack.Screen name="Details" component={ShipmentDetailsScreen} />
          <Stack.Screen name="UserlistDetails" component={UserlistDetails} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}



// Operator Screen Components 


function OperatorDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
      <Drawer.Screen name="Home" component={OperatorTab} options={{
        headerLeft: null,
      }} />
      <Drawer.Screen name="Shipment" component={ShipmentScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

    </Drawer.Navigator>

  );
}

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home-sharp';
      break;
    case 'Profile':
      iconName = 'md-person';
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} color={color} size={24} />;
};

function OperatorTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}


// Supervisor Screen Components



function SupervisorDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard"
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
      <Drawer.Screen name="Dashboard" component={SupervisorTab} options={{
        headerLeft: null,
      }} />
      <Drawer.Screen name="Userlist" component={Userlist} />
      <Drawer.Screen name="Track" component={Track} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />

    </Drawer.Navigator>

  );
};

function SupervisorTab() {
  return (


    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>

  );
};