import { useState } from 'react'
import LightToggle from './components/LightToggle'
import LottoNumbers from './components/LottoNumbers'
import ClickCounter from './components/ClickCounter'

const App = () => {
  const [isLightsOn, setIsLightsOn] = useState(true)
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([])
  const [clickCount, setClickCount] = useState(0)

  const lightStyle = {
    backgroundColor: isLightsOn ? 'white' : 'black',
    color: isLightsOn ? 'black' : 'white',
    padding: '1rem',
    marginBottom: '1rem',
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Light Toggle</h2>
      <LightToggle toggleLights={() => setIsLightsOn(prev => !prev)} />
      <div style={lightStyle}>
        {isLightsOn ? 'Lights are ON' : 'Lights are OFF'}
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers generateNumbers={() => {
        const numbers = Array.from({ length: 7 }, () =>
          Math.floor(Math.random() * 50) + 1
        )
        setLottoNumbers(numbers)
      }} />
      <div className="output">{lottoNumbers.join(', ')}</div>

      <h2>Click Counter</h2>
      <ClickCounter increment={() => setClickCount(prev => prev + 1)} />
      <div className="output">You've clicked {clickCount} times</div>
    </div>
  )
}

export default App

