import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Match from '../modules/match/Match';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />
        <Stack.Screen name='Match'>
          {(props: any) => <Match {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

{
  /*
<NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{animationTypeForReplace:'pop'}}>
              <Stack.Screen name="Home" component={HomeScreen} options={() => ({
                  title: "",
                  headerStyle: {
                      backgroundColor:colorPalette.tertiary
                  },
                  animationTypeForReplace: 'push',
                  animation:'slide_from_right'
              })}
              />
              <Stack.Screen name="AddAlarm" component={AddAlarmScreen} options={() => ({
                  title: "",
                  headerStyle: {
                      backgroundColor:colorPalette.tertiary
                  },
                  animationTypeForReplace: 'push',
                  animation:'slide_from_right'
              })}
              />
          </Stack.Navigator>
      </NavigationContainer>
 */
}
