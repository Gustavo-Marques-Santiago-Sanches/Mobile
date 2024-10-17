import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
    },
    lista: {
        height: '100%',
    },
    cardContainer: {
        width: '50%',
        marginBottom: 10,
    },
    imagem: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: "white",
    },
    nomeProduto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 26,
        color: 'gold',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 10,
    },
    lixeira: {
        alignSelf: "center",
    }
})

export default styles;