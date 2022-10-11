import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import { Warning } from "../components/UI/Warning/Warning";
import { AuthContext } from "../context/context";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export default function Auth() {
    const {setIsAuth, username, setUsername, password, setPassword} = useContext(AuthContext);
    const [warn, setWarn] = useState(<></>);
    const location = window.location.href;

    const removeWarn = () => {
        setWarn(<></>)
    }

    const logIn = () => {
        if(username !== '' && password !== '') {
            setIsAuth(true);
            localStorage.setItem('auth', true);
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            setWarn(
                <div style={{position: "absolute", right: 0, top: 30}}>
                    {username !== '' && password === '' ?
                        <Warning style={{top: 55}}>You have to write your password!</Warning>
                    : username === '' && password !== '' ?
                        <Warning>You have to write your username!</Warning>
                    :
                        <Warning>You have to write your username and password!</Warning>
                    }
                </div>
            )
        }
    }

    return (
        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', gap: 15, width: '50%', alignSelf: 'center'}}>
            {location.includes('/login') ?
                <p>Log in or <Link to={REGISTRATION_ROUTE} style={{textDecoration: 'underline'}}>create an account</Link></p>
            :
                <p>Sign up or <Link to={LOGIN_ROUTE} style={{textDecoration: 'underline'}}>log into an existing account</Link></p>
            }
            {warn}
            <Input
                value={username}
                onChange={e => setUsername(e.target.value)}
                onClick={removeWarn}
                placeholder='Username'
            />
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                onClick={removeWarn}
                type='password'
                placeholder='Password'
            />
            <div style={{alignSelf: 'flex-end'}}>
                <Button onClick={logIn}>
                    {location.includes('/login') ? 'Log in' : 'Sign up'}
                </Button>
            </div>
        </div>
    );
};