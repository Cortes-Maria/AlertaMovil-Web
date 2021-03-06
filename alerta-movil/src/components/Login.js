import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {

    
    state = {
        email: '',
        pass: ''
    };


    onChangeEmail= (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }

    onChangePassword= (e) => {
        this.setState({
            pass: e.target.value
        })
        console.log(e.target.value)
    }

    onSubmit =  async e => {
        e.preventDefault();
        window.location.href = "/alertas"
    }

    render() {
        return (
           <div className="col-md-6 offset-md-3 mt-5 mb-5">
               <div className="card card-body">
                   <h4 className="text-center">Iniciar sesion</h4>
                    <div className="form-group">
                        <input type="text" className="form-control" name="username" placeholder="Email" required="required" onChange={this.onChangeEmail}/>			
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" required="required"  onChange = {this.onChangePassword} />
                    </div>
                   <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-dark">
                            Acceder
                        </button>
                   </form>
                   
               </div>
               <div className="modal-footer">
				        ¿Nuevo en Alerta Movil? 
                        <Link to="/signup">
                        Registrate
                        </Link>
			    </div>  
           </div>
        )
    }
}
