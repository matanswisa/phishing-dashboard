import axios from 'axios'
import React from 'react'
import { useRecoilState } from 'recoil';
import { accessToken as accessTokenAtom } from '../../atoms/atoms'



export default function Dashboard(props) {


    const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);

    const handleOnClick = () => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8080/api/user/isAuth', {
            headers: {
                'Authorization': `token ${accessToken}`
            }
        })
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <>
            <div>Dashboard</div>
            <button onClick={handleOnClick}> Press me lol</button>
        </>
    )

}
