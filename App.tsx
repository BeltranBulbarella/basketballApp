import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Standings from './src/modules/standings/Standings';
import Players from './src/modules/players/Players';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{animationTypeForReplace: 'pop'}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
