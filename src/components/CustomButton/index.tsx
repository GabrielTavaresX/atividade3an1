import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from "./styles"

interface IButton{
  title: string,
  onPress: () => void
}

const CustomButton = ({ title, onPress } : IButton) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;