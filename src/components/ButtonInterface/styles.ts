import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin: 10,
    },
    buttonThird: {
        backgroundColor: colors.third,
        borderRadius: 5,
        margin: 10,
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
    }
})