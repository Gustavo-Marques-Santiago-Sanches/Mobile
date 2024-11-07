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
        backgroundColor: 'white',
    },
    imagem_API: {
        // width: '100%',
        height: 120,
        width: 120,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: "white",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
    },
    card_API: {
        width: '74%',
        alignSelf: 'center',
        backgroundColor: "white",
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: 'black',
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