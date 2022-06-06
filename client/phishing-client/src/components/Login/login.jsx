import { useState } from 'react';
import axios from 'axios';

const LoginPage = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");




    const handleLogin = (event) => {
        event.preventDefault();
        // axios.defaults.withCredentials = true;
        // console.log(username, password);
        axios.post('http://localhost:8080/api/user/login',)
            .then(response => {
                // setMassageBakend(response.data.message)
                console.log(response);
                alert(response.data.message);
            }).catch((error) => {
                console.log(error);
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