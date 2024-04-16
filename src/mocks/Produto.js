import Logo from '../../assets/Logo.png';
import lado_direito from '../../assets/pantufa.png';
import lado_esquerdo from '../../assets/pantufa.png';

const produto = {
    topo: {
        titulo: "Detalhes do Produto",
    },
    detalhes: {
        nome: "Pantufa Ursinhos Carinhosos",
        logo: Logo,
        detalhes: "Uma linda e fofa pantufa para você presentear sua amada!",
        preco: "R$ 37,00",
        botao: "Adicionar a Lista de Desejos", 
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
            }
        ]
    }
}

export default produto;