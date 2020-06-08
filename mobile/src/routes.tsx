import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Pages/Home';
import Points from './Pages/Points';
import Detail from './Pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            }}>
                <AppStack.Screen name="Home" component={Home}></AppStack.Screen>
                <AppStack.Screen name="Points" component={Points}></AppStack.Screen>
                <AppStack.Screen name="Detail" component={Detail}></AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;