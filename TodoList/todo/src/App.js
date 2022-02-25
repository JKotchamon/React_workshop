import './App.css';
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import List from './component/list'
import Alert from './component/alert';

function App() {
  const [name,setName] = useState("")
  const [list,setList] = useState([])

  const [alert,setAlert] = useState({show:false,msg:"",type:""})
  const [checkEditItem,setCheckEditItem] = useState(false)
  const [editId,setEditId] = useState(null)

  const submitData=(e)=>{
    e.preventDefault()
    if(!name){
      // show alert
      setAlert({show:true,msg:"Please fill in this form",type:"error"})
    
    }else if(checkEditItem && name){
      //update data
      const result = list.map((item)=>{
        if(item.id === editId){
          return{...item,title:name}
        }
        return item
      })
      setList(result)
      setName('')
      setCheckEditItem(false)
      setEditId(null)
      setAlert({show:true,msg:"The rewrite is finished.",type:"success"})

    }else{
      const newItem = {
        id:uuidv4(),
        title: name
      }
      setList([...list,newItem])
      setName('')  
      setAlert({show:true,msg:"Data Enrty",type:"success"})  
    }
  }

  const removeItem=(id)=>{
    const result = list.filter((item)=>item.id !== id)
    setList(result)
    setAlert({show:true,msg:"The data has been deleted",type:"error"})
  }

  const editItem=(id)=>{
    console.log("asd =",id);
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find((item)=>item.id === id)
    console.log(searchItem)
    setName(searchItem.title)
  }

  return (
    <section className='container'>
      <h1>Todo_List</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}></Alert>}
      <form className='form-group' onSubmit={submitData}>
        <div className='form-control'>
          <input type="text" className='text-input' 
            onChange={(e)=>setName(e.target.value)}
            value={name}>

          </input>
          <button type="submit" className="submit-btn">
            {checkEditItem ? "Edit Data" : "ADD Data"}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {list.map((data,index)=>{
          return <List key={index} {...data} removeItem={removeItem} editItem={editItem} ></List>          
        })}
      </section>
    </section>

  );
}

export default App;
