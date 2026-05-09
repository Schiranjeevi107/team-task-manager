import { useState } from 'react';

import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                'team-task-manager-production-f165.up.railway.app',

                {
                    email,
                    password
                }

            );

            localStorage.setItem(
                'token',
                res.data.token
            );

            alert('Login Successful');

            window.location.reload();

        }

        catch (err) {

            console.log(err);

            alert('Login Failed');

        }

    };

    return (

        <div>

            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;