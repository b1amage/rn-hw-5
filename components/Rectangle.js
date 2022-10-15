import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function Rectangle({bgColor, colorName}) {
  const rectangleColorStyles = StyleSheet.create({
    bg: {
      backgroundColor: bgColor,
    },
  });

  return (
    <View style={[rectangleBasedStyles.rectangle, rectangleColorStyles.bg]}>
      <Text style={rectangleBasedStyles.rectangle__text}>
        <Text>{colorName}:</Text>{' '}
        <Text style={uitlityStyles.uppercase}>{bgColor}</Text>
      </Text>
    </View>
  );
}

const rectangleBasedStyles = StyleSheet.create({
  rectangle: {
    width: '100%',
    height: 150,

    borderRadius: 8,
    marginVertical: 4,

    justifyContent: 'center',
    alignItems: 'center',
  },

  rectangle__text: {
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

const uitlityStyles = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
});
