import React, { Component } from 'react';
import { StyleSheet,Platform, View, Text, StatusBar} from 'react-native';
import {Icon} from 'native-base'
import { StackNavigator,TabNavigator,DrawerNavigator, TabBarBottom,NavigationActions } from 'react-navigation';
import SearchTab from './Tabs/SearchTab';
import HomeTab from './Tabs/HomeTab';
import ProfileTab from './Tabs/ProfileTab';
import LikesTab from './Tabs/LikesTab';
import AddMediaTab from './Tabs/AddMediaTab';
export default class MainScreen extends Component {
    static navigationOptions = {
       header: null,
    //   headerLeft: <Icon style={{paddingLeft: 10,}} name='ios-camera-outline' />,
    //  title: 'Instagram',
    //  headerRight: <Icon style={{paddingRight: 10,}} name='ios-send-outline' />
    }
  render() {
    return (
      <Tabs/>
    );
  }
}
const Tabs = TabNavigator({
    HomeTab: { screen: HomeTab},
    SearchTab: {screen: SearchTab},
    AddMediaTab: {screen: AddMediaTab},
    LikesTab: {screen: LikesTab},
    ProfileTab: {screen: ProfileTab},
},
    {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'HomeTab') {
              iconName = `ios-home${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'SearchTab') {
              iconName = `ios-search${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'AddMediaTab') {
              iconName = `ios-add-circle${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'LikesTab') {
              iconName = `ios-heart${focused ? '' : '-outline'}`;
            }
            else if (routeName === 'ProfileTab') {
                iconName = `ios-person${focused ? '' : '-outline'}`;
              }
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          showLabel: false,
          showIcon: true,
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          style: {
            ...Platform.select({
                android: {
                    backgroundColor: '#fff',
                }
            })
            },
        },
        animationEnabled: false,
        swipeEnabled: true,
      }
)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  