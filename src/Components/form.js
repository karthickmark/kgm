import './Style.css';
import { useState } from "react";
function Form(){

    const [inputs , setInputs] = useState({name:'',mail:'',password:''});

    const  updateFunc = (event) =>{
        event.preventDefault();
        console.log('input : ',inputs)

    }
    const handleFunc = (e) =>{
       const {name,value} = e.target;
       setInputs(pre => {return{...pre,[name]:value}})

    }
    
    return(
        <div className="contain">
           <div className="container">
           <div className="left-side-form">
                <div>
                <h2>welcome back</h2>
                <p>To keep connected with us please login with your information</p>
                <button>sign up</button>
                </div>

           </div>
           <form onSubmit={updateFunc}>
           <div className="right-side-form">
                <div>
                <h2>sign up</h2>
                <input type="text" name="name" placeholder="enter your name... " value={inputs.name} onChange={handleFunc}/>
                <input type="email" name="mail" placeholder="enter your mail..." value={inputs.mail} onChange={handleFunc}/>
                <input type="password" name="password" placeholder="enter a password..." value={inputs.password} onChange={handleFunc} />
                <div className="right-button"><button type='submit'>sign in</button></div>
                </div>
                
            </div>
           </form>
          
           </div>
        </div>
    )
}
export default Form;