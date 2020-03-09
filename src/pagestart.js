import React from 'react';
//import App from './App.js';
import './App.css'
import logo from "./accountcircle.png"

 class Login extends React.Component{
 constructor (props){
     super(props);
     this.state = {
        username: "Evans", // will use back end at some point
        password:'Takudzwa',  // will use back end at some point
        pass: false,
        user:false,
        signedIn: false,
        } ;
     this.handleChange = this.handleChange.bind(this);
     //this.handleSubmitPass = this.handleSubmitPass.bind(this);
    // this.keyPressed = this.keyPressed.bind(this);
     }

 handleChange(evet){
    // alert(evet.target.name);
    const obj = evet.target.name;
    if (obj == "password"){
        if(evet.target.value === this.state.password){
            this.setState({
                pass: true
            })
        }
    }else if(obj == "username"){
        if(evet.target.value === this.state.username){
            this.setState({
                user: true
            })
        }

    }

    if(this.state.username&&this.state.pass){
        this.setState({
            signedIn: true
        })
    }
    
     
    
};



 render(){
   
    var logn =(
        <div className = "login">
                <h1 id = 'title'>NuColab</h1>
                <img src = {logo}  id = "logincircle" />
                     <h1 id = "Logoname">Login</h1>
                <form className = 'user'>
                   <input type = "text" name = "username" placeholder = "username" onChange= {this.handleChange} /> 
                </form>
   
                <form className = 'pass'>
                   <input type = "password" name = "password" placeholder = "Password" onChange= {this.handleChange} />
                  
                </form>
   
                <h1>No account? sign up</h1>
                <button>Sign up</button>
   
                
         </div>
    );
        
            
    var welcome = (<h1 id = "Welcome">Hello {this.state.username}</h1>);
    
    var signedIn =this.state.user && this.state.pass;
    if(signedIn){
        return(
            <div className = "signedIn">
                <h1 id = "signedInTitle">CollabNu</h1>
        <h1 id = "welcome">Welcome {this.state.username}</h1>
                 
            </div>
           
        )
    } else {
        return(
            <div> {logn}</div>
           
        )
    }

    
}
}
  


export default Login

/*handleSubmitPass(pass){
    alert(pass)
   alert(pass.target.querySelector('input[type = "password"]'.value));
   const password = pass.target.querySelector('input[type = "password"]'.value);
   const rightpass = password === this.state.password;
   

   this.setState({
       pass: rightpass
   })
}

/*keyPressed(event){
  
  if(event.key === "Enter") {
  // alert('err')
   //alert(this.state.pass) 
   this.handleSubmitPass(); 
   
  
  }
   
}*/