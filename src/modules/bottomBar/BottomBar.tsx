import {View, StyleSheet} from 'react-native';
import {BarChart2, Clock, List} from 'react-native-feather';

const BottomBar = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Clock
        style={styles.buttons}
        onPress={() => navigation.navigate('LastMatches')}
      />
      <BarChart2
        style={styles.buttons}
        onPress={() => navigation.navigate('Standings')}
      />
      <List
        style={styles.buttons}
        onPress={() => navigation.navigate('Players')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333333',
    height: 62,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttons: {
    width: '30',
    height: '30',
  },
});

export default BottomBar;
