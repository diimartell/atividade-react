// Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import './App.css'

function App() {

  return (
    <div className='app'>
        <div className='header'>
          <h2>Deeixe sua avaliação!</h2>
          <p>
            utilize o formulario abaixo para fazer sua avaliação.
          </p>
        </div>
        <div className='forme-container'>
          <p>Etapas</p>
          <form>
            <div className="inputs-container"></div>
            <div className="actions">
              <button type='button'>
              <GrFormPrevious/>
                <span>Voltar</span>
                </button>
              <button type='submit'>
                <span>Avançar</span>
              <GrFormNext/> 
                </button>
                
            </div>
          </form>
        </div>
    </div>
  )
}

export default App
