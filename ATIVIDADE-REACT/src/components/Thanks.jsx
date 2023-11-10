import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>Sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto na sua próxima compra. </p>

        <p>Para concluir a avaliação clique no botão de Enviar abaixo</p>
        <h3>Aqui está o resumo de sua avaliação:</h3>
          <p className="review-data">
          <span>Satisfação com o produto:</span>
          </p>
          <p className="review-data">
          <span>Comentário:</span>
          </p>
    </div>
  )
}

export default Thanks;