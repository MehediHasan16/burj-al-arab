import React, { useContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const { googleLogIn, user } = useFirebase();
    return (
        <div>


            <form >
                <input type="email" name="" id="" placeholder='input email' />
                <br />
                <input type="password" name="" id="" placeholder='input passwords' />

            </form>

            <button onClick={googleLogIn}>Google Sigin</button>
        </div>
    );
};

export default Login;