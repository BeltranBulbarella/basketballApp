import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Standings from './src/modules/standings/Standings';
import Players from './src/modules/players/Players';
import Match from './src/modules/match/Match';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            animationTypeForReplace: 'pop',
            headerStyle: {
              backgroundColor: '#333333', // Change the background color of the header
            },
            headerTintColor: '#F29D38', // Change the color of the header text
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={() => ({
              title: '',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            })}
          />
          <Stack.Screen
            name='LastMatches'
            component={Home}
            options={() => ({
              title: '',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            })}
          />
          <Stack.Screen
            name='Standings'
            component={Standings}
            options={() => ({
              title: '',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            })}
          />
          <Stack.Screen
            name='Players'
            component={Players}
            options={() => ({
              title: '',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            })}
          />
          <Stack.Screen
            name='Match'
            component={Match}
            options={() => ({
              title: '',
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
