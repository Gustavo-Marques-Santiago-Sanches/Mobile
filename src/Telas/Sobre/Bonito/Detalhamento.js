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
        marginBottom: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'white',
    }
})

export default styles;