import logo from './logo.svg';
import './App.css';
import data from './data'
import {useState} from "react"
import SingleContent from './component/SingleContent';

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Programming tools 2022</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id} {...data}></SingleContent>
          })}
        </section>
      </div>
    </main>

  );
}

export default App;
