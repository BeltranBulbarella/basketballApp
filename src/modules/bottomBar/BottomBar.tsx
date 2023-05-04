import {StyleSheet, View} from 'react-native';
import {BarChart2, Clock, List} from 'react-native-feather';
import {BottomBarCurrent} from '../../utils/types';

const BottomBar = ({
  navigation,
  current,
}: {
  navigation: any;
  current: BottomBarCurrent;
}) => {
  return (
    <View style={styles.container}>
      <Clock
        testID='bottombar-clock'
        style={styles.buttons}
        color={current === BottomBarCurrent.LastMatches ? '#F29D38' : '#FFFFFF'}
        onPress={() => navigation.navigate('LastMatches')}
      />
      <BarChart2
        testID='bottombar-barchart2'
        style={styles.buttons}
        color={current === BottomBarCurrent.Standings ? '#F29D38' : '#FFFFFF'}
        onPress={() => navigation.navigate('Standings')}
      />
      <List
        testID='bottombar-list'
        style={styles.buttons}
        color={current === BottomBarCurrent.Players ? '#F29D38' : '#FFFFFF'}
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
    width: '40',
    height: '40',
  },
});

export default BottomBar;
