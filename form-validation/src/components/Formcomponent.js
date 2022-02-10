import './Formcomponent.css'
import {useState} from "react"

const  FormComponent = ()=>{

    const[userName,setUserName] = useState('')
    const[email,setEmail]= useState('')
    const[password,setPassword] = useState('')
    const[conPassword,setConpass] = useState('')

    const [errorUsername,SetErrorUsername] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorConpass,setErrorConpass] = useState('')


    const [userNameColor,setColorName] = useState('')
    const [userEmailColor,setColorEmail] = useState('')
    const [userPasswprdColor,setPasswprdColor] = useState('')
    const [userConpassColor,setConpassColor] = useState('') 

    const validateForm = (e)=>{
        e.preventDefault()
        
        if(userName.length>8){
            SetErrorUsername('')
            setColorName('green')
        }
        else{
            SetErrorUsername('Must be between eight and 50 characters long.')
            setColorName('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setColorEmail('green')
        }
        else{
            setErrorEmail('Email prefix and an email domain.')
            setColorEmail('red')
        }

        if(password.length>8){
            setErrorPassword('')
            setPasswprdColor('green')
        }
        else{
            setErrorPassword('Must be more eight characters long.')
            setPasswprdColor('red')
        }

        if(conPassword != " " && conPassword === password){
            setErrorConpass('')
            setConpassColor('green')
        }else{
            setErrorConpass('Password does not match.')
            setConpassColor('red')
        }

        
        


    }

    return(
        <div className="container">
            <h2>Form Register</h2>
            <form className="form" onSubmit={validateForm}>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value ={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}></input>
                    <small style={{color:userNameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:userEmailColor}}></input>
                    <small style={{color:userEmailColor}} >{errorEmail}</small>
                </div>        
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:userPasswprdColor}}></input>
                    <small style={{color:userPasswprdColor}} >{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Passowrd</label>
                    <input type="password" value={conPassword} onChange={(e)=>setConpass(e.target.value)} style={{borderColor:userConpassColor}}></input>
                    <small style={{color:userConpassColor}} >{errorConpass}</small>
                </div>     
                <button type="submit">Registration</button>                           
            </form>
        
        </div>
    )

}
export default FormComponent