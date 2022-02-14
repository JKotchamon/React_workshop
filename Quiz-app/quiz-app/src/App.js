import {createContext,useState} from "react"
import Menu from "./components/menu"
import Quiz from "./components/quiz"
import Score from "./components/score"

export const DataContext = createContext()

function App() {
  const [appState,setAppState] = useState("menu")
  return (
    <DataContext.Provider value= {{appState,setAppState}}>
      <div className="App">
          <h1>Web Development Quiz</h1>
          {appState === "menu" && <Menu/>}
          {appState === "quiz" && <Quiz/>}
          {appState === "score" && <Score/>}
      </div>
    </DataContext.Provider>
  );
}

export default App;
