import { StyleSheet } from "react-native";
import {colors} from '../../styles/globalstyles';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})