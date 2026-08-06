import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Header } from './components/Header.jsx'

const App = () => {
  const [text, setText] = useState("Design is the silent ambassador of your brand. Simplicity is key to effective communication, creating clarity in every interaction. A great desing transform complex ideas into elegant solutions, making them easy to understand. It blends aesthetics and functionality seamlessly")
  
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(30)
  
  const characters = excludeSpaces ? text.replace(/\s/g, ""). length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const readingTime = Math.ceil(words / 200)
  
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

  const cleanText = text.toLowerCase().replace(/[^a-z]/g, "")

  const dictionaryLetters = {}
  
  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
    } )

    
    const letter = Object.entries(dictionaryLetters).map(dataLetter => {
      const letter = dataLetter[0]
      const amountLetter = dataLetter[1]

      const infoToRederLetter = {
        letterName: letter,
        amount: amountLetter,
        porcentaje: 0
      }

      return infoToRederLetter
    } )
    
  const sortLeters = letters.sort((a,b) => b.amount - a. amount)

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
        <p>Cantidad de caracteres: {characters} </p>
        <p>Cantidad de palabras: {words} </p>
        <p>Cantidad de oraciones: {sentences} </p>
        <p>Tiempo aprox. de lectura: &lt;{readingTime}min </p>
        <section>
          <h2>Cantidad de letras</h2>
          <article>
            {
              sortLetters.map (letter => (
                <div key={letter.letterName}>
                  <span>{letter.letterName.toUpperCase} </span>
                  <meter min="0" max="100" value={letter.porcentaje}></meter>
                  <span>{letter.amount} ({letter.porcentaje.toFixed(1)}%) (100%)</span>
               </div> ))
            }
          </article>
        </section>
    </main>
       
  )
}

export { App }
