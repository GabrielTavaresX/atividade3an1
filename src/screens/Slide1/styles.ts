import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    }, 
    header: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 40,
    },

    texto: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },

    table: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.gray,
        margin: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.black,
      },
      cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
      },
      text:{
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
      },
      botao:{
        flex: 1,
        padding: 10,
      }
})