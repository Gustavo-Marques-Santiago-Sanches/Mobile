import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    fundo:{
        backgroundColor: "black",
        height: "100%",
    },
    logo:{
        width: 265,
        height: 150,
        
    },
    desc: {
        marginLeft: 15,
        color: "white",
        fontSize: 16,
        textAlign: "justify",
        marginRight: 15,
    },
    titulo:{
        marginLeft: 15,
        marginRight: 15,
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 10,
    },
    imagem: {
        marginLeft: 15,
        width: 190,
        height: 190,
    },
    video: {
        width:320,
        height: 200,
        marginHorizontal: 45,
        borderRadius: 10,
    },
    input_texto:{
        height: 40,
        color: "white",
        margin: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    botao:{
        marginHorizontal: 30,
        marginBottom: 15,
        width: "85%",
        height: 35,
        backgroundColor: "gold",
        borderRadius: 5,
    },
    texto_botao:{
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 7.5,
    }
})

export default styles;