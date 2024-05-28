import lado_direito from '../../assets/pantufa.png';
import lado_esquerdo from '../../assets/pantufa.png';

const item = {
    detalhes: {
        imagem: lado_direito,
        titulo: "Produto",
        legenda: "Contem um par de pantufas ursinhos carinhosos"
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "1x Pantufa lado direito",
                imagem: lado_direito,
            },
            {
                nome: "1x Pantufa lado esquerdo",
                imagem: lado_esquerdo,
            },
            {
                nome: "1x Pantufa lado 2 lados",
                imagem: lado_direito,
            },
            {
                nome: "1x Pantufa lado esquerdo",
                imagem: lado_esquerdo,
            }
        ]
    }
}

export default item;