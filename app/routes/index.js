import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator, DrawerContentScrollView ,DrawerItem} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeStack from '../view/pages/home/instagram/screens/HomeScreen';
import UserAccountStack from '../view/pages/Profile/screen/index';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {AuthStack} from './auth';
import {MainStack} from './main';
import images from '../assets/images/images';
import { CustomDrawerContent } from './DrawerContent';

const Stack = createStackNavigator();

export const Router = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {!signIn ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="MainStack" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileDrawer = createDrawerNavigator();

export const Profile = () => {
  return (
    <ProfileDrawer.Navigator
      drawerStyle={{
        backgroundColor: '#ffffff',
        width: 240,
        borderRadius: 10,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerPosition="right"
      headerMode="none">
      <ProfileDrawer.Screen
        name="UserAccount"
        component={UserAccountStack}
        options={{drawerLabel: 'Home'}}
      />
      {/* <ProfileDrawer.Screen name="Archive" component={ArchiveStack} /> */}
    </ProfileDrawer.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

export const HomeBottomTab = () => {
  return (
    <Tabs.Navigator tabBarOptions={{showLabel: false}}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="NewPostStack"
        component={NewPostStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="plus-box-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="UserAccountStack"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showIcon: true,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
      initialRouteName="ListPost">
      <Tab.Screen
        name="ListPost"
        component={ListStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="IgTvPost"
        component={IgTvStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="television-classic"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TagPost"
        component={TagStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-star-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function SearchStack() {
  return (
    <View style={styles.container}>
      <Text>SearchScreen! </Text>
    </View>
  );
}
export function NewPostStack() {
  return (
    <View style={styles.container}>
      <Text>NewPostScreen! </Text>
    </View>
  );
}
function NotificationStack() {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen! </Text>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;

export function ArchiveStack() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ArchiveScreen!</Text>
    </View>
  );
}
export function SettingStack() {
  return (
    <View style={styles.container}>
      <Text>SettingScreen!</Text>
    </View>
  );
}
export function ListStack() {
  return (
    <View style={styles.containerPost}>
      <Image style={styles.imagePost} source={images.images.pic1} />
      <Image style={styles.imagePost} source={images.images.pic3} />
      <Image style={styles.imagePost} source={images.images.pic1} />
    </View>
  );
}
export function IgTvStack() {
  return (
    <View style={styles.containerIgTv}>
      <Image style={styles.imageIgTv} source={images.images.pic4} />
      <Image style={styles.imageIgTv} source={images.images.pic5} />
      <Image style={styles.imageIgTv} source={images.images.pic2} />
    </View>
  );
}
export function TagStack() {
  return (
    <View style={styles.containerPost}>
      <Image style={styles.imagePost} source={images.images.pic6} />
      <Image style={styles.imagePost} source={images.images.pic6} />
      <Image style={styles.imagePost} source={images.images.pic6} />
      <Image style={styles.imagePost} source={images.images.pic1} />
      <Image style={styles.imagePost} source={images.images.pic1} />
      <Image style={styles.imagePost} source={images.images.pic1} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: (windowWidth - 2) / 2,
    height: (windowWidth - 100) / 2,
  },
  imageContainer: {
    flexWrap: 'wrap',
  },
  containerIgTv: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 4,
  },
  imageIgTv: {
    width: (windowWidth - 20) / 2,
    height: (windowWidth - 20) / 2 + 80,
    borderRadius: 20,
  },
  containerPost: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imagePost: {
    width: (windowWidth - 5) / 3,
    height: (windowWidth - 2) / 3,
  },
});
