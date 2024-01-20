import { NavigationContainer, StackActions, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, Button, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainHeader from "./components/MainHeader";
import HeaderTitle from "./components/HeaderTitle";
import { userStore } from './storage/user'; 

import {
    Record,
    Report,
    Dashboard
  } from "./screens"
  
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    const navigation = useNavigation();
    const removeToken = userStore(state => state.removeToken);

    const handleLogout = () => {  
      removeToken();
      navigation.dispatch(StackActions.popToTop());
    };
    const getRandomNumber = () => {
      return Math.floor(Math.random() * (10 - 0 + 1)) + 1;
    }
    
    return (

        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#28a745',
            headerLeft: () => <MainHeader />,
            headerTitle: () => <HeaderTitle>REPORTING APP</HeaderTitle>,
            headerRight: () => ( <Button
              icon="logout"
              onPress={handleLogout}
              title="Info"
            >Logout</Button>),
          }}>
            <Tab.Screen name="Dashboard" component={Dashboard}  
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => {
                      return <Icon name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen name="Report" component={Report} key={getRandomNumber}
               options={{
                tabBarLabel: 'Reports',
                tabBarIcon: ({ color, size }) => {
                      return <Icon name="file-document" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen name="Record" component={Record} initialParams={{ tray: [] }} 
               options={{
                tabBarLabel: 'Add Records',
                tabBarIcon: ({ color, size }) => {
                      return <Icon name="file-plus" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;