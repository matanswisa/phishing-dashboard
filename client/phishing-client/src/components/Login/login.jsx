import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
import { useRecoilState } from 'recoil';
import { accessToken as accessTokenAtom } from '../../atoms/atoms'

const LoginPage = (props) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);




    const handleLogin = (event) => {
        event.preventDefault();

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:8080/api/user/login', { mail: username, password })
            .then(response => {
                alert(response.data.message);
                if (response.data.success) {
                    console.log(response.data.accessToken);
                    setAccessToken(response.data.accessToken)
                    navigate('/admin')

                }
            }).catch((error) => {
                alert(error.response.data.message);
            })
    }

    return (
        <form>
            <h2>Cymulate</h2>
            <div className="user">
                <label>Username</label>
                <input type="text" name="username" onChange={(event) => { setUsername(event.target.value) }} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={(event) => { setPassword(event.target.value) }} />
            </div>
            <input type="submit" name="login" value="Login" onClick={handleLogin} />
        </form >
    );
};




export default LoginPage;