import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Header } from './components/Header.jsx'

const App = () => {
  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great desing transform complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  
  const characters = excludeSpaces ? text.replace(/\s/g, ""). length : text.length

  const handleChangeTextarea = (e) => {
    const value = e.target.value


const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
   }


    if (limitCharacter) {
      if (e.target.value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    } 
  }

  return (
    <main>
      <Header/>
      <h2>Analyze your text <br />
       in real-time.</h2>

      <textarea 
        placeholder='Escribe tu texto...'
        onChange={handleChangeTextarea}
        value={text}
        ></textarea>
        <div> 
          <label>
            <input
              type="checkbok" 
              checked={excludeSpaces}
              onChange={() => setExcludeSpaces (!excludeSpaces)}
              />
            Excluir espacios
          </label>
          <label>
            <input
              type="checkbok" 
              checked={limitCharacter}
              onChange={() => setLimitCharacter (!limitCharacter)}
              />
            Límite de caracteres
          </label>
          {
            limitCharacter && 
            <input 
              type="number" 
              value={limitValue}
              onChange={(e) => setLimitValue(e.target.value)}
            />  
          }
        </div>
        <p>Cantidad de caracteres: {text.length} </p>
    </main>
       
  )
}

export { App }
