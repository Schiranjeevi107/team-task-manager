import { useState } from 'react';
import axios from 'axios';

function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Member'
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                'team-task-manager-production-f165.up.railway.app',
                formData
            );

            alert(res.data.message);

        } catch (err) {

            console.log(err);

            alert('Registration Failed');

        }

    };

    return (

        <div>

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="role"
                    onChange={handleChange}
                >

                    <option value="Member">
                        Member
                    </option>

                    <option value="Admin">
                        Admin
                    </option>

                </select>

                <br /><br />

                <button type="submit">
                    Register
                </button>

            </form>

        </div>

    );

}

export default Register;