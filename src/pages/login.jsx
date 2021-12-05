import '../css/login.css'
import cartlogin from '../assets/cartlogin.png'
import TextField from '@mui/material/TextField';
import React,{useState} from "react";
import { useHistory } from "react-router";
import { login, signUp } from '../services/userservices';
const fullNameRegex = /^[a-zA-Z ]*$/;
const passwordRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mobilenumRegex=/^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;

function Login() {

    let history=useHistory()
   
const[hidesignup,setView] = useState(true)
const[fullname,setFullName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[mobilenum,setNumber]=useState("")
const[errorfullname,setErrorFullName]=useState(false)   
const[erroremail,setErrorEmail]=useState(false)
const[errorpassword,setErrorPassword]=useState(false)
const[errormobile,setErrorMobile]=useState(false)
const[displayhelp,setHelpquote]=useState("")
const[displaypassrule,setPassruleQuote]=useState("")




const showsignup=()=>{
    setView(false)}
const showlogin=()=>{
    setView(true)}
const takeFullname=(event)=>{
    setFullName(event.target.value)
}

const takePassword=(event)=>{
    setPassword(event.target.value)
}
const takeEmail=(event)=>{
    setEmail(event.target.value)
}

const takeNumber=(event)=>{
    setNumber(event.target.value)
   
}
 
    
const validateAndSubmit=()=>{



let RegFullname=fullNameRegex.test(fullname)
let RegEmail=emailRegex.test(email)
// let RegPassword=passwordRegex.test(password)
let RegNumber=mobilenumRegex.test(mobilenum)

if(!RegFullname && !RegEmail &&  !RegNumber){

    setErrorEmail(true)
    setErrorFullName(true)
    setErrorPassword(true)
    setErrorMobile(true)
    setHelpquote("Fields cannot be blank")
    }else if(!RegFullname){
        setErrorFullName(true)
    }else if(!RegEmail){
        setErrorEmail(true)
    //}else if(!RegPassword){
    //     setErrorPassword(true)
    //     setPassruleQuote("Invalid Password")
    }else if(!RegNumber){
        setErrorMobile(true)
    }else{
        setErrorEmail(false)
        setErrorFullName(false)
        setErrorPassword(false)
        setErrorMobile(false)
    
    }
    console.log(fullname,email,password,mobilenum )

    if((RegFullname && RegEmail  && RegNumber)){

    let obj= {
            "fullName":fullname,
            "email": email,
            "password":password,
            "phone": mobilenum,
            
          }
        
    signUp(obj).then((response)=>{
        console.log(response)
        history.push("/")
    }).catch((error)=>{
        console.log(error)
    })
          


    }


}

const validateEmailpassword = ()=>{
    let RegEmail=emailRegex.test(email)
    let RegPassword=passwordRegex.test(password)


    if(!RegEmail && !RegPassword){
        setErrorEmail(true)
        setErrorPassword(true)
    }else if(!RegPassword){
        setErrorPassword(true)
    }else if(!RegEmail) {
        setErrorEmail(true)
     
    }else{
        setErrorEmail(false)
        setErrorPassword(false)
    }

    return(RegEmail && RegPassword)

}


const userlogin=()=>{

    let validation=validateEmailpassword()
    
   if(validation){

    
    let obj=  {
        "email": email,
        "password": password
      }

      login(obj).then((response)=>{
          console.log(response.data.result.accessToken)
          localStorage.setItem('token',response.data.result.accessToken)
          history.push("/home")
      }).catch((error)=>{
          console.log(error)
      })

   }

      


    

}








    return (
        <div data-test="component-login"  className='mainContainer'>

           
                
                <div className="side-cart-card">
                  <div className="image-cart">
                      <img src={cartlogin}/>
                  </div>

                  <div className="text1">
                      <p>Online Book Shopping</p>
                  </div>

                </div>


            
                <div className="right-login-card">

                    <div className="innerbox1">
                            <div className="first-row-text">
                                <div onClick={showlogin}>Login</div>
                                <div id="user-signup"onClick={showsignup}>Signup</div>


                            </div>
                        {hidesignup?
                        <div className="box_fields_buttons">
                            <div className="indicator"></div>
                            <div className="emailid">
                                <TextField 
                                        onChange={takeEmail}
                                        error={erroremail}
                                        label="Email id"
                                        id="outlined-size-small"
                                        id="email-inputfield"
                                        defaultValue=""
                                        size="small"
                                        className="login-fields"
                                        />
                            </div>

                            <div className="password">
                            <TextField  
                                        onChange={takePassword}
                                        error={errorpassword}
                                        label="Password"
                                        id="outlined-size-small"
                                        defaultValue=""
                                        size="small"
                                        type="password"
                                        className="login-fields"
                                        />


                               

                            </div>

                            
                            <div>

                            <button onClick={userlogin} id="login"> Login</button>
                            </div>

                            <div className="textbox_or">
                                    OR
                            </div>

                            <div className="socialmedia-login">
                            <button id="fb"> Facebook</button>
                            <button id="google"> Google</button>
                            
                            </div>

                        </div>:
                        <div className="box_fields_buttons">
                            <div className="indicator-2"></div>
                            <div className="fullname">
                                <TextField 
                                        label="Fullname"
                                        onChange={takeFullname}
                                        error={errorfullname}
                                        id="outlined-size-small"
                                        defaultValue=""
                                        size="small"
                                        className="login-fields"
                                        
                                        />
                            </div>
                            <div className="emailid">
                                <TextField 
                                        label="Email id"
                                        onChange={takeEmail}
                                        error={erroremail}
                                        id="outlined-size-small"
                                        defaultValue=""
                                        size="small"
                                        className="login-fields"
                                        />
                            </div>

                            <div className="password">
                            <TextField  
                                        label="Password"
                                        onChange={takePassword}
                                        error={errorpassword}
                                        id="outlined-size-small"
                                        defaultValue=""
                                        size="small"
                                        type="password"
                                        className="login-fields"
                                        helperText={displaypassrule}
                                        />
    
                            </div>

                            <div className="mobilenumber">
                            <TextField  
                                        label="Mobile number"
                                        onChange={takeNumber}
                                        error={errormobile}
                                        id="outlined-size-small"
                                        defaultValue=""
                                        size="small"
                                        type="tel"
                                        className="login-fields"
                                        
                                        />
                                        <p id="warningtxt">{displayhelp}</p>
    
                            </div>

                            <div>

                            <button onClick={validateAndSubmit}   id="login"> Signup</button>
                            
                            </div>


                        </div>}
      

                        
                                                                       
                    </div>
                </div>
           
            

            
        </div>
    )
}

export default Login
