import {View, StyleSheet} from 'react-native';
import React from 'react';
import Rectangle from './components/Rectangle.js';
import bgColors from './content/bgColors';

export default function App() {
  return (
    <View style={containerStyles.container}>
      {bgColors.length > 0 &&
        bgColors.map((color, index) => (
          <Rectangle
            bgColor={color.hex}
            colorName={color.name}
            key={index + Math.random()}
          />
        ))}
    </View>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 28,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
