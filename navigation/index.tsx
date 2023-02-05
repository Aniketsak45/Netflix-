/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {AntDesign, MaterialIcons,Entypo,Ionicons} from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen/index';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
     
    
     <BottomTab.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ 
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color="#fff" />,
        }}
      />

<BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown:false,
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color="#fff" />,
        }}
      />
      
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoScreen}
        options={{
          title: 'Video-Library',
          tabBarIcon: ({ color }) => <Entypo  name="folder-video" size={24} color="#fff" />,
        }}
      />
       <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color="#fff" />,
        }}
      />
       <BottomTab.Screen
        name="Downloads"
        component={TabTwoScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <Ionicons  name="cloud-download"ize={24} color="#fff" />,
        }}
      />
    </BottomTab.Navigator>
  );
}



