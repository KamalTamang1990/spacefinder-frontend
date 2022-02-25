import { timeStamp } from "console"
import React from "react"
import { AuthService } from "../services/AuthService"


interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttempted: boolean,
    loginSuccessful: boolean
}
interface CustomEvent{
    target: HTMLInputElement
}

export class Login extends React.Component<LoginProps, LoginState>{
    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessful: false
    }

    private setUserName(event: CustomEvent){
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent){
        this.setState({password: event.target.value})
    }
    render(){
        return(
            <div>
                <h2>Please login</h2>
                <form>
                    <input value={this.state.userName} onChange={e =>this.setUserName(e)}/><br/>
                    <input value={this.state.password} onChange={e =>this.setPassword(e)}type='password'/><br/>
                    <input type= 'submit' value='Login'/>
                </form>
            </div>
        )
    }

}