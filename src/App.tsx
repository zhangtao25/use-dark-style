import { useState } from 'react'
import reactLogo from './assets/react.svg'
import useDarkMode from "./lib/useDarkMode";

function App() {
  const [count, setCount] = useState(0)
  const darkMode = useDarkMode()
  return (
    <div className="App">
      {darkMode.value}
      <button onClick={()=>darkMode.toggle(!darkMode.value)}>切换</button>
    </div>
  )
}

export default App
