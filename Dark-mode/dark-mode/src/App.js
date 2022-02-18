import './App.css';
import Content from './component/content';
import Title from './component/title';
import {createContext, useState} from "react"

export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title></Title>
        <Content></Content>
      </div> 
    </ThemeContext.Provider>  
  );
}

export default App;
