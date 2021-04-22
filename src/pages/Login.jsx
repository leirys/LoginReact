import React,{Component} from 'react';
import '../css/login.css';
import logo from '../images/logo-tutenlabs.png';
import {Apiurl} from '../services/apirest';

import axios from 'axios';


class Login extends Component{
	// eslint-disable-next-line no-useless-constructor
	constructor(props){
		super(props);
	
	}
	state={
		form:{
			"email":"",
			"password":"",
		
			

		},
		error:false,
		errorMsg:""
	}
	manejadorSubmit=e=>{
		e.preventDefault();
	}
	manejadorChange= async e=>{
		await this.setState({
			form:{
				...this.state.form,
				[e.target.name]:e.target.value
			}
			
			  
		})
	
		console.log(this.state.form);
	
	}

	manejadorBoton=() =>{
		let url= Apiurl ;
	
		const config = { headers: {'Content-Type': 'application/json','app': 'APP_BCK','password':this.state.form.password	} };
			axios.put(url, this.state.form, config).then(response => {
				
				if(response.statusText === "OK"){
					
					const token = response.data.sessionTokenBck;
					localStorage.setItem('token', token);
					this.props.history.push("/List")
					const adminemail = response.data.email;
					localStorage.setItem('adminemail', adminemail);
			
					console.log(adminemail);
				}
		
		
		
			});
			
	}

render(){
	const {password,email } = this.state;
    return(
<React.Fragment>
<div className="wrapper fadeInDown">
  <div id="formContent">
  
    <div className="fadeIn first">
      <img src={logo} width="175px" height="25px" alt="User Icon" />
    </div>

    <form onSubmit={this.manejadorSubmit}>
      <input type="text" className="fadeIn second" name="email" value={email} placeholder="user" onChange={this.manejadorChange}/>
      <input type="password"  className="fadeIn third" name="password" value={password} placeholder="password"  onChange={this.manejadorChange}/>
	  <input type="submit" onClick={this.manejadorBoton } class="fadeIn fourth" value="Log In"/>
    </form>




  </div>
</div>
</React.Fragment>

    );
}
}
export default Login