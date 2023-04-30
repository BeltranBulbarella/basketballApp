import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import type {Team} from '../../../../utils/interfaces';
import {SvgUri} from 'react-native-svg';

interface CustomButtonProps extends Team {
  onClick?: () => void;
}

const TeamButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onClick}>
      <SvgUri width='30' height='30' uri={props.imageURL} />
      <Text style={styles.teamName}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 50,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    paddingHorizontal: 8, // Add padding to the left and right
    borderRadius: 4,
  },
  teamName: {
    width: 90,
    height: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 12,
  },
});

export default TeamButton;
